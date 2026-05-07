import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-between px-[10%] bg-primary-bg">
      <div className="flex flex-col gap-12 max-w-3xl">
        <h1 className="font-primary text-primary-text text-5xl font-bold">Mohammed Bobboi is a Software Engineer based in London, England.</h1>
        <p className="font-secondary text-primary-text text-2xl"> He is a Computer Science Graduate from the University of Sheffield with 2+ years of experience in Software Development, AI/ML/GenAI and delivering scalable, business-focused solutions across fintech, startups and R&D environments.</p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90 w-fit h-14 px-8 text-lg rounded-xl gap-3" asChild>
            <a href="https://github.com/bashirbobboi" target="_blank" rel="noopener noreferrer">
              <RiGithubFill className="opacity-60" size={34} aria-hidden="true" />
              GitHub
            </a>
          </Button>
          <Button size="lg" className="bg-[#0077b5] text-white after:flex-1 hover:bg-[#0077b5]/90 w-fit h-14 px-8 text-lg rounded-xl gap-3" asChild>
            <a href="https://linkedin.com/in/bashirbobboi" target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill className="text-white" size={34} aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
      <div className="relative w-80 h-[400px] shrink-0">
        <Image
          src="/myphoto.jpeg"
          alt="My photo"
          fill
          className="object-cover z-0"
          priority
        />
        <img
          src="/doodle.gif"
          alt="doodle"
          className="absolute -top-18 -left-26 w-80 h-80 object-cover"
        />
        <img
          src="/doodle.gif"
          alt="doodle"
          className="absolute -bottom-18 -right-26 w-80 h-80 object-cover rotate-180 z-10"
        />
      </div>
    </main>
  );
}
