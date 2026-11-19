import { useDemoVideo } from "./DemoVideo";

export const Footer = () => {
  const openDemo = useDemoVideo();
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
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
        <p>© 2026 Алияр Талыбов</p>
      </section>
    </footer>
  );
};
