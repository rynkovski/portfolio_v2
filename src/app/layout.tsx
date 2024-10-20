import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import GridPattern from "@/components/ui/grid-pattern";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Karol Rynkowski",
  description: "My personal site to showcase my developer work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Footer />
          <Analytics />
          <GridPattern
            width={40}
            height={40}
            x={0}
            y={0}
            z={-1}
            className={cn(
              "[mask-image:radial-gradient(1000px_circle_at_top,white,transparent)] -z-10"
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
