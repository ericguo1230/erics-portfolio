import Image from "next/image";
import Button from "@/app/components/HomePage/Buttons";

interface WindowProps {
    loading: boolean;
    intro: string;
    button: string;
}


export default function WindowHome({ loading, intro, button }: WindowProps) {

    return (
        <div className="mockup-browser bg-base-100 shadow-xl rounded-xl p-8 lg:w-240 md:w-full min-h-160 h-full text-center z-60 flex flex-col">
          
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
                <div className="window-content">
                  <Image
                    src="/profile.png"
                    alt="Profile picture"
                    width={240}
                    height={240}
                    className="mx-auto rounded-full m-4"
                  />
                  <h1 className="text-4xl font-bold mb-2 text-base-content underline">Welcome to Eric's Portfolio</h1>
                </div>
                <p className="intro text-lg text-base-content mb-6 mt-4">
                  {intro}
                </p>
                <div className="flex justify-center gap-2 m-8">
                  <Button button={button} ref="https://www.linkedin.com/in/ericguo1230/" content="LinkedIn" />
                  <Button button={button} ref="https://github.com/ericguo1230" content="GitHub" />
                  <Button button={button} ref="/projects" content="Resume" />
                </div>
              </div>
              )}
            </div>
        </div>
    );
}