import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-primary-bg">
      <Image
        src="/myphoto.png"
        alt="My photo"
        width={400}
        height={400}
        priority
      />
      <h1 className="font-primary text-primary-text">Mohammed Bobboi</h1>
      <p className="font-secondary text-primary-text">Software Engineering</p>
    </main>
  );
}
