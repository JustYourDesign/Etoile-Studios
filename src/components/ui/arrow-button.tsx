import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArrowButton({
  href,
  children,
  className,
  variant = "light",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      data-cursor="hidden"
      className={cn(
        "group inline-flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-70",
        variant === "light" ? "text-paper" : "text-ink",
        className
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      <span
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
