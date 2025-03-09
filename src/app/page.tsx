import AboutSection from "@/components/about-section";
import BlogSection from "@/components/blog-section";
import FadeUp from "@/components/fadeup";
import Header from "@/components/header";
import ProjectsSection from "@/components/projects-section";

export default function Page() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-12">
      <Header />
      <FadeUp delay={0.2} duration={1}>
        <AboutSection />
      </FadeUp>
      <FadeUp delay={0.4} duration={1}>
        <ProjectsSection />
      </FadeUp>
      <FadeUp delay={0.6} duration={1}>
        <BlogSection />
      </FadeUp>
    </div>
  );
}
