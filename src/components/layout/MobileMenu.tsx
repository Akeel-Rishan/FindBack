"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/shared/Logo";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  signedIn: boolean;
  onSignOut: () => Promise<void>;
}

export function MobileMenu({
  signedIn,
  onSignOut,
}: MobileMenuProps): React.ReactElement {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Logo />
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-accent"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto grid gap-3 border-t pt-6">
          {signedIn ? (
            <>
              <SheetClose asChild>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-3 py-2 font-medium hover:bg-accent"
                >
                  My Reports
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/profile"
                  className="rounded-lg px-3 py-2 font-medium hover:bg-accent"
                >
                  Profile
                </Link>
              </SheetClose>
              <Button variant="outline" onClick={() => void onSignOut()}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
