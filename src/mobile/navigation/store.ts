import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { MobileScreen } from "./types";

type MobileNavState = {
  stack: MobileScreen[];
};

type MobileNavActions = {
  push: (screen: MobileScreen) => void;
  pop: () => void;
  reset: (screen?: MobileScreen) => void;
  current: () => MobileScreen;
  canGoBack: () => boolean;
};

export type MobileNavStore = MobileNavState & MobileNavActions;

export const useMobileNavStore = create<MobileNavStore>()(
  immer((set, get) => ({
    stack: [{ name: "home" }],

    push: (screen) =>
      set((state) => {
        state.stack.push(screen);
      }),

    pop: () =>
      set((state) => {
        if (state.stack.length > 1) state.stack.pop();
      }),

    reset: (screen = { name: "home" }) =>
      set((state) => {
        state.stack = [screen];
      }),

    current: () => {
      const s = get().stack;
      return s[s.length - 1] ?? { name: "home" };
    },

    canGoBack: () => get().stack.length > 1,
  })),
);
