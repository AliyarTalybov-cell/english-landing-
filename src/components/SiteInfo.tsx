import { useEffect } from "react";
import { LogoIcon } from "./Icons";
import { ModeToggle } from "./mode-toggle";

const titles = { about: "О проекте", privacy: "Политика конфиденциальности" };

export function SiteInfo({ page }: { page: keyof typeof titles }) {
  const title = titles[page];
  useEffect(() => { document.title = title + " — English Platform"; }, [title]);
  return (
    <>
      <header className="border-b">
        <div className="container flex h-14 items-center justify-between">
          <a href="/" aria-label="English — на главную" className="flex items-center text-xl font-bold"><LogoIcon />English</a>
          <ModeToggle />
        </div>
      </header>
      <main className="container max-w-3xl py-12 sm:py-20">
        <a className="text-sm text-muted-foreground hover:underline" href="/">← На главную</a>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
        <article className="mt-6 space-y-5 leading-relaxed [&_h2]:pt-3 [&_h2]:text-xl [&_h2]:font-semibold [&_a]:text-primary [&_a]:underline">
          {page === "about" ? <AboutProject /> : <Privacy />}
        </article>
      </main>
    </>
  );
}

function AboutProject() {
  return (
    <>
      <p>Здравствуйте! Я Алияр Талыбов, автор English Platform. Я собрал в одном месте то, что нужно для практики между уроками: объяснения, задания, звучащую речь и возможность обсудить трудное с преподавателем.</p>
      <p>В основе курса — учебник Roadmap A2 издательства Pearson. На платформе можно открыть тему, послушать диалог, сохранить незнакомую фразу и сразу попробовать её в разговоре с ИИ. Если занимаетесь с учителем, ту же фразу можно разобрать на общей доске.</p>
      <p>English Platform — самостоятельный авторский проект. Издатель учебника — Pearson. Права на книгу и иллюстрации принадлежат их правообладателям.</p>
      <p>Желаю вам найти свой ритм занятий и всё чаще замечать, что нужные слова приходят сами.</p>
      <p>All the best,<br />Алияр Талыбов</p>
      <a className="inline-block" href="/#pricing">Выбрать формат занятий →</a>
    </>
  );
}

function Privacy() {
  return (
    <>
      <p>Эта политика относится к информационному сайту English Platform. За его содержание и обращения посетителей отвечает Алияр Талыбов.</p>
      <h2>Что происходит с заявкой</h2>
      <p>Обе формы на сайте работают в демонстрационном режиме. Имя, почта, телефон и выбранная роль используются только для проверки полей в браузере. Сайт не отправляет эти значения на сервер и не записывает их в хранилище браузера. После перезагрузки страницы введённые данные в приложении сбрасываются.</p>
      <h2>Обращения к автору</h2>
      <p>Если вы сами отправите письмо, позвоните или напишете в Telegram, автор получит контакты и сведения, которыми вы поделитесь. Они нужны, чтобы ответить на ваш вопрос. Чтобы уточнить, исправить или удалить сведения из переписки, напишите на <a href="mailto:aliyartalybov@icloud.com">aliyartalybov@icloud.com</a>.</p>
      <h2>Cookie и настройки браузера</h2>
      <p>Код лендинга не устанавливает cookie и не подключает рекламные пиксели или счётчики аналитики. Когда вы меняете оформление, выбранная тема сохраняется на вашем устройстве в localStorage под ключом <code>vite-ui-theme</code>. Её можно сбросить, очистив данные сайта в браузере.</p>
      <h2>Загрузка страниц и переходы по ссылкам</h2>
      <p>Страницы, фотографии и видео загружаются с домена лендинга. Хостинг Vercel получает технические данные запроса, в том числе IP-адрес и запрошенный путь, для доставки содержимого и защиты сайта. Подробнее — в <a href="https://vercel.com/legal/privacy-policy">политике Vercel</a>.</p>
      <p>Учебная платформа с личным кабинетом и Telegram открываются отдельно. Обработка данных при входе в эти сервисы выходит за рамки этой политики.</p>
    </>
  );
}
