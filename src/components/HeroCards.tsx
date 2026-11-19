import { AvatarPlaceholder } from "./AvatarPlaceholder";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <AvatarPlaceholder />

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ученик Roadmap A2</CardTitle>
            <CardDescription>Unit 1 · People and places</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Каждый следующий шаг уже собран внутри урока.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <AvatarPlaceholder large />
          <CardTitle className="text-center">Разговорная практика</CardTitle>
          <CardDescription className="font-normal text-primary">
            Работа в паре
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-16">
          <p>
            Обсудите тему с преподавателем и запишите фразы, которые пригодятся в следующем разговоре.
          </p>
        </CardContent>

      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="p-4 pb-3">
          <CardDescription>Roadmap A2</CardDescription>
          <CardTitle className="text-xl">В паре с ИИ</CardTitle>
          <p className="text-sm text-muted-foreground">
            Выполняйте парные задания с ИИ-помощником. Он берёт на себя роль собеседника и ведёт диалог по теме конкретного задания.
          </p>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <Button asChild size="sm"><a href="#about">Открыть маршрут</a></Button>
        </CardContent>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Уроки и редактор</CardTitle>
            <CardDescription className="text-md mt-2">
              Материалы для ученика и преподавателя рядом.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
