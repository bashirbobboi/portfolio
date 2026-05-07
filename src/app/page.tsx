import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { RadialNavWrapper } from "@/components/radial-nav-wrapper";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-between px-[8%] lg:px-[18%] gap-8 bg-primary-bg">
      <div className="flex flex-col gap-6 lg:gap-12 max-w-xl lg:max-w-3xl">
        <h1 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Mohammed Bobboi is a Software Engineer based in London, England.</h1>
        <p className="font-secondary text-primary-text text-lg lg:text-2xl text-left"> He is a Computer Science Graduate from the University of Sheffield with 2+ years of experience in Software Development, AI/ML/GenAI and delivering scalable, business-focused solutions across fintech, startups and R&D environments.</p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90 w-fit h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg rounded-xl gap-3" nativeButton={false} render={<a href="https://github.com/bashirbobboi" target="_blank" rel="noopener noreferrer" />}>
            <RiGithubFill className="opacity-60" size={28} aria-hidden="true" />
            GitHub
          </Button>
          <Button size="lg" className="bg-[#0077b5] text-white after:flex-1 hover:bg-[#0077b5]/90 w-fit h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg rounded-xl gap-3" nativeButton={false} render={<a href="https://linkedin.com/in/mohammed-bobboi" target="_blank" rel="noopener noreferrer" />}>
            <RiLinkedinFill className="text-white" size={28} aria-hidden="true" />
            LinkedIn
          </Button>
        </div>
      </div>
      <div className="relative w-56 h-[320px] lg:w-80 lg:h-[400px] shrink-0">
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
      <div className="fixed top-12 left-16 z-50">
        <RadialNavWrapper />
      </div>
    </main>
  );
}
