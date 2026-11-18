import { LogoIcon } from "./Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Старт",
    popular: 0,
    price: 0,
    description: "Первые шаги по Roadmap A2.",
    buttonText: "Открыть English",
    benefitList: [
      "Юниты Roadmap A2",
      "Практика после темы",
      "Аудирование",
      "AI-помощник",
      "Повторение ошибок",
    ],
  },
  {
    title: "Roadmap A2",
    popular: 1,
    price: 5,
    description: "Последовательный маршрут от A1 к A2.",
    buttonText: "Начать учиться",
    benefitList: [
      "10 последовательных юнитов",
      "Практика и разговор",
      "Грамматика и слова",
      "AI внутри урока",
      "Прогресс ученика",
    ],
  },
  {
    title: "Для преподавателя",
    popular: 0,
    price: 40,
    description: "Материалы, доски и сообщения в одном месте.",
    buttonText: "Открыть сервис",
    benefitList: [
      "Редактор уроков",
      "Доски",
      "Сообщения",
      "Прогресс",
      "Связь с учеником",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        English Platform{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Roadmap A2{" "}
        </span>
        и практика
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Выберите сценарий, с которого начнёте работу с платформой.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price === 0 ? "Старт" : pricing.price === 5 ? "A1 → A2" : "Для школы"}</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button asChild className="w-full"><a href="https://english-platform-orcin.vercel.app/">{pricing.buttonText === "Открыть English" && <LogoIcon small />}{pricing.buttonText}</a></Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
