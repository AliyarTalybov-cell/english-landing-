import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function AvatarPlaceholder({ large = false }: { large?: boolean }) {
  return (
    <span aria-hidden="true" className={cn("grid shrink-0 place-items-center rounded-full border bg-muted text-muted-foreground", large ? "absolute -top-12 h-24 w-24" : "h-10 w-10")}>
      <UserRound size={large ? 36 : 19} strokeWidth={1.5} />
    </span>
  );
}
