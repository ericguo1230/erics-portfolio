import Image from "next/image";
import Button from "@/app/components/HomePage/Buttons";
import { HomeProps } from "@/app/(browser-layout)/page";


export default function WindowHome({ loading, intro, button, title }: HomeProps) {

    return (
      <>
        {loading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <div>
            <div className="window-content">
              <Image
                src="profile.png"
                alt="Profile picture"
                width={240}
                height={240}
                className="mx-auto rounded-full m-4"
              />
              <h1 className="text-4xl font-bold mb-2 text-success underline">{title}</h1>
            </div>
            <p className="intro text-lg text-base-content mb-6 mt-4">
              {intro}
            </p>
            <div className="flex justify-center gap-6 m-8">
              <Button button={button} ref="/contact" content="Contact Me!" isNew={true} internal={true} />
              <Button button={button} ref="/resume" content="Resume" isNew={true} internal={true}/>
              <Button button={button} ref="/fun_facts" content="Learn More!" isNew={true} internal={true}/>
            </div>
          </div>
          )}
        </>
    );
}