import { create } from "zustand";

interface Track {
  title: string;
  artist: string;
  cover: string;
  src: string;
  duration: string;
}

interface AudioStore {
  volume: number;
  isPlaying: boolean;
  currentTrack: Track | null;
  audioRef: HTMLAudioElement | null;

  setVolume: (volume: number) => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTrack: (track: Track | null) => void;
  setAudioRef: (ref: HTMLAudioElement | null) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

const useAudioStore = create<AudioStore>((set, get) => ({
  volume: 65,
  isPlaying: false,
  currentTrack: null,
  audioRef: null,

  setVolume: (volume: number) => {
    const audio = get().audioRef;
    if (audio) audio.volume = volume / 100;
    set({ volume });
  },

  setIsPlaying: (playing: boolean) => set({ isPlaying: playing }),

  setCurrentTrack: (track: Track | null) => set({ currentTrack: track }),

  setAudioRef: (ref: HTMLAudioElement | null) => set({ audioRef: ref }),

  togglePlay: () => {
    const { audioRef, isPlaying } = get();
    if (!audioRef) return;
    if (isPlaying) {
      audioRef.pause();
      set({ isPlaying: false });
    } else {
      audioRef.play().catch(() => {});
      set({ isPlaying: true });
    }
  },

  nextTrack: () => {},
  prevTrack: () => {},
}));

export default useAudioStore;
export type { Track };
