"use client";

import ButtonShapeTabs from "@/components/button-tabs";
import Footer from "@/components/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-5xl mx-auto text-center">
      <header className="p-8">
        <h1 className="text-5xl font-bold pt-8 tracking-tighter">
          Karol Rynkowski
        </h1>
        <p className="text-lg text-muted-foreground">Engineer & Designer</p>
      </header>
      <ButtonShapeTabs />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
