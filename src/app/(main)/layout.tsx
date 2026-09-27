import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="min-h-[100dvh] flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
