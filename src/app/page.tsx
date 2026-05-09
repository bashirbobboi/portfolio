import Image from "next/image";
import { RadialNavWrapper } from "@/components/radial-nav-wrapper";
import { MapPin, Calendar } from "lucide-react";
import { TechIcon } from "@/components/tech-icon";
import { GithubChart } from "@/components/github-chart";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { WatercolorCard } from "@/components/watercolor-card";
import { SkillTile } from "@/components/skill-tile";
import { LazyVideo } from "@/components/lazy-video";

export default function Home() {
  return (
    <>
    <main id="home" className="flex flex-1 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[18%] pt-24 lg:pt-24 gap-8 bg-primary-bg">
      <div className="flex flex-col gap-6 lg:gap-12 max-w-xl lg:max-w-3xl">
        <h1 className="font-primary text-primary-text text-2xl sm:text-3xl lg:text-5xl font-bold text-center lg:text-left">Mohammed Bobboi is a Software Engineer based in London, England.</h1>
        <p className="font-secondary text-primary-text text-sm sm:text-base lg:text-xl text-center lg:text-left"> He is a Computer Science Graduate from the University of Sheffield with 2+ years of experience in Software Development, AI/ML/GenAI and delivering scalable, business-focused solutions across fintech, startups and R&D environments.</p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="https://github.com/bashirbobboi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center">
            <img src="/githubb.webp" alt="GitHub" className="h-20 sm:h-20 lg:h-22 w-auto object-contain" />
          </a>
          <a href="https://linkedin.com/in/mohammed-bobboi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center">
            <img src="/linkedin.webp" alt="LinkedIn" className="h-22 sm:h-22 lg:h-24 w-auto object-contain" />
          </a>
        </div>
      </div>
      <div className="relative w-44 h-[260px] sm:w-56 sm:h-[320px] lg:w-80 lg:h-[400px] shrink-0">
        <Image
          src="/myphoto.jpeg"
          alt="My photo"
          fill
          className="object-cover z-0"
          priority
        />
        <img loading="lazy"
          src="/doodle.gif"
          alt="doodle"
          className="absolute -top-12 -left-16 w-56 h-56 sm:-top-18 sm:-left-26 sm:w-80 sm:h-80 object-cover"
        />
        <img loading="lazy"
          src="/doodle.gif"
          alt="doodle"
          className="absolute -bottom-12 -right-16 w-56 h-56 sm:-bottom-18 sm:-right-26 sm:w-80 sm:h-80 object-cover rotate-180 z-10"
        />
      </div>
      <div className="fixed top-4 left-4 lg:top-12 lg:left-16 z-50">
        <RadialNavWrapper />
      </div>
    </main>

    <section id="education" className="flex items-center px-[8%] lg:px-[18%] pt-32 pb-8 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Education</h2>

        <div className="flex gap-6 items-stretch">
          {/* Logo spanning full entry height */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img loading="lazy" src="/logos/sheffield.webp" alt="University of Sheffield" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">University of Sheffield</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Sept. 2022 — Jun. 2025</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic tracking-tight">BSc. Computer Science</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <p className="font-secondary text-primary-text text-base mt-4">Grade: <span className="font-semibold">First Class</span></p>

            <div className="flex flex-col gap-6 mt-2">
              <div className="flex flex-col gap-2">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Selected Highlights:</p>
                <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-1">
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Awarded a <span className="font-semibold text-primary-text">distinction</span> for dissertation research on <span className="font-semibold text-primary-text">probabilistic bisimulation</span> and <span className="font-semibold text-primary-text">Wasserstein-based behavioural distances</span>.</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Chosen to represent the Computer Science department as a <span className="font-semibold text-primary-text">Student Ambassador</span> from a cohort of <span className="font-semibold text-primary-text">3,000+ students</span>.</span></li>
                  <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Worked directly with an external company in the <span className="font-semibold text-primary-text">COM3420 Software Hut</span> module to develop <span className="font-semibold text-primary-text">production-ready software</span>, later being <span className="font-semibold text-primary-text">individually selected</span> to continue the project as a summer intern.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-stretch">
          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">INTO Manchester</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Sept. 2021 — Jun. 2022</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
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
            <img loading="lazy" src="/logos/into.webp" alt="INTO" className="w-full h-full object-contain object-top" />
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
            <img loading="lazy" src="/projects/steeze.webp" alt="Steeze" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Steeze</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />London, United Kingdom</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
              <p className="font-secondary text-primary-text text-base lg:text-lg italic">Founder & Chief Technology Officer</p>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base italic shrink-0 ml-4 flex items-center gap-1"><Calendar size={13} className="shrink-0" />Oct. 2025 — Present</p>
            </div>

            <ul className="font-secondary text-zinc-600 text-sm lg:text-base space-y-3 mt-4">
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Founded and led the development of <span className="font-semibold text-primary-text">Steeze</span>, a peer-to-peer fashion marketplace designed to make shopping for fashion convenient for buyers and sellers.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Built the mobile application using <span className="font-semibold text-primary-text">React Native</span>, creating a cross-platform experience focused on usability, performance, and modern UI design — now serving <span className="font-semibold text-primary-text">1,000+ users</span>.</span></li>
              <li className="flex gap-2"><span className="text-xs mt-1 shrink-0">◇</span><span>Partnered with <span className="font-semibold text-primary-text">20+ fashion businesses</span> to list and sell their products on Steeze, expanding the platform&apos;s catalogue and driving seller-side growth.</span></li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 items-stretch mt-8">
          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">180 Degrees Consulting</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
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
            <img loading="lazy" src="/logos/180dc.webp" alt="180DC" className="w-full h-full object-contain object-top" />
          </div>
        </div>

        <div className="flex gap-6 items-stretch mt-8">
          {/* Logo on left */}
          <div className="self-stretch w-16 lg:w-100 shrink-0 flex items-stretch">
            <img loading="lazy" src="/logos/amrc.webp" alt="AMRC" className="w-full h-full object-contain object-top" />
          </div>

          {/* Entry content */}
          <div className="flex flex-col flex-1">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Advanced Manufacturing Research Centre</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, England</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
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
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1">
              <h3 className="font-primary text-primary-text text-2xl lg:text-3xl font-bold">Twikker Fund, USIS</h3>
              <p className="font-secondary text-zinc-500 text-sm lg:text-base shrink-0 ml-4 flex items-center gap-1"><MapPin size={13} className="shrink-0" />Sheffield, United Kingdom</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 mt-1">
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
            <img loading="lazy" src="/projects/twikkerfund.webp" alt="Twikker Fund" className="w-full h-full object-contain object-top" />
          </div>
        </div>
      </div>
    </section>
    <section id="projects" className="flex items-center px-[8%] lg:px-[18%] pt-8 pb-16 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Projects</h2>
        <GithubChart username="bashirbobboi" />
        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-130 rounded-2xl border border-zinc-200 overflow-hidden">
            <LazyVideo src="/projects/steezewide.mp4" poster="/projects/steezewide-poster.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://www.steeze.ng/" target="_blank" rel="noopener noreferrer" className="group/card6 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Steeze Mobile App</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card6:border-black group-hover/card6:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack6">
                  <div className="transition-all duration-300 z-60 rotate-[-6deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/reactnative.png" label="React Native" subtitle="Mobile Framework" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-50 rotate-[-3deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/expo.jpeg" label="Expo" subtitle="Mobile Platform" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-30 rotate-[5deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/s3.png" label="AWS S3" subtitle="Cloud Storage" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-40 rotate-[2deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/supabase.jpeg" label="Supabase" subtitle="Backend-as-a-Service" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-20 rotate-[-4deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/postgres.png" label="PostgreSQL" subtitle="Database" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-10 rotate-[3deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/resend.png" label="Resend" subtitle="Email API" blackBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack6:ml-2 z-0 rotate-[-2deg] group-hover/stack6:rotate-0"><TechIcon src="/tech/figma.png" label="Figma" subtitle="Design Tool" whiteBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">Developed a cross-platform mobile application using <span className="font-semibold text-primary-text">React Native</span> and <span className="font-semibold text-primary-text">Expo</span>, backed by a <span className="font-semibold text-primary-text">PostgreSQL</span> database with <span className="font-semibold text-primary-text">Supabase</span> as the backend-as-a-service layer, currently supporting over <span className="font-semibold text-primary-text">1,000 users</span>. Designed and translated complex user requirements into an intuitive mobile experience by producing wireframes and UI flows for <span className="font-semibold text-primary-text">26+ screens</span> in <span className="font-semibold text-primary-text">Figma</span>, while also integrating <span className="font-semibold text-primary-text">AWS S3</span> object storage via Supabase for secure file handling and <span className="font-semibold text-primary-text">Resend</span> for scalable email delivery.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-120 rounded-2xl border border-zinc-200 overflow-hidden">
            <LazyVideo src="/projects/dissertation.mp4" poster="/projects/dissertation-poster.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://github.com/bashirbobboi/Bisimulation" target="_blank" rel="noopener noreferrer" className="group/card5 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Dissertation</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card5:border-black group-hover/card5:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack5">
                  <div className="transition-all duration-300 z-60 rotate-[-6deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/python.png" label="Python" subtitle="Programming Language" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack5:ml-2 z-50 rotate-[-3deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/pytest.png" label="Pytest" subtitle="Testing Framework" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack5:ml-2 z-10 rotate-[3deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/typer.png" label="Typer" subtitle="CLI Library" blackBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack5:ml-2 z-40 rotate-[2deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/scipy.svg" label="SciPy" subtitle="Scientific Library" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack5:ml-2 z-30 rotate-[5deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/numpy.svg" label="NumPy" subtitle="Numerical Library" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack5:ml-2 z-20 rotate-[-4deg] group-hover/stack5:rotate-0"><TechIcon src="/tech/streamlit.png" label="Streamlit" subtitle="Web App Framework" whiteBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">I was awarded a <span className="font-semibold text-primary-text">distinction</span> for my final-year dissertation, which explored <span className="font-semibold text-primary-text">probabilistic bisimulation</span> and <span className="font-semibold text-primary-text">Wasserstein-based behavioural distances</span>. The project involved interpreting complex mathematical theorems and translating them into a high-performance <span className="font-semibold text-primary-text">Python</span> algorithm, leveraging <span className="font-semibold text-primary-text">SciPy</span> optimisation techniques to improve computational efficiency by <span className="font-semibold text-primary-text">60–75%</span>. I also developed both a command-line interface using <span className="font-semibold text-primary-text">Typer</span> and an interactive GUI with <span className="font-semibold text-primary-text">Streamlit</span> to make the system more accessible for simulation and analysis. To ensure reliability and correctness, I designed a comprehensive <span className="font-semibold text-primary-text">Pytest</span> testing suite with unit and integration tests, achieving over <span className="font-semibold text-primary-text">90% code coverage</span> while maintaining algorithmic accuracy and UI stability.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-116 rounded-2xl  overflow-hidden">
            <img loading="lazy" src="/logos/elevatorpitch.webp" alt="Elevator Pitch" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://github.com/bashirbobboi/elevator-pitch" target="_blank" rel="noopener noreferrer" className="group/card flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Elevator Pitch</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card:border-black group-hover/card:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack4">
                  <div className="transition-all duration-300 z-70 rotate-[-6deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/mongodb.png" label="MongoDB" subtitle="Database" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-60 rotate-[-3deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/express.png" label="Express JS" subtitle="Web Framework" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-50 rotate-[2deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/reactnative.png" label="React" subtitle="JavaScript Library" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-40 rotate-[5deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/nodejs.png" label="Node JS" subtitle="JavaScript Runtime" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-30 rotate-[-4deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/cloudinary.png" label="Cloudinary" subtitle="Media Platform" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-20 rotate-[3deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/github.webp" label="GitHub" subtitle="Version Control" whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack4:ml-2 z-10 rotate-[-5deg] group-hover/stack4:rotate-0"><TechIcon src="/tech/vercel.jpg" label="Vercel" subtitle="Hosting Platform" /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base"><span className="font-semibold text-primary-text">Elevator Pitch</span> is an open-source <span className="font-semibold text-primary-text">video CV platform</span> used by <span className="font-semibold text-primary-text">40+ users</span>, enabling candidates to embed <span className="font-semibold text-primary-text">90-second pitch videos</span> directly into job applications and personal CVs. Built using the <span className="font-semibold text-primary-text">MERN stack</span> with <span className="font-semibold text-primary-text">Cloudinary</span>-based media storage, supporting seamless video upload, management, and delivery.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-120 rounded-2xl border border-zinc-200 overflow-hidden">
            <LazyVideo src="/projects/binaniair.mp4" poster="/projects/binaniair-poster.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://binaniair.com" target="_blank" rel="noopener noreferrer" className="group/card7 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Binani Air</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card7:border-black group-hover/card7:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack7">
                  <div className="transition-all duration-300 z-40 rotate-[-6deg] group-hover/stack7:rotate-0"><TechIcon src="/tech/javascript.png" label="JavaScript" subtitle="Programming Language" bg="bg-[#fed703]" contain /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack7:ml-2 z-30 rotate-[-3deg] group-hover/stack7:rotate-0"><TechIcon src="/tech/sqlite.png" label="SQLite" subtitle="Database" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack7:ml-2 z-20 rotate-[3deg] group-hover/stack7:rotate-0"><TechIcon src="/tech/trello.png" label="Trello" subtitle="Project Management" bg="bg-[#1e88e5]" contain /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack7:ml-2 z-10 rotate-[5deg] group-hover/stack7:rotate-0"><TechIcon src="/tech/github.webp" label="GitHub" subtitle="Version Control" whiteBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">Developed the website for <span className="font-semibold text-primary-text">Binani Air</span>, a private jet chartering company, as part of my internship, building a booking-focused platform that now serves over <span className="font-semibold text-primary-text">15,000 weekly visitors</span>. Built the application using <span className="font-semibold text-primary-text">JavaScript</span> with an <span className="font-semibold text-primary-text">SQLite</span>-backed backend, while collaborating closely with non-technical stakeholders to translate business requirements into an intuitive customer experience. I also used <span className="font-semibold text-primary-text">Trello</span> for task tracking and project coordination, helping manage feature delivery and communication throughout development.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
            <img loading="lazy" src="/logos/premierleague.webp" alt="Machine Learning Premier League Predictor" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://github.com/bashirbobboi/predictor" target="_blank" rel="noopener noreferrer" className="group/card8 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Machine Learning Premier League Predictor</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card8:border-black group-hover/card8:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack8">
                  <div className="transition-all duration-300 z-40 rotate-[-6deg] group-hover/stack8:rotate-0"><TechIcon src="/tech/python.png" label="Python" subtitle="Programming Language" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack8:ml-2 z-30 rotate-[-3deg] group-hover/stack8:rotate-0"><TechIcon src="/tech/scikit-learn.svg" label="scikit-learn" subtitle="ML Library" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack8:ml-2 z-20 rotate-[3deg] group-hover/stack8:rotate-0"><TechIcon src="/tech/pandas.png" label="Pandas" subtitle="Data Analysis" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack8:ml-2 z-10 rotate-[5deg] group-hover/stack8:rotate-0"><TechIcon src="/tech/jupyter.png" label="Jupyter Notebook" subtitle="Interactive Notebook" contain whiteBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">Built an end-to-end <span className="font-semibold text-primary-text">machine learning pipeline</span> in <span className="font-semibold text-primary-text">Python</span> to predict English Premier League match outcomes, processing over a decade of historical data covering <span className="font-semibold text-primary-text">3,800+ matches</span> to train and evaluate the model. Implemented a <span className="font-semibold text-primary-text">Random Forest Classifier</span> using <span className="font-semibold text-primary-text">scikit-learn</span>, leveraging <span className="font-semibold text-primary-text">25+ engineered features</span> to classify match results, achieving a cross-validated accuracy of <span className="font-semibold text-primary-text">62%</span>. Improved predictive performance by engineering rolling-window features (5- and 10-match averages of team statistics such as goals and shots), increasing precision from <span className="font-semibold text-primary-text">47%</span> to <span className="font-semibold text-primary-text">67.5%</span>.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-116 rounded-2xl border border-zinc-200 overflow-hidden">
            <LazyVideo src="/projects/mmxxwellness.mp4" poster="/projects/mmxxwellness-poster.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://mmxxdynamics.com" target="_blank" rel="noopener noreferrer" className="group/card9 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">MMXX Dynamics Wellness</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card9:border-black group-hover/card9:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack9">
                  <div className="transition-all duration-300 z-60 rotate-[-6deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/nextjs.svg" label="Next JS" subtitle="React Framework" contain blackBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack9:ml-2 z-50 rotate-[-3deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/awscognito.jpg" label="AWS Cognito" subtitle="Authentication" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack9:ml-2 z-40 rotate-[2deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/google.png" label="Google OAuth" subtitle="Authentication" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack9:ml-2 z-30 rotate-[5deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/jira.png" label="Jira" subtitle="Project Management" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack9:ml-2 z-20 rotate-[-4deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/bitbucket.png" label="Bitbucket" subtitle="Version Control" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack9:ml-2 z-10 rotate-[3deg] group-hover/stack9:rotate-0"><TechIcon src="/tech/docker.png" label="Docker" subtitle="Containerization" contain whiteBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">Built and shipped frontend features for a wellness booking platform using <span className="font-semibold text-primary-text">Next.js</span>, contributing across the full feature lifecycle from design and implementation to deployment within a four-person <span className="font-semibold text-primary-text">Agile</span> team serving <span className="font-semibold text-primary-text">60+ active customers</span>. Implemented <span className="font-semibold text-primary-text">Google OAuth</span> authentication with <span className="font-semibold text-primary-text">AWS Cognito</span>, significantly improving account verification reliability while reducing manual onboarding issues and support intervention by an estimated <span className="font-semibold text-primary-text">70–80%</span>. Worked within bi-weekly Agile sprints, consistently managing and delivering <span className="font-semibold text-primary-text">10+ Jira tickets</span> per sprint in collaboration with designers and developers.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full h-64 lg:h-116 rounded-2xl border border-zinc-200 overflow-hidden">
            <LazyVideo src="/projects/wakamate.mp4" poster="/projects/wakamate-poster.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
              <a href="https://wakamate.ng" target="_blank" rel="noopener noreferrer" className="group/card10 flex items-center gap-1 no-underline">
                <h3 className="font-secondary text-primary-text text-sm lg:text-base font-semibold">Wakamate — Get vetted artisans</h3>
                <div className="w-5 h-5 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-400 group-hover/card10:border-black group-hover/card10:text-black transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-secondary text-primary-text text-sm lg:text-base font-semibold shrink-0">Built With</p>
                <div className="flex items-center group/stack10">
                  <div className="transition-all duration-300 z-70 rotate-[-6deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/googleplay.svg.png" label="Google Play Store" subtitle="App Distribution" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-60 rotate-[-3deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/appstore.svg.png" label="App Store" subtitle="App Distribution" contain bg="bg-[#207df4]" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-50 rotate-[2deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/reactnative.png" label="React Native" subtitle="Mobile Framework" contain whiteBg /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-40 rotate-[5deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/expo.jpeg" label="Expo" subtitle="Mobile Platform" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-30 rotate-[-4deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/xcode.png" label="Xcode" subtitle="iOS IDE" contain bg="bg-[#207df4]" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-20 rotate-[3deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/supabase.jpeg" label="Supabase" subtitle="Backend-as-a-Service" /></div>
                  <div className="transition-all duration-300 -ml-2 group-hover/stack10:ml-2 z-10 rotate-[-5deg] group-hover/stack10:rotate-0"><TechIcon src="/tech/nextjs.svg" label="Next JS" subtitle="React Framework" contain blackBg /></div>
                </div>
              </div>
            </div>
            <p className="font-secondary text-zinc-500 text-sm lg:text-base">Built <span className="font-semibold text-primary-text">Wakamate</span>, a mobile-first <span className="font-semibold text-primary-text">&ldquo;Uber for artisans&rdquo;</span> platform in <span className="font-semibold text-primary-text">Nigeria</span> connecting users with vetted service providers such as cleaners, plumbers, and tilers to improve access and trust in home and office services. Developed the cross-platform mobile application using <span className="font-semibold text-primary-text">React Native (Expo)</span> with <span className="font-semibold text-primary-text">Supabase</span> as the backend, implementing secure authentication flows including <span className="font-semibold text-primary-text">Google OAuth</span> and <span className="font-semibold text-primary-text">Sign in with Apple</span>, alongside SMS verification via <span className="font-semibold text-primary-text">Termii</span>. Built a <span className="font-semibold text-primary-text">Next.js</span> landing page to support product rollout and early user acquisition, with initial traction of <span className="font-semibold text-primary-text">20+ onboarded artisans</span>.</p>
          </div>
        </div>

        <p className="font-secondary text-zinc-500 text-lg lg:text-2xl text-center tracking-tight">
          More Projects on <a href="#home" className="text-blue-500 hover:text-blue-600 transition-colors">GitHub</a>
        </p>
      </div>
    </section>

    <section id="certifications" className="flex items-center px-[8%] lg:px-[18%] pt-8 pb-16 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Professional Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-2">
          <WatercolorCard>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
                <img loading="lazy" src="/logos/jpmorgan.png" alt="JP Morgan" className="h-10 object-contain object-left" />
                <ButtonWithIcon small label="View Certification" href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_6q3Di7qt6AadqzD4q_1697294986576_completion_certificate.pdf" />
              </div>
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_6q3Di7qt6AadqzD4q_1697294986576_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 no-underline">
                <h3 className="font-primary text-primary-text text-lg lg:text-xl font-bold">JP Morgan Software Engineering Professional Certificate</h3>
                <p className="font-secondary text-zinc-600 text-sm lg:text-base">This virtual experience programme explored real-world software engineering practices within financial technology, covering debugging, repository management, data visualisation, and live market data monitoring using JPMorgan Chase&apos;s Perspective library.</p>
              </a>
            </div>
          </WatercolorCard>
          <WatercolorCard>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
                <img loading="lazy" src="/tech/google.png" alt="Google" className="h-10 object-contain object-left" />
                <ButtonWithIcon small label="View Certification" href="https://coursera.org/verify/E6F9DUL2QXLG" />
              </div>
              <a href="https://coursera.org/verify/E6F9DUL2QXLG" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 no-underline">
                <h3 className="font-primary text-primary-text text-lg lg:text-xl font-bold">Google Python Professional Certificate</h3>
                <p className="font-secondary text-zinc-600 text-sm lg:text-base">Completed Google&apos;s Crash Course on Python via Coursera, covering core programming concepts including data structures, object-oriented programming, and automation scripting in Python.</p>
              </a>
            </div>
          </WatercolorCard>
        </div>
      </div>
    </section>

    <section id="skills" className="flex items-center px-[8%] lg:px-[18%] pt-8 pb-16 bg-primary-bg">
      <div className="flex flex-col gap-12 w-full">
        <h2 className="font-primary text-primary-text text-3xl lg:text-5xl font-bold">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col gap-6">
            <h3 className="font-secondary text-primary-text text-lg lg:text-xl font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-5">
              <SkillTile src="/tech/javascript.png" label="JavaScript" subtitle="Programming Language" contain bg="bg-[#fed703]" />
              <SkillTile src="/tech/typescript.png" label="TypeScript" subtitle="Programming Language" contain bg="bg-[#2f74c0]" />
              <SkillTile src="/tech/htmlcss.png" label="HTML & CSS" subtitle="Markup & Styling" contain whiteBg />
              <SkillTile src="/tech/kotlin.png" label="Kotlin" subtitle="Programming Language" contain bg="bg-white" />
              <SkillTile src="/tech/nextjs.svg" label="Next.js" subtitle="Web Framework" blackBg />
              <SkillTile src="/tech/reactnative.png" label="React Native" subtitle="Mobile Framework" contain whiteBg />
              <SkillTile src="/tech/expo.jpeg" label="Expo" subtitle="Mobile Platform" />
              <SkillTile src="/tech/streamlit.png" label="Streamlit" subtitle="Web App Framework" whiteBg />
              <SkillTile src="/tech/figma.png" label="Figma" subtitle="Design Tool" whiteBg />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-secondary text-primary-text text-lg lg:text-xl font-bold">Backend</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-5">
              <SkillTile src="/tech/python.png" label="Python" subtitle="Programming Language" contain whiteBg />
              <SkillTile src="/tech/java.png" label="Java" subtitle="Programming Language" whiteBg />
              <SkillTile src="/tech/rubyonrails.png" label="Ruby on Rails" subtitle="Web Framework" whiteBg />
              <SkillTile src="/tech/nodejs.png" label="Node.js" subtitle="JavaScript Runtime" contain whiteBg />
              <SkillTile src="/tech/express.png" label="Express" subtitle="Web Framework" contain whiteBg />
              <SkillTile src="/tech/typer.png" label="Typer" subtitle="CLI Library" blackBg />
              <SkillTile src="/tech/mongodb.png" label="MongoDB" subtitle="Database" whiteBg />
              <SkillTile src="/tech/postgres.png" label="PostgreSQL" subtitle="Database" whiteBg />
              <SkillTile src="/tech/sqlite.png" label="SQLite" subtitle="Database" whiteBg />
              <SkillTile src="/tech/supabase.jpeg" label="Supabase" subtitle="Backend-as-a-Service" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-secondary text-primary-text text-lg lg:text-xl font-bold">Cloud &amp; DevOps</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-5">
              <SkillTile src="/tech/s3.png" label="AWS S3" subtitle="Cloud Storage" whiteBg />
              <SkillTile src="/tech/awscognito.jpg" label="Cognito" subtitle="Authentication Service" />
              <SkillTile src="/tech/docker.png" label="Docker" subtitle="Containerisation" whiteBg />
              <SkillTile src="/tech/vercel.jpg" label="Vercel" subtitle="Hosting Platform" />
              <SkillTile src="/tech/cloudinary.png" label="Cloudinary" subtitle="Media Platform" whiteBg />
              <SkillTile src="/tech/resend.png" label="Resend" subtitle="Email API" blackBg />
              <SkillTile src="/tech/google.png" label="Google OAuth" subtitle="Authentication" whiteBg />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-secondary text-primary-text text-lg lg:text-xl font-bold">Data &amp; Tools</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-5">
              <SkillTile src="/tech/pytest.png" label="Pytest" subtitle="Testing Framework" contain whiteBg />
              <SkillTile src="/tech/jupyter.png" label="Jupyter" subtitle="Notebook Environment" whiteBg />
              <SkillTile src="/tech/numpy.svg" label="NumPy" subtitle="Numerical Library" whiteBg />
              <SkillTile src="/tech/pandas.png" label="Pandas" subtitle="Data Analysis Library" />
              <SkillTile src="/tech/scikit-learn.svg" label="scikit-learn" subtitle="Machine Learning Library" whiteBg />
              <SkillTile src="/tech/scipy.svg" label="SciPy" subtitle="Scientific Library" whiteBg />
              <SkillTile src="/tech/github.webp" label="GitHub" subtitle="Version Control" whiteBg />
              <SkillTile src="/tech/bitbucket.png" label="Bitbucket" subtitle="Version Control" whiteBg />
              <SkillTile src="/tech/xcode.png" label="Xcode" subtitle="iOS IDE" bg="bg-[#207df4]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="flex flex-col items-center gap-3 px-[8%] lg:px-[18%] pt-8 pb-12 bg-primary-bg">
      <p className="font-secondary text-primary-text text-base lg:text-lg">
        Want to say hi? <a href="mailto:bashirbobboi@gmail.com" className="text-blue-500 hover:text-blue-600 transition-colors">Contact Me</a>
      </p>
      <p className="font-secondary text-zinc-500 text-xs lg:text-sm">
        © {new Date().getFullYear()} Mohammed Bobboi
      </p>
    </footer>
    </>
  );
}
