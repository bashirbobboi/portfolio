import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { RadialNavWrapper } from "@/components/radial-nav-wrapper";

export default function Home() {
  return (
    <>
    <main className="flex flex-1 items-center justify-between px-[8%] lg:px-[18%] pt-24 gap-8 bg-primary-bg">
      <div className="flex flex-col gap-6 lg:gap-12 max-w-xl lg:max-w-3xl">
        <h1 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Mohammed Bobboi is a Software Engineer based in London, England.</h1>
        <p className="font-secondary text-primary-text text-base lg:text-xl text-left"> He is a Computer Science Graduate from the University of Sheffield with 2+ years of experience in Software Development, AI/ML/GenAI and delivering scalable, business-focused solutions across fintech, startups and R&D environments.</p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90 w-fit h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg rounded-xl gap-3" nativeButton={false} render={<a href="https://github.com/bashirbobboi" target="_blank" rel="noopener noreferrer" />}>
            <RiGithubFill className="opacity-60" size={28} aria-hidden="true" />
            GitHub
          </Button>
          <Button size="lg" className="bg-[#0077b5] text-white after:flex-1 hover:bg-[#005f8e] w-fit h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg rounded-xl gap-3" nativeButton={false} render={<a href="https://linkedin.com/in/mohammed-bobboi" target="_blank" rel="noopener noreferrer" />}>
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

    <section id="education" className="min-h-screen flex items-center px-[8%] lg:px-[18%] py-24 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Education</h2>

        <div className="flex gap-6 items-stretch">
          {/* Logo spanning full entry height */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img src="/sheffield.png" alt="University of Sheffield" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">University of Sheffield</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4">Sept. 2022 — Jun. 2025</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">BSc. Computer Science</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4">Sheffield, United Kingdom</p>
            </div>

            <p className="font-secondary text-primary-text text-base mt-4">Grade: <span className="font-semibold">First Class</span></p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Highlights:</p>
                <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-1">
                  <li><span className="text-xs mr-2">◇</span>Head of Data, Information, and Academics at Indonesian Student Association</li>
                  <li><span className="text-xs mr-2">◇</span>Student Library Assistant at the UoB&apos;s Library</li>
                  <li><span className="text-xs mr-2">◇</span>Campus Ambassador at the UoB&apos;s Open Day 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-stretch">
          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">INTO Manchester</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4">Sept. 2022 — Jun. 2025</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">BSc. Computer Science</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4">Sheffield, United Kingdom</p>
            </div>

            <p className="font-secondary text-primary-text text-base mt-4">Grade: <span className="font-semibold">First Class</span></p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Highlights:</p>
                <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-1">
                  <li><span className="text-xs mr-2">◇</span>Head of Data, Information, and Academics at Indonesian Student Association</li>
                  <li><span className="text-xs mr-2">◇</span>Student Library Assistant at the UoB&apos;s Library</li>
                  <li><span className="text-xs mr-2">◇</span>Campus Ambassador at the UoB&apos;s Open Day 2024</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo on right spanning full entry height */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img src="/INTO.png" alt="INTO" className="w-full h-full object-contain object-top" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
