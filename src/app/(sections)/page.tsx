import AboutSection from "@/components/about-section";
import FadeUp from "@/components/fadeup";
import SkillsSection from "@/components/skills-section";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FadeUp delay={0.2} duration={0.8}>
        <AboutSection />
      </FadeUp>
      <FadeUp delay={0.4} duration={0.8}>
        <SkillsSection />
      </FadeUp>
    </div>
  );
}
