"use client";

import ButtonShapeTabs from "@/components/button-tabs";
import Footer from "@/components/footer";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <header className="p-8 flex items-center justify-center flex-col text-center">
        <h1 className="text-5xl font-bold pt-8 tracking-tighter z-10">
          Karol Rynkowski
        </h1>
        <p className="text-lg text-muted-foreground">Software Developer</p>
        <Image
          src="/vercel.svg"
          alt="photo"
          width={200}
          height={200}
          priority
        />
      </header>
      <ButtonShapeTabs />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
