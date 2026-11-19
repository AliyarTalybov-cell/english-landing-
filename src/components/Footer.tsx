import { useDemoVideo } from "./DemoVideo";
import { LogoIcon } from "./Icons";

const linkStyle = "w-fit text-sm text-muted-foreground hover:text-foreground hover:underline";
const columnStyle = "flex flex-col items-start gap-3";

export const Footer = () => {
  const openDemo = useDemoVideo();
  return (
    <footer id="footer" className="border-t">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-[1fr_1.2fr_1fr_minmax(16rem,1.5fr)]">
        <nav aria-label="Маршрут" className={columnStyle}>
          <h3 className="font-bold">Маршрут</h3>
          <a href="/#about" className={linkStyle}>Roadmap A2</a>
          <button onClick={() => openDemo()} className={linkStyle}>Возможности</button>
          <a href="/#pricing" className={linkStyle}>Варианты подключения</a>
          <a href="/#faq" className={linkStyle}>Частые вопросы</a>
        </nav>
        <nav aria-label="Для преподавателей" className={columnStyle}>
          <h3 className="font-bold">Для преподавателей</h3>
          <button onClick={() => openDemo("teacher-editor")} className={linkStyle}>Редактор и прогресс</button>
          <button onClick={() => openDemo("teacher-groups")} className={linkStyle}>Группы и задания</button>
          <button onClick={() => openDemo("whiteboards")} className={linkStyle}>Доски</button>
        </nav>
        <nav aria-label="О сайте" className={columnStyle}>
          <h3 className="font-bold">О сайте</h3>
          <a href="/about" className={linkStyle}>О проекте</a>
          <a href="/privacy" className={linkStyle}>Политика конфиденциальности</a>
        </nav>
        <section aria-labelledby="footer-author" className="col-span-2 md:col-span-3 lg:col-span-1 lg:border-l lg:pl-7">
          <div className="flex items-center gap-3">
            <img src="/aliyar.jpg" width="60" height="60" loading="lazy" alt="Алияр Талыбов" className="h-[60px] w-[60px] rounded-full object-cover" />
            <div>
              <h3 id="footer-author" className="font-bold">Алияр Талыбов</h3>
              <p className="text-sm text-muted-foreground">Автор проекта</p>
            </div>
          </div>
          <p className="mt-4 text-sm">По вопросам доступа, уроков и работы с группами:</p>
          <address className="mt-3 flex flex-col gap-2 not-italic">
            <a className={linkStyle} href="tel:+79154655327">8 915 465-53-27</a>
            <a className={linkStyle} href="mailto:aliyartalybov@icloud.com">aliyartalybov@icloud.com</a>
            <a className={linkStyle} href="https://t.me/aliyarMSK">Telegram · @aliyarMSK</a>
          </address>
        </section>
      </div>
      <div className="container flex flex-wrap items-center gap-x-2 gap-y-1 border-t py-5 text-sm text-muted-foreground">
        © 2026
        <a className="inline-flex items-center font-medium text-foreground hover:underline" href="https://english-platform-orcin.vercel.app/">
          <LogoIcon small />English Platform
        </a>
        <span>Все права защищены.</span>
      </div>
    </footer>
  );
};
