import { Play } from "lucide-react";
import { useDemoVideo } from "./DemoVideo";
import { Statistics } from "./Statistics";
import { Button } from "./ui/button";

const bookImages = [
  { file: "cover", alt: "Обложка Roadmap A2 Student’s Book издательства Pearson" },
  { file: "people-and-places", alt: "Страница урока 1A «People and places»" },
];

export const About = () => {
  const openDemo = useDemoVideo();
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="w-[300px] max-w-full self-center md:shrink-0">
            <figure>
              <div className="grid grid-cols-2 gap-3">
                {bookImages.map(({ file, alt }) => (
                  <a key={file} href={`/books/roadmap-a2/${file}.webp`} target="_blank" rel="noreferrer"
                    aria-label={`Увеличить изображение: ${alt}`}>
                    <img src={`/books/roadmap-a2/${file}.webp`} alt={alt} loading="lazy"
                      width="780" height="1100" className="block h-auto w-full rounded border" />
                  </a>
                ))}
              </div>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Pearson · Roadmap A2, урок 1A
              </figcaption>
            </figure>
            <Button variant="outline" size="sm" className="mt-3" aria-haspopup="dialog" onClick={() => openDemo("roadmap")}>
              <Play className="mr-2 h-4 w-4" /> Смотреть урок на платформе
            </Button>
          </div>
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                От учебника <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Roadmap A2</span> к разговору
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                В основе курса — Roadmap A2 от Pearson, учебник английского для взрослых.
                Уже в первом уроке, People and places, вы учитесь знакомиться и рассказывать, откуда вы.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Мы перенесли темы книги в интерактивные уроки. Послушайте диалог, сохраните новые
                слова, а затем попробуйте сами представиться по-английски в разговоре с ИИ.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
