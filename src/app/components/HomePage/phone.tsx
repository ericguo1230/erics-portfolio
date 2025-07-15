import Image from "next/image";

interface PhoneProps {
    loading: boolean;
    intro: string;
}

export default function PhoneHome({ loading, intro }: PhoneProps) {
    return (
        <div className="mockup-phone shadow-2xl">
            <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display bg-base-300 grid place-content-center">
                {loading ? (
                    <span className="loading loading-ring loading-xl"></span>
                ) : <div className="bg-base-100 shadow-xl p-8 max-w-lg w-full text-center">
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
                    href="https://www.linkedin.com/in/ericguo1230/"
                    className="btn btn-primary"
                    >
                    View My LinkedIn
                    </a>
                </div>}
            </div>
        </div>
    );
}