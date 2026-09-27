import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { APP_TAGLINE } from "@/lib/constants";

const platformLinks = [
  { label: "Browse Reports", href: "/browse" },
  { label: "Report Lost Item", href: "/report/lost" },
  { label: "Report Found Item", href: "/report/found" },
  { label: "How It Works", href: "/#how-it-works" },
];

const infoLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Safety Guidelines", href: "#" },
  { label: "About", href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 font-semibold">{APP_TAGLINE}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A safer, simpler way for communities across Sri Lanka to reconnect
              people with their belongings.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">FindBack</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Information</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FindBack. All rights reserved.</p>
          <p>Made with ❤️ for Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
