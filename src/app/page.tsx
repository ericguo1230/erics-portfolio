import Image from "next/image";

const intro = "Hi, I'm Eric! I'm a software engineer with a passion for Machine Learning and Data Engineering!";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      
      {/* Phone version - visible on small screens only */}
      <div className="md:hidden">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display bg-info grid place-content-center">
            <div className="bg-base-100 shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
              <Image
                src="/profile.png"
                alt="Profile picture"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4"
              />
              <h1 className="text-3xl font-bold mb-2">Welcome to Eric's Portfolio</h1>
              <p className="text-l text-base-content mb-6">
                {intro}
              </p>
              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Window version - visible on medium screens and above */}
      <div className="hidden md:block">
        <div className="mockup-browser bg-base-100 shadow-xl rounded-xl p-8 max-w-lg w-full text-center z-60">
          <div className="mockup-browser-toolbar">
            <div className="input">https://ericsportfolio.com</div>
          </div>
          <Image
            src="/profile.png"
            alt="Profile picture"
            width={240}
            height={240}
            className="mx-auto rounded-full m-4"
          />
          <h1 className="text-4xl font-bold mb-2">Welcome to Eric's Portfolio</h1>
          <p className="text-lg text-base-content mb-6">
            {intro}
          </p>
          <a
            href="#projects"
            className="btn btn-primary"
          >
            View My LinkedIn
          </a>
        </div>
      </div>

      <div>

      </div>

    </div>
  );
}