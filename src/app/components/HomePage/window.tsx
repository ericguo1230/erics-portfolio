import Image from "next/image";

interface WindowProps {
    loading: boolean;
    intro: string;
}

export default function WindowHome({ loading, intro }: WindowProps) {
    return (
        <div className="mockup-browser bg-base-100 shadow-xl rounded-xl p-8 lg:w-240 md:w-160 h-140 text-center z-60 flex flex-col">
          
          {/* Toolbar stays at the top */}
          <div className="mockup-browser-toolbar">
            <div className="input">https://ericsportfolio.com</div>
          </div>
          
          {/* Content area */}
            <div className="flex-grow flex flex-col justify-center items-center">
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              <div>
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
                  href="https://www.linkedin.com/in/ericguo1230/"
                  className="btn btn-primary"
                >
                  View My LinkedIn
                </a>
              </div>
              )}
            </div>
        </div>
    );
}