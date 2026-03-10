import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Wifi, BatteryFull } from "lucide-react";
import useWifiStore from "#store/wifi";

const StatusBar = () => {
  const { wifiEnabled } = useWifiStore();
  const [now, setNow] = useState(() => dayjs());

  // Update the time every 30 seconds
  useEffect(() => {
    const id = window.setInterval(() => setNow(dayjs()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative flex items-center justify-between px-5 pt-3 pb-2 text-white/95 select-none">
      {/* Time */}
      <div className="text-[15px] font-semibold tabular-nums pt-1">
        {now.format("h:mm")} PM
      </div>

      {/* Dynamic island / notch */}
      <div className="absolute left-1/2 top-3 -translate-x-1/2 w-[300px] h-[34px] rounded-full bg-black/90" />

      <div className="relative z-10 flex items-center gap-4 pr-5 pt-1">
        <Wifi className={wifiEnabled ? "opacity-90" : "opacity-30"} size={18} />
        <BatteryFull className="opacity-90" size={18} />
      </div>
    </div>
  );
};

export default StatusBar;
