import { BookOpen, Headphones, BookMarked, MessagesSquare, ChartLine, Presentation } from "lucide-react";
import { clips } from "./demoClips";
import { useDemoVideo } from "./DemoVideo";

const icons = {
  roadmap: BookOpen, listening: Headphones, vocabulary: BookMarked,
  assistant: MessagesSquare, messages: ChartLine, whiteboards: Presentation,
};

export const Sponsors = () => {
  const open = useDemoVideo();
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">Посмотрите, как устроены занятия</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {(Object.keys(icons) as (keyof typeof icons)[]).map((clip) => {
          const Icon = icons[clip];
          return (
            <button key={clip} type="button" aria-haspopup="dialog" onClick={() => open(clip)}
              className="flex items-center gap-1 text-xl font-bold text-muted-foreground hover:text-foreground">
              <Icon size={34} aria-hidden="true" />
              {clips[clip]}
            </button>
          );
        })}
      </div>
    </section>
  );
};
