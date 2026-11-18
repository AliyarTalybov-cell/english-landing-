import { Play } from "lucide-react";
import { clips, type Clip } from "./demoClips";
import { DemoPreview, useDemoVideo } from "./DemoVideo";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  clip: Clip;
}

const serviceList: ServiceProps[] = [
  {
    title: "Занятия в группе",
    clip: "teacher-groups",
    description: "Создайте чат для учебной группы, выдайте всем одно задание и добавьте слова для повторения. В чате ученики могут прислать вопросы по домашней работе, а перед следующим занятием вы можете посмотреть результаты каждого.",
    icon: <ChartIcon />,
  },
  {
    title: "Редактор уроков и прогресс",
    clip: "teacher-editor",
    description: "Добавьте к теме объяснение и упражнения: выбор ответа, сборку фразы или поиск ошибки. Проверьте урок в предпросмотре и опубликуйте его для нужных учеников. После занятия откройте карточку ученика — там видно, какие темы дались легко и где он чаще ошибался.",
    icon: <WalletIcon />,
  },
  {
    title: "Личная и общая доски",
    clip: "whiteboards",
    description: "На личной доске подготовьте примеры и схему к уроку. На общей доске вы с учеником можете писать и рисовать одновременно. Например, попросите его собрать фразу, а затем вместе отметьте глагол и исправьте порядок слов.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  const openDemo = useDemoVideo();
  return (
    <section id="teaching" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              English Platform{" "}
            </span>
            для преподавателя
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Готовьте материал для всей группы и подбирайте практику под конкретного ученика. Результаты предыдущего занятия подскажут, с чего начать следующее.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description, clip }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                    <button type="button" aria-haspopup="dialog" aria-label={`Смотреть видео «${title}»`}
                        onClick={() => openDemo(clip)}
                        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                        <Play size={14} aria-hidden="true" /> Смотреть видео
                    </button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid w-full min-w-0 max-w-lg gap-6">
          {(["teacher-groups", "teacher-editor"] as const).map((clip) => (
            <figure key={clip} className="space-y-2">
              <DemoPreview clip={clip} className="aspect-[302/165] w-full" />
              <figcaption className="text-sm font-medium text-muted-foreground">{clips[clip]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
