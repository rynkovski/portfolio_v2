import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh max-w-xl mx-auto px-6 py-12">
      <div className="mt-8 flex flex-col gap-1 text-sm font-[460] tracking-[-0.00563rem]">
        <h1 className="font-medium text-foreground">404</h1>
        <p className="text-muted-foreground">This page doesn&apos;t exist.</p>
      </div>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-[460] tracking-[-0.00563rem] text-foreground underline underline-offset-[3px] decoration-foreground/30 hover:decoration-foreground transition-colors"
      >
        Back home
      </Link>
    </main>
  );
}
