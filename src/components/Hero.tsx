import { Button } from "./ui/button";
import { useDemoVideo } from "./DemoVideo";
import { HeroCards } from "./HeroCards";
import { Play } from "lucide-react";

export const Hero = () => {
  const openDemo = useDemoVideo();
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Английский,
            </span>{" "}
            который становится привычкой
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Roadmap A2
            </span>{" "}
            — понятный переход от A1 к A2
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Проходите уроки по книге Roadmap A2, собирайте свой словарь и тренируйте речь. Новые слова можно сразу использовать в разговоре с ИИ.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3"><a href="#pricing">Получить доступ</a></Button>

          <Button variant="outline" className="w-full md:w-auto" aria-haspopup="dialog" onClick={() => openDemo()}>
            Посмотреть возможности <Play className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
