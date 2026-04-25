import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Trophy,
} from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useThemeStore from "#store/theme";
import useWindowStore from "#store/window";
import useTranslation from "#hooks/useTranslation";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 100;
const INITIAL_SNAKE: Position[] = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];

const Snake = () => {
  const { isDarkMode } = useThemeStore();
  const { windows } = useWindowStore();
  const { lang } = useTranslation();

  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>("UP");
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | null>(null);

  const bgColor = isDarkMode ? "#0f1115" : "#f8fafc";
  const gridColor = isDarkMode ? "#1a1d24" : "#eef2f7";
  const snakeColor = isDarkMode ? "#4ade80" : "#22c55e";
  const foodColor = isDarkMode ? "#f87171" : "#ef4444";

  const isActive = useMemo(() => {
    const me = windows.snake;
    if (!me?.isOpen) return false;
    return Object.values(windows).every(
      (w) => !w.isOpen || w.zIndex <= me.zIndex,
    );
  }, [windows]);

  const generateFood = useCallback((): Position => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    if (snake.some((s) => s.x === newFood.x && s.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  }, [snake]);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = gridColor;
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }

    snake.forEach((segment, idx) => {
      ctx.fillStyle = idx === 0 ? snakeColor : snakeColor + "dd";
      const x = segment.x * CELL_SIZE + 1;
      const y = segment.y * CELL_SIZE + 1;
      const size = CELL_SIZE - 2;
      const r = idx === 0 ? 6 : 4;
      ctx.beginPath();
      ctx.roundRect(x, y, size, size, r);
      ctx.fill();
    });

    ctx.fillStyle = foodColor;
    ctx.beginPath();
    const centerX = food.x * CELL_SIZE + CELL_SIZE / 2;
    const centerY = food.y * CELL_SIZE + CELL_SIZE / 2;
    ctx.arc(centerX, centerY, CELL_SIZE / 2 - 2, 0, 2 * Math.PI);
    ctx.fill();
  }, [snake, food, bgColor, gridColor, snakeColor, foodColor]);

  const gameLoop = useCallback(() => {
    if (isPaused || gameOver) return;

    const head = { ...snake[0] };
    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
    }

    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      setGameOver(true);
      return;
    }

    if (snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];
    if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setScore((prev) => prev + 10);
      setHighScore((prev) => Math.max(prev, score + 10));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [direction, food, gameOver, generateFood, isPaused, score, snake]);

  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          e.preventDefault();
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          e.preventDefault();
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        case " ":
          e.preventDefault();
          setIsPaused((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver, isActive]);

  useEffect(() => {
    if (!isPaused && !gameOver) {
      gameLoopRef.current = window.setInterval(gameLoop, GAME_SPEED);
    } else if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPaused, gameOver, gameLoop]);

  useEffect(() => {
    drawGame();
  }, [snake, food, drawGame]);

  useEffect(() => {
    const saved = localStorage.getItem("snakeHighScore");
    if (saved) setHighScore(Number.parseInt(saved, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem("snakeHighScore", highScore.toString());
  }, [highScore]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(generateFood());
    setDirection("UP");
    setGameOver(false);
    setScore(0);
    setIsPaused(true);
  };

  const handleDirectionClick = (newDirection: Direction) => {
    if (gameOver) return;
    if (
      (newDirection === "UP" && direction !== "DOWN") ||
      (newDirection === "DOWN" && direction !== "UP") ||
      (newDirection === "LEFT" && direction !== "RIGHT") ||
      (newDirection === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(newDirection);
    }
  };

  const showStartHint = isPaused && !gameOver && score === 0;
  const showPauseOverlay = isPaused && !gameOver && score > 0;

  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);

  return (
    <>
      <div id="window-header">
        <WindowControls target="snake" />
        <h2>{tr("Snake", "Yılan")}</h2>
      </div>

      <div className="snake-body">
        {/* Toolbar */}
        <div className="snake-toolbar">
          <div className="snake-stats">
            <div className="snake-stat">
              <span className="stat-label">{tr("SCORE", "PUAN")}</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="snake-stat">
              <span className="stat-label flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                {tr("BEST", "REKOR")}
              </span>
              <span className="stat-value">{highScore}</span>
            </div>
          </div>

          <div className="snake-actions">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              disabled={gameOver}
              className="snake-btn snake-btn-primary"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5" />
                  {tr("Play", "Başlat")}
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  {tr("Pause", "Duraklat")}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={resetGame}
              className="snake-btn snake-btn-secondary"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {tr("Restart", "Yenile")}
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="snake-canvas-wrap">
          <canvas
            ref={canvasRef}
            width={GRID_SIZE * CELL_SIZE}
            height={GRID_SIZE * CELL_SIZE}
            className="snake-canvas"
          />

          {showStartHint && (
            <div className="snake-overlay">
              <div className="snake-overlay-card">
                <div className="snake-overlay-icon">
                  <Play className="w-6 h-6" />
                </div>
                <p className="snake-overlay-title">
                  {tr("Press Play to start", "Başlatmak için Play'e bas")}
                </p>
                <p className="snake-overlay-sub">
                  {tr("Use arrow keys or buttons", "Ok tuşlarını veya butonları kullan")}
                </p>
              </div>
            </div>
          )}

          {showPauseOverlay && (
            <div className="snake-overlay">
              <div className="snake-overlay-card">
                <div className="snake-overlay-icon">
                  <Pause className="w-6 h-6" />
                </div>
                <p className="snake-overlay-title">{tr("Paused", "Durduruldu")}</p>
                <p className="snake-overlay-sub">
                  {tr("Press Space to continue", "Devam için Boşluk'a bas")}
                </p>
              </div>
            </div>
          )}

          {gameOver && (
            <div className="snake-overlay snake-overlay-end">
              <div className="snake-overlay-card">
                <p className="snake-overlay-title">
                  {tr("Game Over", "Oyun Bitti")}
                </p>
                <p className="snake-score-final">{score}</p>
                <p className="snake-overlay-sub">
                  {tr("points", "puan")}
                </p>
                <button
                  type="button"
                  onClick={resetGame}
                  className="snake-btn snake-btn-primary mt-3"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {tr("Play Again", "Tekrar Oyna")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile / on-screen controls */}
        <div className="snake-controls">
          <button
            type="button"
            className="snake-dpad snake-dpad-up"
            onClick={() => handleDirectionClick("UP")}
            disabled={gameOver}
            aria-label="Up"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="snake-dpad snake-dpad-left"
            onClick={() => handleDirectionClick("LEFT")}
            disabled={gameOver}
            aria-label="Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="snake-dpad snake-dpad-right"
            onClick={() => handleDirectionClick("RIGHT")}
            disabled={gameOver}
            aria-label="Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="snake-dpad snake-dpad-down"
            onClick={() => handleDirectionClick("DOWN")}
            disabled={gameOver}
            aria-label="Down"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <p className="snake-hint">
          {tr(
            "Use arrow keys to move · Space to pause",
            "Hareket için ok tuşları · Boşluk ile duraklat",
          )}
        </p>
      </div>
    </>
  );
};

const SnakeWindow = WindowsWrapper(Snake, "snake");

export default SnakeWindow;
