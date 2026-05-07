import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-between px-[10%] bg-primary-bg">
      <div className="flex flex-col gap-4">
        <h1 className="font-primary text-primary-text">Mohammed Bobboi</h1>
        <p className="font-secondary text-primary-text">Software Engineering</p>
      </div>
      <div className="relative w-80 h-[400px] shrink-0">
        <Image
          src="/myphoto.jpeg"
          alt="My photo"
          fill
          className="object-cover"
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
          className="absolute -bottom-18 -right-26 w-80 h-80 object-cover rotate-180"
        />
      </div>
    </main>
  );
}
