import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
} from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import useAudioStore from "#store/audio";
import type { Track } from "#store/audio";

const TRACKS: Track[] = [
  {
    title: "Lofi Study Beat",
    artist: "Chill Artist",
    cover: "/images/lofi.webp",
    src: "/audio/lofi-chill-beat.mp3",
    duration: "3:42",
  },
  {
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    cover: "/images/lofi-2.webp",
    src: "/audio/lofi-chill-beat-2.mp3",
    duration: "2:56",
  },
  {
    title: "Sunny Morning",
    artist: "Alex Productions",
    cover: "/images/lofi-3.jpg",
    src: "/audio/lofi-chill-beat-3.mp3",
    duration: "4:10",
  },
];

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const Spotify = () => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioStore = useAudioStore();

  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const track = TRACKS[currentTrackIdx];
  const volume = audioStore.volume;

  useEffect(() => {
    if (audioRef.current) {
      audioStore.setAudioRef(audioRef.current);
    }
    return () => audioStore.setAudioRef(null);
  }, []);

  useEffect(() => {
    audioStore.setCurrentTrack(track);
  }, [currentTrackIdx]);

  useEffect(() => {
    audioStore.setIsPlaying(isPlaying);
  }, [isPlaying]);

  const play = useCallback(() => {
    audioRef.current?.play();
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const nextTrack = useCallback(() => {
    if (shuffle) {
      let next = Math.floor(Math.random() * TRACKS.length);
      while (next === currentTrackIdx && TRACKS.length > 1) {
        next = Math.floor(Math.random() * TRACKS.length);
      }
      setCurrentTrackIdx(next);
    } else {
      setCurrentTrackIdx((prev) => (prev + 1) % TRACKS.length);
    }
    setCurrentTime(0);
  }, [shuffle, currentTrackIdx]);

  const prevTrack = useCallback(() => {
    if (currentTime > 3) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      setCurrentTime(0);
    } else {
      setCurrentTrackIdx((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
      setCurrentTime(0);
    }
  }, [currentTime]);

  useEffect(() => {
    const store = useAudioStore.getState();
    store.nextTrack = nextTrack;
    store.prevTrack = prevTrack;
    store.togglePlay = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.paused) {
        audio.play().catch(() => {});
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    };
  }, [nextTrack, prevTrack]);

  const selectTrack = useCallback(
    (index: number) => {
      setCurrentTrackIdx(index);
      setCurrentTime(0);
      if (!isPlaying) setIsPlaying(true);
    },
    [isPlaying],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = isPlaying;
    audio.src = track.src;
    audio.load();
    if (wasPlaying) {
      audio.play().catch(() => {});
    }
  }, [currentTrackIdx]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      if (repeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextTrack();
      }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
    };
  }, [repeat, nextTrack]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = val;
    setCurrentTime(val);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div id="window-header">
        <WindowControls target="spotify" />
        <h2>{t("spotify.title")}</h2>
      </div>

      <audio ref={audioRef} preload="metadata" />

      <div className="spotify-body">
        {/* Top bar */}
        <div className="spotify-topbar">
          <img
            src="/images/spotify.png"
            alt="Spotify"
            className="spotify-logo"
          />
          <span className="spotify-brand">Spotify</span>
          <div className="spotify-topbar-actions">
            <button
              type="button"
              onClick={() => setShuffle(!shuffle)}
              className={shuffle ? "active" : ""}
            >
              <Shuffle className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setRepeat(!repeat)}
              className={repeat ? "active" : ""}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Album art */}
        <div className="spotify-cover-wrap">
          <img src={track.cover} alt={track.title} className="spotify-cover" />
        </div>

        {/* Track info */}
        <div className="spotify-track-info">
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
        </div>

        {/* Progress */}
        <div className="spotify-progress">
          <span className="spotify-time">{formatTime(currentTime)}</span>
          <div className="spotify-slider-wrap">
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="spotify-range progress-range"
            />
            <div
              className="spotify-slider-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="spotify-time">
            {duration > 0 ? formatTime(duration) : "0:00"}
          </span>
        </div>

        {/* Controls */}
        <div className="spotify-controls">
          <button type="button" onClick={prevTrack} className="spotify-btn">
            <SkipBack className="w-6 h-6" fill="currentColor" />
          </button>
          <button
            type="button"
            onClick={togglePlay}
            className="spotify-play-btn"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7" fill="currentColor" />
            ) : (
              <Play className="w-7 h-7" fill="currentColor" />
            )}
          </button>
          <button type="button" onClick={nextTrack} className="spotify-btn">
            <SkipForward className="w-6 h-6" fill="currentColor" />
          </button>
        </div>

        {/* Volume */}
        <div className="spotify-volume">
          <Volume2 className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
          <div className="spotify-slider-wrap volume-wrap">
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => audioStore.setVolume(Number(e.target.value))}
              className="spotify-range volume-range"
            />
            <div
              className="spotify-slider-fill volume-fill"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>

        {/* Playlist */}
        <div className="spotify-playlist">
          <h4>{t("spotify.playlist")}</h4>
          <ul>
            {TRACKS.map((t, i) => {
              const isCurrent = i === currentTrackIdx;
              return (
                <li
                  key={t.src}
                  className={isCurrent ? "current" : ""}
                  onClick={() => selectTrack(i)}
                >
                  <img src={t.cover} alt={t.title} />
                  <div className="track-meta">
                    <span className="track-title">{t.title}</span>
                    <span className="track-artist">{t.artist}</span>
                  </div>
                  <span className="track-duration">{t.duration}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const SpotifyWindow = WindowsWrapper(Spotify, "spotify");

export default SpotifyWindow;
