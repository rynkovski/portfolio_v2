import { AboutSection } from "@/components/about-section";
import { Header } from "@/components/header";
import { LocalTime } from "@/components/local-time";
import { WorkSection } from "@/components/work-section";

export default function Page() {
  return (
    <main className="min-h-dvh max-w-xl mx-auto px-6 py-12">
      <Header />
      <AboutSection />
      <WorkSection />
      <LocalTime />
    </main>
  );
}
