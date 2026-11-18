import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram } from "lucide-react";

interface TeamProps {

  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {

    name: "Методист",
    position: "Уроки и практика",
    socialNetworks: [
      {
        name: "Facebook",
        url: "https://english-platform-orcin.vercel.app/",
      },
      {
        name: "Instagram",
        url: "https://english-platform-orcin.vercel.app/",
      },
    ],
  },
  {

    name: "AI-помощник",
    position: "Подсказки внутри урока",
    socialNetworks: [

      {
        name: "Instagram",
        url: "https://english-platform-orcin.vercel.app/",
      },
    ],
  },
  {

    name: "English Platform",
    position: "Для учеников и преподавателей",
    socialNetworks: [
      {
        name: "Facebook",
        url: "https://english-platform-orcin.vercel.app/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Команда English{" "}
        </span>
        Platform
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Материалы и инструменты для понятного движения по курсу.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        <Card id="author" className="bg-muted/50 relative mt-8 flex flex-col items-center text-center scroll-mt-32">
          <CardHeader className="mt-8 items-center pb-2">
            <img src="/aliyar.jpg" alt="Алияр Талыбов" width="96" height="96"
              className="absolute -top-12 h-24 w-24 rounded-full object-cover" loading="lazy" />
            <CardTitle>Алияр Талыбов</CardTitle>
            <CardDescription className="text-primary">Автор English Platform</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p>Перенёс уроки Roadmap A2 в онлайн и добавил практику для учеников и преподавателей.</p>
          </CardContent>
          <CardFooter className="mt-auto flex flex-col gap-1 pt-2 text-sm">
            <h4 className="font-medium">Связь с автором</h4>
            <a className="break-all text-primary hover:underline" href="mailto:aliyartalybov@icloud.com">aliyartalybov@icloud.com</a>
            <a className="text-primary hover:underline" href="https://t.me/aliyarMSK">Telegram · @aliyarMSK</a>
          </CardFooter>
        </Card>
        {teamList.map(
          ({ name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <AvatarPlaceholder large />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Помогаем двигаться от темы к практике без лишних сервисов.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
