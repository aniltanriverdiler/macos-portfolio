declare global {
  interface BatteryManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    addEventListener(
      type: "chargingchange" | "levelchange",
      listener: () => void,
    ): void;
    removeEventListener(
      type: "chargingchange" | "levelchange",
      listener: () => void,
    ): void;
  }

  interface Navigator {
    getBattery?(): Promise<BatteryManager>;
  }
}

export {};
