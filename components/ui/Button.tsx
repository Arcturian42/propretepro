import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-pp focus-visible:ring-offset-2 cursor-pointer active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "btn-primary hover:scale-[1.02]",
  secondary:
    "bg-white text-night-900 border border-line shadow-sm hover:border-teal-pp hover:shadow-md",
  ghost: "text-night-700 hover:bg-night-50",
  dark: "bg-night-900 text-white hover:bg-night-800 shadow-sm",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { href, children, variant = "primary", size = "md", className } = props;
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
