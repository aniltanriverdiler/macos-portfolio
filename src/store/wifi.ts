import { create } from "zustand";

interface WifiStore {
  wifiEnabled: boolean;
  toggleWifi: () => void;
  setWifiEnabled: (enabled: boolean) => void;
}

const useWifiStore = create<WifiStore>((set) => ({
  wifiEnabled:
    localStorage.getItem("wifiEnabled") !== null
      ? localStorage.getItem("wifiEnabled") === "true"
      : true,

  toggleWifi: () =>
    set((state) => {
      const next = !state.wifiEnabled;
      localStorage.setItem("wifiEnabled", next.toString());
      return { wifiEnabled: next };
    }),

  setWifiEnabled: (enabled: boolean) => {
    localStorage.setItem("wifiEnabled", enabled.toString());
    set({ wifiEnabled: enabled });
  },
}));

export default useWifiStore;
