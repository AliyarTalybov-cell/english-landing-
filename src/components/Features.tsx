import { DemoPreview } from "./DemoVideo";
import type { Clip } from "./demoClips";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface FeatureProps {
  title: string;
  description: string;
  clip: Clip;
}

const features: FeatureProps[] = [
  {
    title: "Аудирование",
    description: "Слушайте фразы, сохраняйте незнакомые слова и записывайте свой голос, повторяя услышанное.",
    clip: "listening",
  },
  {
    title: "Личный словарь",
    description: "Добавляйте слова в закладки, а затем проходите тесты по своему списку.",
    clip: "vocabulary",
  },
  {
    title: "Диалог с ИИ",
    description: "Выберите тему для разговора с ИИ. Попросите его подобрать слова и используйте их в диалоге.",
    clip: "assistant",
  },
];

const featureList: string[] = [
  "Roadmap A2",
  "Практика",
  "Аудирование",
  "Запись голоса",
  "Диалог с ИИ",
  "Тесты по словам",
  "Общая доска",
  "Чат",
  "Прогресс",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Возможности{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          English Platform
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, clip }: FeatureProps) => (
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter className="mt-auto">
              <DemoPreview clip={clip} className="mx-auto w-[200px] lg:w-[300px]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
