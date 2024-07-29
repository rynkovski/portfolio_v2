"use client";

import ButtonShapeTabs from "@/components/button-tabs";
import Footer from "@/components/footer";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <header className="p-8 flex gap-2 items-center justify-center text-center flex-col">
        <Image
          src="/images/photo.jpg"
          alt="profile photo"
          width={100}
          height={100}
          className="z-10 rounded-full"
        />
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-5xl font-bold pt-6 tracking-tighter z-10">
            Karol Rynkowski
          </h1>
          <p className="text-lg text-muted-foreground">Software Developer</p>
        </div>
      </header>
      <ButtonShapeTabs />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
