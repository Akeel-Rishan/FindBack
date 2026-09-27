import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { text: "text-lg", icon: "h-5 w-5" },
  md: { text: "text-xl", icon: "h-6 w-6" },
  lg: { text: "text-3xl", icon: "h-8 w-8" },
};

export default function Logo({
  size = "md",
  className,
}: LogoProps): React.ReactElement {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-extrabold tracking-tight",
        sizes[size].text,
        className,
      )}
      aria-label="FindBack home"
    >
      <span className="flex items-center justify-center rounded-lg bg-brand p-1.5 text-white">
        <MapPin className={sizes[size].icon} strokeWidth={2} />
      </span>
      <span>
        <span className="text-brand">Find</span>
        <span className="text-foreground">Back</span>
      </span>
    </Link>
  );
}
