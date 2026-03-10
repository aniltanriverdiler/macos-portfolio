import IconItem from "../components/IconItem";
import { useMobileNavStore } from "../navigation/store";

const Home = () => {
  const push = useMobileNavStore((s) => s.push);

  return (
    <div className="min-h-full bg-transparent">
      {/* Top left: Resume + Terminal icons */}
      <div className="flex gap-4 pt-6 pl-6">
        <IconItem
          title="Resume"
          iconSrc="/images/pages.png"
          onPress={() => push({ name: "resume" })}
        />
        <IconItem
          title="Terminal"
          iconSrc="/images/terminal.png"
          onPress={() => push({ name: "terminal" })}
        />
      </div>

      {/* Center text */}
      <div className="flex flex-col items-center justify-center pt-20 pb-8 text-center">
        <p className="text-2xl font-georama text-white/80 font-extralight ">
          Hey, I&apos;m Anıl! welcome to my
        </p>
        <p className="text-[65px] font-georama leading-[0.95] font-medium italic text-white mt-7">
          portfolio.
        </p>
      </div>

      {/* Empty space (scrollable) */}
      <div className="flex-1 min-h-[120px]" />
    </div>
  );
};

export default Home;
