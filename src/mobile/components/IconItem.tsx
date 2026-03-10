type Props = {
  title: string;
  iconSrc?: string;
  onPress: () => void;
};

export default function IconItem({ title, iconSrc, onPress }: Props) {
  return (
    <button
      type="button"
      onClick={onPress}
      className="flex flex-col items-center gap-2 w-[88px] select-none"
    >
      <div className="flex items-center justify-center">
        {iconSrc ? (
          <img src={iconSrc} alt={title} className="w-[80px] h-[80px] object-contain" />
        ) : (
          <span className="text-xl font-bold">{title.slice(0, 1)}</span>
        )}
      </div>
    </button>
  );
}
