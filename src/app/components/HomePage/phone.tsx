import Image from "next/image";
import Button from "@/app/components/HomePage/Buttons";
import { HomeProps } from "@/app/(browser-layout)/page";

export default function PhoneHome({ loading, intro, button, title }: HomeProps) {
    return (
        <>
            {loading ? (
                <span className="loading loading-ring loading-xl"></span>
            ) : 
            <div className="bg-base-100 shadow-xl p-8 max-w-lg w-full text-center">
                <div className="window-content">
                    <Image
                        src="github_hs.jpg"
                        alt="Profile picture"
                        width={200}
                        height={250}
                        className="mx-auto rounded-full mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-2 underline text-success">{title}</h1>
                </div>
                <p className="intro text-base text-base-content mb-2 mt-2">
                    {intro}
                </p>
                <div className="flex flex-wrap justify-center gap-2 m-2">
                    <Button button={button} href="/contact" content="Contact Me!" internal={true}/>
                    <Button button={button} href="/resume" content="Resume" internal={true} />
                    <Button button={button} href="/fun_facts" content="Learn More!" internal={true}/>
                </div>
            </div>}
        </>
    );
}
