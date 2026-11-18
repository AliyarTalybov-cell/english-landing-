import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Play, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

import { clips, type Clip } from "./demoClips";

const DemoContext = createContext<(clip?: Clip) => void>(() => {});
export const useDemoVideo = () => useContext(DemoContext);

export function DemoVideoProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Clip | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  function open(clip: Clip = "roadmap") {
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActive(clip);
  }

  return (
    <DemoContext.Provider value={open}>
      {children}
      <Dialog.Root open={active !== null} onOpenChange={(value) => { if (!value) setActive(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75" />
          <Dialog.Content
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              (opener.current?.isConnected ? opener.current : document.querySelector<HTMLElement>("header button[aria-label='Меню']"))?.focus();
            }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl max-h-[95dvh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border bg-background p-4 shadow-xl sm:p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <Dialog.Title className="text-lg font-semibold">Возможности English Platform</Dialog.Title>
              <Dialog.Close asChild><Button size="icon" variant="ghost" aria-label="Закрыть видео"><X /></Button></Dialog.Close>
            </div>
            {active && (
              <video key={active} src={`/videos/demos/${active}.mp4`} poster={`/videos/demos/${active}.jpg`}
                aria-label={clips[active]} controls autoPlay playsInline
                className="mx-auto block aspect-[302/165] max-h-[66dvh] w-auto max-w-full rounded-md bg-black object-contain" />
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(clips) as Clip[]).map((clip) => (
                <Button key={clip} size="sm" variant={clip === active ? "default" : "outline"}
                  aria-pressed={clip === active} onClick={() => setActive(clip)}>{clips[clip]}</Button>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </DemoContext.Provider>
  );
}

export function DemoPreview({ clip, className }: { clip: Clip; className: string }) {
  const open = useDemoVideo();
  return (
    <button type="button" aria-label={`Смотреть видео «${clips[clip]}»`} aria-haspopup="dialog"
      onClick={() => open(clip)} className={cn("group relative block aspect-[800/499] max-w-full self-center overflow-hidden rounded-lg border bg-muted", className)}>
      <img src={`/videos/demos/${clip}.jpg`} alt="" loading="lazy" width="1510" height="825" className="h-full w-full object-contain" />
      <span className="absolute inset-0 grid place-items-center bg-black/10">
        <span className="rounded-full bg-black/75 p-3 text-white group-hover:bg-black/90"><Play className="h-5 w-5 fill-current" /></span>
      </span>
    </button>
  );
}
