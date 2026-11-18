import { AvatarPlaceholder } from "./AvatarPlaceholder";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {

  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {

    name: "Ученик Roadmap A2",
    userName: "Unit 1 · People and places",
    comment: "Наконец понятно, что делать на следующем занятии.",
  },
  {

    name: "Ученик English",
    userName: "Practice",
    comment: "Практика сразу после объяснения помогает не откладывать тему.",
  },

  {

    name: "Ученик English",
    userName: "AI helper",
    comment: "AI-помощник объясняет ошибку простыми словами.",
  },
  {

    name: "Преподаватель",
    userName: "Editor",
    comment: "Можно собрать свои материалы и видеть, где ученику нужна помощь.",
  },
  {

    name: "Ученик English",
    userName: "Listening",
    comment: "Аудирование и разговор встроены в обычный урок.",
  },
  {

    name: "Ученик Roadmap A2",
    userName: "Progress",
    comment: "Ошибки возвращаются в повторение, а прогресс остаётся видимым.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Почему выбирают{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          English{" "}
        </span>
        Platform
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Реальные сценарии, ради которых хочется возвращаться к занятиям.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <AvatarPlaceholder />

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
