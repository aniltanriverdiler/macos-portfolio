import { useState, useEffect } from "react";
import {
  Wifi,
  Bluetooth,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Play,
  SkipBack,
  SkipForward,
  Share2,
  ScreenShare,
  Timer,
  Clock,
  Languages,
  Sun as BrightnessIcon,
  SunDim,
  Maximize,
  Minimize,
} from "lucide-react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

interface ControlCenterProps {
  onClose: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  brightness: number;
  onBrightnessChange: (value: number) => void;
}

export default function ControlCenter({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
  isDarkMode,
  onToggleDarkMode,
  brightness,
  onBrightnessChange,
}: ControlCenterProps) {
  const [wifiEnabled, setWifiEnabled] = useState(() => {
    const savedWifi = localStorage.getItem("wifiEnabled");
    return savedWifi !== null ? savedWifi === "true" : true;
  });
  const [bluetoothEnabled, setBluetoothEnabled] = useState(true);
  const [airdropEnabled, setAirdropEnabled] = useState(true);
  const [volume, setVolume] = useState(75);
  const [isFullscreen, setIsFullscreen] = useState(
    () => !!document.fullscreenElement
  );
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  // Check fullscreen status
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Update the Control Center to store WiFi state in localStorage
  const toggleWifi = () => {
    const newState = !wifiEnabled;
    setWifiEnabled(newState);
    localStorage.setItem("wifiEnabled", newState.toString());
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      className="fixed top-12 right-4 w-[340px] bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl rounded-[20px] overflow-hidden shadow-2xl z-50 border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 space-y-3">
        {/* Top Grid - WiFi, Bluetooth, AirDrop, Media */}
        <div className="grid grid-cols-2 gap-3">
          {/* WiFi Card */}
          <Button
            variant="ghost"
            className={`flex flex-col items-start h-auto p-4 rounded-2xl transition-all cursor-pointer ${
              wifiEnabled
                ? "bg-blue-500/80 hover:bg-blue-500/90"
                : "bg-white/10 dark:bg-gray-700/50 hover:bg-white/20"
            }`}
            onClick={toggleWifi}
          >
            <Wifi className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-sm font-medium">Wi-Fi</span>
            <span className="text-white/70 text-xs mt-1">
              {wifiEnabled ? "TP-Link" : "Off"}
            </span>
          </Button>

          {/* Bluetooth Card */}
          <Button
            variant="ghost"
            className={`flex flex-col items-start h-auto p-4 rounded-2xl transition-all cursor-pointer ${
              bluetoothEnabled
                ? "bg-blue-500/80 hover:bg-blue-500/90"
                : "bg-white/10 dark:bg-gray-700/50 hover:bg-white/20"
            }`}
            onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
          >
            <Bluetooth className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-sm font-medium">Bluetooth</span>
            <span className="text-white/70 text-xs mt-1">
              {bluetoothEnabled ? "On" : "Off"}
            </span>
          </Button>

          {/* AirDrop Card */}
          <Button
            variant="ghost"
            className={`flex flex-col items-start h-auto p-4 rounded-2xl transition-all cursor-pointer ${
              airdropEnabled
                ? "bg-blue-500/80 hover:bg-blue-500/90"
                : "bg-white/10 dark:bg-gray-700/50 hover:bg-white/20"
            }`}
            onClick={() => setAirdropEnabled(!airdropEnabled)}
          >
            <Share2 className="w-6 h-6 text-white mb-2" />
            <span className="text-white text-sm font-medium">AirDrop</span>
            <span className="text-white/70 text-xs mt-1">
              {airdropEnabled ? "Contacts Only" : "Off"}
            </span>
          </Button>

          {/* Media Controls Card */}
          <div className="bg-white/10 dark:bg-gray-700/50 rounded-2xl p-4 flex flex-col">
            <div className="flex-1 flex items-center justify-center mb-2">
              <span className="text-white/70 text-xs">Not Playing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                size="icon-xs"
                className="text-white/50 hover:text-white hover:bg-transparent transition-colors cursor-pointer"
              >
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                className="text-white/50 hover:text-white hover:bg-transparent transition-colors cursor-pointer"
              >
                <Play className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                className="text-white/50 hover:text-white hover:bg-transparent transition-colors cursor-pointer"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Circle Buttons Row */}
        <div className="flex flex-row items-center justify-center gap-6.5">
          {/* Screen Mirroring */}
          <Button
            variant="ghost"
            className="size-14 rounded-full bg-blue-500/80 hover:bg-blue-500/90 flex items-center justify-center transition-all cursor-pointer"
          >
            <ScreenShare className="w-6 h-6 text-white" />
          </Button>

          {/* Dark Mode */}
          <Button
            variant="ghost"
            onClick={onToggleDarkMode}
            className={`size-14 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode
                ? "bg-blue-500/80 hover:bg-blue-500/90"
                : "bg-white/10 dark:bg-gray-700/50 hover:bg-white/20"
            }`}
          >
            {isDarkMode ? (
              <Moon className="w-6 h-6 text-white" />
            ) : (
              <Sun className="w-6 h-6 text-white" />
            )}
          </Button>

          {/* Fullscreen */}
          <Button
            variant="ghost"
            onClick={toggleFullscreen}
            className={`size-14 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isFullscreen
                ? "bg-purple-500/80 hover:bg-purple-500/90"
                : "bg-white/10 dark:bg-gray-700/50 hover:bg-white/20"
            }`}
          >
            {isFullscreen ? (
              <Minimize className="w-6 h-6 text-white" />
            ) : (
              <Maximize className="w-6 h-6 text-white" />
            )}
          </Button>

          {/* Language Switcher */}
          <Button
            variant="ghost"
            onClick={() =>
              setCurrentLanguage(currentLanguage === "EN" ? "TR" : "EN")
            }
            className="size-14 rounded-full bg-blue-500/80 hover:bg-blue-500/90 flex flex-col items-center justify-center transition-all cursor-pointer"
          >
            <Languages className="w-6 h-6 text-white" />
            <span className="text-[10px] text-white/90 font-medium">
              {currentLanguage}
            </span>
          </Button>
        </div>

        {/* Display Brightness Slider */}
        <div className="bg-white/10 dark:bg-gray-700/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Display</span>
          </div>
          <div className="flex items-center gap-3">
            <SunDim className="w-4 h-4 text-white/70" />
            <Slider
              value={[brightness]}
              onValueChange={(value) => onBrightnessChange(value[0])}
              max={100}
              min={10}
              step={1}
              className="flex-1 control-center-slider cursor-pointer"
            />
            <BrightnessIcon className="w-4 h-4 text-white/70" />
          </div>
        </div>

        {/* Sound Volume Slider */}
        <div className="bg-white/10 dark:bg-gray-700/50 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Sound</span>
          </div>
          <div className="flex items-center gap-3">
            <VolumeX className="w-4 h-4 text-white/70" />
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              min={0}
              step={1}
              className="flex-1 control-center-slider cursor-pointer"
            />
            <Volume2 className="w-4 h-4 text-white/70" />
          </div>
        </div>

        {/* Timer and Stopwatch */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="ghost"
            className="bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 rounded-2xl h-auto p-4 flex items-center justify-start gap-3 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Timer className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm font-medium">Timer</span>
          </Button>

          <Button
            variant="ghost"
            className="bg-white/10 dark:bg-gray-700/50 hover:bg-white/20 rounded-2xl h-auto p-4 flex items-center justify-start gap-3 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm font-medium">Stopwatch</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
