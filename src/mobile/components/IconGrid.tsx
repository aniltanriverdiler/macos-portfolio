import IconItem from "./IconItem";

type Item = {
  id: string;
  title: string;
  iconSrc?: string;
  onPress: () => void;
};

export default function IconGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5 p-5">
      {items.map((it) => (
        <IconItem
          key={it.id}
          title={it.title}
          iconSrc={it.iconSrc}
          onPress={it.onPress}
        />
      ))}
    </div>
  );
}
