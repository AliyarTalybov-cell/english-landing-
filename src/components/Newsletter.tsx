import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Следующий шаг —{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">оставьте свои данные</span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Мы свяжемся с вами по почте, чтобы предоставить доступ к English.
        </p>
        <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)} className="mx-auto flex w-full max-w-2xl flex-col gap-3 md:flex-row">
          <Input name="name" autoComplete="given-name" required pattern=".*\S.*" aria-label="Имя" placeholder="Ваше имя" className="bg-muted/50" />
          <Input type="email" name="email" autoComplete="email" required aria-label="Электронная почта" placeholder="Электронная почта" className="bg-muted/50" />
          <Button type="submit">Отправить заявку</Button>
        </form>
        <p role="status" className="mt-3 text-center text-sm text-muted-foreground">
          {submitted ? "Проверка пройдена. В демоверсии данные остаются в форме." : "Демонстрационная форма. Отправка пока отключена."}
        </p>
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
