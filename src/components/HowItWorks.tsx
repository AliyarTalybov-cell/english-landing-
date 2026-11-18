import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Выберите тему",
    description: "Откройте урок по нужной теме Roadmap A2.",
  },
  {
    icon: <MapIcon />,
    title: "Послушайте",
    description: "Прослушайте фразы и сохраните новые слова в закладки.",
  },
  {
    icon: <PlaneIcon />,
    title: "Закрепите",
    description: "Проверьте себя в тесте по сохранённым словам.",
  },
  {
    icon: <GiftIcon />,
    title: "Используйте",
    description: "Запишите фразу своим голосом или начните диалог с ИИ.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Как проходит{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          урок{" "}
        </span>
        от темы до результата
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        От задания в учебнике до разговора, в котором пригодятся новые слова.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
