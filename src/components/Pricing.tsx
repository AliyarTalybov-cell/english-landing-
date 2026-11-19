import { useId, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const options = [
  {
    title: "Самостоятельно",
    description: "Учитесь в своём темпе и выбирайте, что повторить.",
    role: "Ученик",
    features: ["Уроки и тесты по Roadmap A2", "Тренировка слов из закладок", "Диалоги с ИИ"],
  },
  {
    title: "С преподавателем",
    description: "Выполняйте задания учителя и обсуждайте их вместе.",
    role: "Ученик",
    features: ["Задания для вашей группы", "Переписка с преподавателем", "Совместная работа на доске"],
  },
  {
    title: "Кабинет преподавателя",
    description: "Готовьте уроки для своих учеников и следите за их результатами.",
    role: "Учитель",
    features: ["Редактор и публикация уроков", "Материалы и чаты для групп", "Прогресс каждого ученика"],
  },
];

function AccessForm({ title, role }: { title: string; role: string }) {
  const id = useId();
  const [checked, setChecked] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecked(true);
  }

  return (
    <>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[92dvh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg border bg-background p-6 shadow-lg">
        <Dialog.Title className="pr-8 text-xl font-semibold">Заявка на доступ</Dialog.Title>
        <Dialog.Description className="mb-5 mt-1 text-sm text-muted-foreground">{title}</Dialog.Description>
        <Dialog.Close asChild>
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" aria-label="Закрыть форму"><X size={18} /></Button>
        </Dialog.Close>
        <form className="grid gap-3" onSubmit={submit} onChange={() => setChecked(false)}>
          <div><label htmlFor={id + "-name"}>Имя</label><Input id={id + "-name"} name="name" autoComplete="name" pattern=".*\S.*" required /></div>
          <div><label htmlFor={id + "-email"}>Почта</label><Input id={id + "-email"} name="email" type="email" autoComplete="email" required /></div>
          <div><label htmlFor={id + "-phone"}>Телефон</label><Input id={id + "-phone"} name="phone" type="tel" autoComplete="tel" required
            pattern={'(?=(?:\\D*\\d){7,15}\\D*$)[+0-9\\s\\(\\)\\-]+'} title="Введите от 7 до 15 цифр. Можно использовать плюс, пробелы, скобки и дефисы." /></div>
          <fieldset>
            <legend>Ваша роль</legend>
            <div className="mt-1 flex gap-5">
              {["Ученик", "Учитель"].map((item) => (
                <label key={item} className="flex items-center gap-2"><input type="radio" name="role" value={item} defaultChecked={role === item} required />{item}</label>
              ))}
            </div>
          </fieldset>
          <Button type="submit">Проверить заявку</Button>
          <p role="status" className="text-sm text-muted-foreground">
            {checked ? "Данные заполнены верно. Это демонстрационная форма." : "Демонстрационная форма. Отправка заявки пока отключена."}
          </p>
        </form>
      </Dialog.Content>
    </>
  );
}

export const Pricing = () => (
  <section id="pricing" className="container py-24 sm:py-32">
    <h2 className="text-center text-3xl font-bold md:text-4xl">
      Варианты <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">подключения</span>
    </h2>
    <p className="pb-8 pt-4 text-center text-xl text-muted-foreground">Выберите, как вы будете заниматься или преподавать.</p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <Dialog.Root key={option.title}>
          <Card className="relative flex flex-col">
            <CardHeader><CardTitle>{option.title}</CardTitle><CardDescription>{option.description}</CardDescription></CardHeader>
            <CardContent className="mt-auto">
              <Dialog.Trigger asChild>
                <Button className="w-full after:absolute after:inset-0 after:rounded-lg">Получить доступ</Button>
              </Dialog.Trigger>
            </CardContent>
            <hr className="mx-auto mb-4 w-4/5" />
            <CardFooter>
              <ul className="space-y-3">{option.features.map((feature) => (
                <li key={feature} className="flex gap-2"><Check aria-hidden="true" className="shrink-0 text-green-500" />{feature}</li>
              ))}</ul>
            </CardFooter>
          </Card>
          <Dialog.Portal><AccessForm title={option.title} role={option.role} /></Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  </section>
);
