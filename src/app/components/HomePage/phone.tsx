import Image from "next/image";
import Button from "@/app/components/HomePage/Buttons";

interface PhoneProps {
    loading: boolean;
    intro: string;
    button: string;
}

export default function PhoneHome({ loading, intro, button}: PhoneProps) {
    return (
        <div className="mockup-phone shadow-2xl">
            <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display bg-base-300 grid place-content-center">
                {loading ? (
                    <span className="loading loading-ring loading-xl"></span>
                ) : 
                <div className="bg-base-100 shadow-xl p-8 max-w-lg w-full text-center">
                    <div className="window-content">
                        <Image
                            src="/profile.png"
                            alt="Profile picture"
                            width={200}
                            height={200}
                            className="mx-auto rounded-full mb-4"
                        />
                        <h1 className="text-3xl font-bold mb-2 underline">Welcome to Eric's Portfolio</h1>
                    </div>
                    <p className="intro text-l text-base-content mb-6 mt-4">
                        {intro}
                    </p>
                    <div className="flex justify-center gap-2 m-8">
                        <Button button={button} ref="https://www.linkedin.com/in/ericguo1230/" content="LinkedIn" />
                        <Button button={button} ref="https://github.com/ericguo1230" content="GitHub" />
                        <Button button={button} ref="/projects" content="Resume" />
                    </div>
                </div>}
            </div>
        </div>
    );
}