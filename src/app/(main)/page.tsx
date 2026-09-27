import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Handshake,
  KeyRound,
  Package,
  PackageSearch,
  PawPrint,
  Search,
  Shirt,
  Smartphone,
  Upload,
  WalletCards,
  Watch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ITEM_CATEGORIES } from "@/lib/constants";

const steps = [
  {
    title: "Report",
    description: "Upload a photo or describe your item",
    icon: Upload,
  },
  {
    title: "Match",
    description: "FindBack searches nearby reports automatically",
    icon: Search,
  },
  {
    title: "Verify",
    description: "Securely confirm ownership",
    icon: CheckCircle2,
  },
  { title: "Return", description: "Arrange a safe handover", icon: Handshake },
] as const;

const categoryIcons = {
  Smartphone,
  WalletCards,
  KeyRound,
  FileText,
  Watch,
  Shirt,
  BookOpen,
  PawPrint,
  PackageSearch,
};

export default function HomePage(): React.ReactElement {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/30 dark:to-background">
        <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              Lost something? We&apos;ll help you find it.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-300">
              Report lost or found belongings, discover nearby matches, and
              bring them home safely.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-14 px-8" asChild>
                <Link href="/report/lost">
                  <Search className="h-5 w-5" />I Lost Something
                </Link>
              </Button>
              <Button
                size="lg"
                className="h-14 bg-found px-8 text-white hover:bg-found-dark"
                asChild
              >
                <Link href="/report/found">
                  <Package className="h-5 w-5" />I Found Something
                </Link>
              </Button>
            </div>
            <Link
              href="/browse"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Browse all reports <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl border bg-card shadow-[0_24px_70px_-35px_rgba(30,64,175,0.45)]">
            <Image
              src="/hero-lost-items.png"
              alt="Wallet, keys, earbuds, umbrella, and a card waiting to be reunited with their owners"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How FindBack Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four clear steps keep every report focused, private, and easy to
              act on.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <step.icon className="h-7 w-7 text-brand" strokeWidth={1.75} />
                <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="community-stats"
        className="bg-blue-700 py-14 text-white dark:bg-blue-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="community-stats" className="sr-only">
            Community stats
          </h2>
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="text-4xl font-extrabold tabular-nums">8,421</p>
              <p className="mt-2 text-sm text-blue-100">Reports</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold tabular-nums">2,140</p>
              <p className="mt-2 text-sm text-blue-100">Items Returned</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold tabular-nums">74</p>
              <p className="mt-2 text-sm text-blue-100">Communities</p>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-blue-100">
            Placeholder values. Real community data will replace these figures
            later.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What kind of item did you lose?
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {ITEM_CATEGORIES.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <Link
                  key={category.id}
                  href={`/browse?category=${category.id}`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm font-semibold shadow-sm transition-colors hover:border-brand hover:bg-blue-50 dark:hover:bg-blue-950/40"
                >
                  <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  {category.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Create a report in a few simple steps.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/report/lost">
                <Search className="h-5 w-5" />I Lost Something
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-found text-white hover:bg-found-dark"
              asChild
            >
              <Link href="/report/found">
                <Package className="h-5 w-5" />I Found Something
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
