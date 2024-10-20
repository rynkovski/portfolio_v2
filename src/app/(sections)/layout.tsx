import ButtonShapeTabs from "@/components/button-tabs";
import FadeUp from "@/components/fadeup";
import Header from "@/components/header";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <FadeUp delay={0.2} duration={0.8}>
        <Header />
      </FadeUp>
      <FadeUp delay={0.5} duration={0.8}>
        <ButtonShapeTabs />
      </FadeUp>
      <FadeUp delay={0.8} duration={0.8}>
        <main>{children}</main>
      </FadeUp>
    </div>
  );
}

export default Layout;
