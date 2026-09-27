import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function NotFound(): React.ReactElement {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-4">
      <div className="text-center">
        <Logo size="lg" className="justify-center" />
        <h1 className="mt-8 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
