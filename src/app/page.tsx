import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      <Navigation />
      <Hero />
    </main>
  );
}
