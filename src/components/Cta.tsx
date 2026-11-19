import { useDemoVideo } from "./DemoVideo";
import { Button } from "./ui/button";

export const Cta = () => {
  const openDemo = useDemoVideo();
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Один урок сегодня —
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              понятный следующий шаг
            </span>
            завтра
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Выберите тему и начните с одного небольшого урока.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button asChild className="w-full md:mr-4 md:w-auto"><a href="#pricing">Выбрать доступ</a></Button>
          <Button
            aria-haspopup="dialog"
            onClick={() => openDemo()}
            variant="outline"
            className="w-full md:w-auto"
          >
            Посмотреть возможности
          </Button>
        </div>
      </div>
    </section>
  );
};
