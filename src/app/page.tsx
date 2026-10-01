import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Tracks } from "@/sections/Tracks";
import { Timeline } from "@/sections/Timeline";
import { Projects } from "@/sections/Projects";
import { Mentors } from "@/sections/Mentors";
import { DiscordGuide } from "@/sections/DiscordGuide";
import { GitHubWorkflow } from "@/sections/GitHubWorkflow";
import { Prizes } from "@/sections/Prizes";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      <Navigation />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Projects />
      <Mentors />
      <DiscordGuide />
      <GitHubWorkflow />
      <Prizes />
      <FinalCTA />
      <Footer />
    </main>
  );
}
