import IconItem from "./IconItem";
import { useMobileNavStore } from "../navigation/store";

export default function Dock() {
  const push = useMobileNavStore((s) => s.push);

  return (
    <div className="mt-3 mx-4 mb-6 rounded-3xl bg-white/10 backdrop-blur-xl px-4 py-3 border border-white/10">
      <div className="flex items-end justify-between">
        <IconItem
          title="Portfolio"
          iconSrc="/images/finder.png"
          onPress={() => push({ name: "portfolio" })}
        />
        <IconItem
          title="Safari"
          iconSrc="/images/safari.png"
          onPress={() => push({ name: "safari" })}
        />
        <IconItem
          title="Photos"
          iconSrc="/images/photos.png"
          onPress={() => push({ name: "photos" })}
        />
        <IconItem
          title="Contact"
          iconSrc="/images/contact.png"
          onPress={() => push({ name: "contact" })}
        />
      </div>
    </div>
  );
}
