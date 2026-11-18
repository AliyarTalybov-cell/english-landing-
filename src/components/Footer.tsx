import { useDemoVideo } from "./DemoVideo";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  const openDemo = useDemoVideo();
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="https://english-platform-orcin.vercel.app/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            English.
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Платформа</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://english-platform-orcin.vercel.app/"
              className="opacity-60 hover:opacity-100"
            >
              <LogoIcon small />Открыть English
            </a>
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Маршрут</h3>
          <div>
            <button type="button" aria-haspopup="dialog" onClick={() => openDemo()} className="opacity-60 hover:opacity-100">Возможности</button>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              Roadmap A2
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://english-platform-orcin.vercel.app/"
              className="opacity-60 hover:opacity-100"
            >
              Частые вопросы
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Для преподавателей</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://english-platform-orcin.vercel.app/"
              className="opacity-60 hover:opacity-100"
            >
              Редактор уроков
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://english-platform-orcin.vercel.app/"
              className="opacity-60 hover:opacity-100"
            >
              Доски
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://english-platform-orcin.vercel.app/"
              className="opacity-60 hover:opacity-100"
            >
              Прогресс
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2026 English Platform{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://english-platform-orcin.vercel.app/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            English
          </a>
        </h3>
      </section>
    </footer>
  );
};
