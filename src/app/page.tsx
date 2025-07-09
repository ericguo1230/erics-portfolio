import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="bg-base-100 shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={120}
          height={120}
          className="mx-auto rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Welcome to Eric's Portfolio</h1>
        <p className="text-lg text-base-content mb-6">
          Hi, I'm Eric! I'm a software engineer with a passion for Machine Learning and Data Engineering!
        </p>
        <a
          href="#projects"
          className="btn btn-primary"
        >
          View My LinkedIn
        </a>
      </div>
    </div>
  );
}
