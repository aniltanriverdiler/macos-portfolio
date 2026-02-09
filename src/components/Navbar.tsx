import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants/index";
import useWindowStore from "#store/window";
import { useEffect, useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";
import ControlCenter from "./ControlCenter";
import { createPortal } from "react-dom";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  // Battery State
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  // Wİ-Fİ State
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [showWifiPanel, setShowWifiPanel] = useState(false);

  const wifiRef = useRef<HTMLDivElement>(null);

  // Control Center State
  const [showControlCenter, setShowControlCenter] = useState(false);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [brightness, setBrightness] = useState(100);

  // Dark mode class control
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Battery Level Change
  useEffect(() => {
    // Battery API support control
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        // Battery Level Update Function
        const updateBattery = () => {
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);
        };

        updateBattery();

        // Change Listeners
        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);

        return () => {
          battery.removeEventListener("levelchange", updateBattery);
          battery.removeEventListener("chargingchange", updateBattery);
        };
      });
    }
  }, []);

  // Wifi Panel Toggle Function
  useEffect(() => {
    const saved = localStorage.getItem("wifiEnabled");
    if (saved !== null) setWifiEnabled(saved === "true");

    const handleClickOutside = (e: MouseEvent) => {
      if (wifiRef.current && !wifiRef.current.contains(e.target as Node)) {
        setShowWifiPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Wifi Toggle Function
  const toggleWifi = () => {
    const next = !wifiEnabled;
    setWifiEnabled(next);
    localStorage.setItem("wifiEnabled", next.toString());
  };

  const toggleWifiPanel = () => {
    setShowWifiPanel((prev) => !prev);
  };

  // Control Center Toggle Function
  const toggleControlCenter = () => {
    setShowControlCenter((prev) => !prev);
  };

  const wifiIcon = navIcons.find((i) => i.img.includes("wifi"));
  const controlCenterIcon = navIcons.find((i) => i.img.includes("mode"));
  const otherIcons = navIcons.filter(
    (i) => !i.img.includes("mode") && !i.img.includes("wifi")
  );

  return (
    <nav>
      <div>
        <img
          src="/images/white-logo.svg"
          alt="logo"
          className="size-[30px] p-1 hover:bg-white/10 rounded-md transition-colors cursor-pointer flex items-center justify-center"
        />
        <p className="text-white/95 text-[16px] font-bold">Anil's Portfolio</p>

        {/* Navbar Links - Left Side */}
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p className="text-white/95 text-[14px] font-medium">{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Battery, Icons, and Clock */}
      <div className="flex items-center gap-2">
        {/* Battery Indicator */}
        <div className="flex items-center gap-1.5 text-white/95 mr-2">
          {/* Percentage */}
          <span className="text-[13px] font-semibold">{batteryLevel}%</span>

          {/* Battery Icon */}
          <div className="relative">
            <div className="w-[25px] h-[12.5px] border border-current rounded-[2px] relative">
              {/* Battery Level Bar */}
              <div
                className="h-full bg-current rounded-[1px] transition-all duration-500"
                style={{ width: `${batteryLevel}%` }}
              />
              {/* Battery Tip (+ Pole) */}
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-current rounded-r-[1px]" />

              {/* Charging Icon (spark) */}
              {isCharging && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] leading-none font-bold text-white drop-shadow-md">
                    ⚡
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Wi‑Fi Popover */}
        <div ref={wifiRef} className="relative">
          <button
            onClick={toggleWifiPanel}
            className="relative flex items-center justify-center"
            title={wifiEnabled ? "Wi-Fi Enabled" : "Wi-Fi Disabled"}
          >
            <img
              src={wifiIcon?.img ?? "/icons/wifi.svg"}
              alt="wifi"
              className="icon-hover cursor-pointer size-[16px] brightness-0 invert ml-1 mr-2"
            />

            {/* If disabled, a line is drawn on top */}
            {!wifiEnabled && (
              <span className="pointer-events-none absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rotate-45 bg-white opacity-90" />
            )}
          </button>

          {/* Wi‑Fi Popover Content */}
          {showWifiPanel && (
            <div className="absolute top-7 left-1/2 -translate-x-1/2 z-50 w-48 rounded-xl bg-black/40 text-white backdrop-blur-md shadow-xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between px-5 py-3.5">
                <span className="text-sm font-semibold relative">
                  Wi-Fi
                  {!wifiEnabled && (
                    <span className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white" />
                  )}
                </span>

                <Switch
                  checked={wifiEnabled}
                  onCheckedChange={toggleWifi}
                  className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-500/50 ml-13"
                />
              </div>
            </div>
          )}
        </div>

        {/* Other Icons */}
        <ul>
          {otherIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-${id}`}
                className="icon-hover cursor-pointer size-[16px] brightness-0 invert"
              />
            </li>
          ))}
        </ul>

        {/* Control Center Icon */}
        <div className="relative">
          <Button
            onClick={toggleControlCenter}
            variant="outline"
            size="icon"
            className="bg-transparent border-none hover:bg-transparent px-2"
          >
            <img
              src={controlCenterIcon?.img ?? "/icons/mode.svg"}
              alt="control-center"
              className="icon-hover cursor-pointer size-[16px] brightness-0 invert"
            />
          </Button>

          {/* Control Center Popover */}
          {showControlCenter &&
            createPortal(
              <ControlCenter
                onClose={() => setShowControlCenter(false)}
                isDarkMode={isDarkMode}
                onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                brightness={brightness}
                onBrightnessChange={setBrightness}
              />,
              document.body
            )}
        </div>

        {/* Current Time */}
        <time className="ml-1">{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
