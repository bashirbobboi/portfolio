import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { RadialNavWrapper } from "@/components/radial-nav-wrapper";
import { MapPin, Calendar } from "lucide-react";
import { TappableVideo } from "@/components/tappable-video";

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
          <Button size="lg" className="bg-[#0077b5] text-white after:flex-1 hover:bg-[#004471] w-fit h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg rounded-xl gap-3" nativeButton={false} render={<a href="https://linkedin.com/in/mohammed-bobboi" target="_blank" rel="noopener noreferrer" />}>
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

    <section id="education" className="flex items-center px-[8%] lg:px-[18%] pt-32 pb-8 bg-primary-bg">
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
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Sept. 2022 — Jun. 2025</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic tracking-tight">BSc. Computer Science</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <p className="font-secondary text-primary-text text-base mt-4">Grade: <span className="font-semibold">First Class</span></p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Selected Highlights:</p>
                <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-1">
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Awarded a distinction for dissertation research on probabilistic bisimulation and Wasserstein-based behavioural distances.</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Chosen to represent the Computer Science department as a Student Ambassador from a cohort of 3,000+ students.</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Worked directly with an external company in the COM3420 Software Hut module to develop production-ready software, later being individually selected to continue the project as a summer intern.</span></li>
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
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Sept. 2021 — Jun. 2022</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic tracking-tight">NCUK International Foundation Year</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Manchester, United Kingdom</p>
            </div>

            <p className="font-secondary text-primary-text text-base mt-4">Grade: <span className="font-semibold">Mathematics: A*, English: A*, Physics: A & Further Mathematics: B</span></p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Selected Highlights:</p>
                <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-1">
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Achieved <span className="font-semibold text-primary-text">top 1%</span> performance in Mathematics across the cohort</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Achieved <span className="font-semibold text-primary-text">top 1%</span> performance in English across the cohort</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Awarded a degree in Science & Engineering</span></li>
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
    <section id="experience" className="flex items-center px-[8%] lg:px-[18%] pt-8 pb-16 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Experience</h2>

        <div className="flex gap-6 items-stretch">
          {/* Logo on left */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img src="/steeze.png" alt="Steeze" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Steeze</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />London, United Kingdom</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">Founder & Chief Technology Officer</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base italic shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Oct. 2025 — Present</p>
            </div>

            <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-3 mt-4">
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Contributed within a world-leading manufacturing research centre collaborating with industry leaders including <span className="font-semibold text-primary-text">Boeing</span>, <span className="font-semibold text-primary-text">Rolls-Royce</span> and <span className="font-semibold text-primary-text">Airbus</span>.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Selected as the <span className="font-semibold text-primary-text">first student</span> to participate in the centre&apos;s inaugural internship programme.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Built a full-stack device management web app on <span className="font-semibold text-primary-text">Ruby on Rails</span>, following <span className="font-semibold text-primary-text">MVC</span> design, <span className="font-semibold text-primary-text">PostgreSQL</span> database and <span className="font-semibold text-primary-text">HTML &amp; CSS</span>, saving <span className="font-semibold text-primary-text">£2,000+</span> annually on lost devices.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Used <span className="font-semibold text-primary-text">GitHub</span> for collaborative development with feature branching and pull requests; integrated automated testing workflows to maintain code quality and version control in a team of <span className="font-semibold text-primary-text">9 developers</span>.</span></li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 items-stretch mt-8">
          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">180 Degrees Consulting</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">Technology Director</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base italic shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" /> Oct. 2024 — Jun. 2025</p>
            </div>

            <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-3 mt-4">
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Contributed within the <span className="font-semibold text-primary-text">world&apos;s largest student-led consultancy</span>, operating across <span className="font-semibold text-primary-text">200+ branches</span> globally.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Served as the <span className="font-semibold text-primary-text">founding Technology Director</span> for the Sheffield branch, contributing to the branch being recognised as the organisation&apos;s <span className="font-semibold text-primary-text">&quot;Best New Branch&quot;</span>.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Led development of a client outreach web app, independently building the <span className="font-semibold text-primary-text">TypeScript</span> frontend and integrating third-party APIs to identify potential clients, resulting in a <span className="font-semibold text-primary-text">500% increase</span> in client reach.</span></li>
            </ul>
          </div>

          {/* Logo on right */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img src="/180dc.png" alt="180DC" className="w-full h-full object-contain object-top" />
          </div>
        </div>

        <div className="flex gap-6 items-stretch mt-8">
          {/* Logo on left */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img src="/amrc.png" alt="AMRC" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Advanced Manufacturing Research Centre</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, England</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">Software Engineer Intern</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base italic shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Jul. 2024 — Sept. 2024</p>
            </div>

            <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-3 mt-4">
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Operated within a world-leading manufacturing research centre collaborating with industry leaders including <span className="font-semibold text-primary-text">Boeing</span>, <span className="font-semibold text-primary-text">Rolls-Royce</span> and <span className="font-semibold text-primary-text">Airbus</span>.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Selected as the <span className="font-semibold text-primary-text">first student</span> to participate in the centre&apos;s inaugural internship programme.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Built a full-stack device management web app on <span className="font-semibold text-primary-text">Ruby on Rails</span>, following <span className="font-semibold text-primary-text">MVC</span> design, <span className="font-semibold text-primary-text">PostgreSQL</span> database and <span className="font-semibold text-primary-text">HTML &amp; CSS</span>, saving <span className="font-semibold text-primary-text">£2,000+</span> annually on lost devices.</span></li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 items-stretch mt-8">
          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Twikker Fund, USIS</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">Portfolio Analytics Analyst</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base italic shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Oct. 2023 — Sept. 2024</p>
            </div>

            <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-3 mt-4">
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Worked within <span className="font-semibold text-primary-text">Europe&apos;s largest student-led investment fund</span>, overseeing more than <span className="font-semibold text-primary-text">£250,000</span> in assets under management.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Developed a portfolio analytics dashboard by integrating data from the fund&apos;s <span className="font-semibold text-primary-text">C# investment platform API</span> to improve visibility into portfolio performance and allocation data.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Explored quantitative portfolio optimisation approaches using <span className="font-semibold text-primary-text">Modern Portfolio Theory</span> to investigate future allocation strategies and risk-adjusted portfolio balancing.</span></li>
            </ul>
          </div>

          {/* Logo on right */}
          <div className="self-start w-16 lg:w-100 shrink-0 flex h-72 lg:h-96">
            <img src="/twikkerfund.png" alt="Twikker Fund" className="w-full h-full object-contain object-top" />
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="flex items-center px-[8%] lg:px-[18%] pt-8 pb-16 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Projects</h2>
        <TappableVideo src="/steeze.mp4" className="w-1/3 h-[50vh] object-cover rounded-2xl" />
      </div>
    </section>
    </>
  );
}
