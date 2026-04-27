import { useState, useEffect, useRef, useMemo } from "react";
import { Cpu, Activity, Zap, HardDrive } from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useWindowStore from "#store/window";
import useTranslation from "#hooks/useTranslation";

interface ProcessInfo {
  name: string;
  icon: string;
  cpu: number;
  memory: number;
  status: "active" | "idle" | "sleeping";
  windowKey: string;
}

const APP_META: Record<string, { label: string; icon: string }> = {
  finder: { label: "Finder", icon: "/images/finder.png" },
  safari: { label: "Safari", icon: "/images/safari.png" },
  contact: { label: "Contact", icon: "/images/contact.png" },
  terminal: { label: "Terminal", icon: "/images/terminal.png" },
  photos: { label: "Photos", icon: "/images/photos.png" },
  resume: { label: "Resume", icon: "/images/pages.png" },
  profile: { label: "Profile", icon: "/images/about-me.png" },
  spotify: { label: "Spotify", icon: "/images/spotify-light.png" },
  "app-store": { label: "App Store", icon: "/images/app-store.png" },
  settings: { label: "Settings", icon: "/images/settings.png" },
  snake: { label: "Snake", icon: "/images/snake-game-icon.png" },
  "activity-monitor": { label: "Activity Monitor", icon: "/images/monitor-icon.png" },
  mail: { label: "Mail", icon: "/images/mail-icon.png" },
};

const SKIP_KEYS = new Set(["txtfile", "imgfile"]);

function jitter(base: number, range: number) {
  return Math.max(0, +(base + (Math.random() - 0.5) * range).toFixed(1));
}

const ActivityMonitor = () => {
  const { windows } = useWindowStore();
  const { lang } = useTranslation();

  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);

  const seedRef = useRef<Map<string, { cpu: number; mem: number }>>(new Map());

  const openWindows = useMemo(() => {
    return Object.entries(windows)
      .filter(([key, w]) => w.isOpen && !SKIP_KEYS.has(key) && APP_META[key])
      .map(([key]) => key);
  }, [windows]);

  const [processes, setProcesses] = useState<ProcessInfo[]>([]);

  useEffect(() => {
    const buildProcesses = () => {
      const seed = seedRef.current;

      const list: ProcessInfo[] = openWindows.map((key) => {
        if (!seed.has(key)) {
          seed.set(key, {
            cpu: +(Math.random() * 12 + 1).toFixed(1),
            mem: +(Math.random() * 300 + 40).toFixed(0),
          });
        }
        const s = seed.get(key)!;

        return {
          name: APP_META[key].label,
          icon: APP_META[key].icon,
          cpu: jitter(s.cpu, 3),
          memory: jitter(+s.mem, 20),
          status: "active",
          windowKey: key,
        };
      });

      const systemProcesses: ProcessInfo[] = [
        { name: "WindowServer", icon: "", cpu: jitter(4.2, 2), memory: jitter(180, 30), status: "active", windowKey: "" },
        { name: "kernel_task", icon: "", cpu: jitter(2.8, 1.5), memory: jitter(420, 40), status: "active", windowKey: "" },
        { name: "mds_stores", icon: "", cpu: jitter(0.6, 0.8), memory: jitter(90, 20), status: "idle", windowKey: "" },
        { name: "loginwindow", icon: "", cpu: jitter(0.2, 0.3), memory: jitter(60, 15), status: "sleeping", windowKey: "" },
      ];

      const all = [...list, ...systemProcesses].sort((a, b) => b.cpu - a.cpu);
      setProcesses(all);
    };

    buildProcesses();
    const id = setInterval(buildProcesses, 3000);
    return () => clearInterval(id);
  }, [openWindows]);

  const totalCpu = processes.reduce((acc, p) => acc + p.cpu, 0);
  const totalMem = processes.reduce((acc, p) => acc + p.memory, 0);
  const cpuPct = Math.min(100, totalCpu);
  const memPct = Math.min(100, (totalMem / 8192) * 100);

  const statusColor = (s: ProcessInfo["status"]) => {
    if (s === "active") return "bg-green-500";
    if (s === "idle") return "bg-yellow-500";
    return "bg-gray-400 dark:bg-gray-600";
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="activity-monitor" />
        <h2>{tr("Activity Monitor", "Etkinlik Monitörü")}</h2>
      </div>

      <div className="am-body">
        {/* Stats row */}
        <div className="am-stats">
          <div className="am-stat-card">
            <div className="am-stat-header">
              <div className="am-stat-icon bg-blue-50 dark:bg-blue-900/30 text-blue-500">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="am-stat-label">CPU</span>
                <span className="am-stat-value">{cpuPct.toFixed(1)}%</span>
              </div>
            </div>
            <div className="am-bar-track">
              <div
                className="am-bar-fill bg-blue-500"
                style={{ width: `${cpuPct}%` }}
              />
            </div>
          </div>

          <div className="am-stat-card">
            <div className="am-stat-header">
              <div className="am-stat-icon bg-green-50 dark:bg-green-900/30 text-green-500">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="am-stat-label">{tr("MEMORY", "BELLEK")}</span>
                <span className="am-stat-value">{(totalMem / 1024).toFixed(1)} GB</span>
              </div>
            </div>
            <div className="am-bar-track">
              <div
                className="am-bar-fill bg-green-500"
                style={{ width: `${memPct}%` }}
              />
            </div>
          </div>

          <div className="am-stat-card">
            <div className="am-stat-header">
              <div className="am-stat-icon bg-amber-50 dark:bg-amber-900/30 text-amber-500">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="am-stat-label">{tr("ENERGY", "ENERJİ")}</span>
                <span className="am-stat-value text-green-600 dark:text-green-400">{tr("Low", "Düşük")}</span>
              </div>
            </div>
          </div>

          <div className="am-stat-card">
            <div className="am-stat-header">
              <div className="am-stat-icon bg-purple-50 dark:bg-purple-900/30 text-purple-500">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <span className="am-stat-label">{tr("DISK", "DİSK")}</span>
                <span className="am-stat-value">12.4 GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process table */}
        <div className="am-table-wrap">
          <table className="am-table">
            <thead>
              <tr>
                <th className="text-left">{tr("Process Name", "İşlem Adı")}</th>
                <th className="text-right">% CPU</th>
                <th className="text-right">{tr("Memory", "Bellek")}</th>
                <th className="text-center">{tr("Status", "Durum")}</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((p) => (
                <tr key={p.name}>
                  <td>
                    <div className="am-process-name">
                      {p.icon ? (
                        <img src={p.icon} alt={p.name} className="am-process-icon" />
                      ) : (
                        <div className="am-process-sys">
                          <Cpu className="w-3 h-3" />
                        </div>
                      )}
                      <span>{p.name}</span>
                    </div>
                  </td>
                  <td className="text-right tabular-nums font-semibold">
                    {p.cpu.toFixed(1)}%
                  </td>
                  <td className="text-right tabular-nums">
                    {p.memory > 1024
                      ? `${(p.memory / 1024).toFixed(1)} GB`
                      : `${p.memory.toFixed(0)} MB`}
                  </td>
                  <td>
                    <div className="am-status">
                      <span className={`am-status-dot ${statusColor(p.status)}`} />
                      <span className="capitalize">{p.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="am-footer">
          <span>{tr("Processes", "İşlemler")}: {processes.length}</span>
          <span>·</span>
          <span>{tr("Uptime", "Çalışma Süresi")}: 247:12:04</span>
        </div>
      </div>
    </>
  );
};

const ActivityMonitorWindow = WindowsWrapper(ActivityMonitor, "activity-monitor");

export default ActivityMonitorWindow;
