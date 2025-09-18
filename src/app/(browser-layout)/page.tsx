'use client';
import {useEffect} from "react";
import PhoneHome from "@/app/components/HomePage/phone";
import WindowHome from "@/app/components/HomePage/window";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Flip from "gsap/Flip"
import { usePageContext } from "@/app/contexts/PageInfoContext";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(Flip);

export interface HomeProps {
    loading: boolean;
    intro: string;
    button: string;
    title: string;
}

const intro = "Hi, I'm Eric! I'm studying Statistics & Computer Science with 16+ months of experience in DevOps, Data and Software Engineering. I’m passionate about Machine Learning and Cloud Infrastucture. Feel free to look around!";
const button = "my-button";
const title = "Welcome to Eric's Portfolio";

export default function Home() {
  const { loading } = usePageContext()

  useEffect(() => {
        if (!loading) {
          const tl = gsap.timeline();
          let split = SplitText.create(".intro", { type: "words", mask:"words" });
    
          tl.fromTo(".window-content", {opacity: 0}, {opacity: 1, duration: 2})
            .from(split.words, {
              duration: 1,
              opacity: 0,
              y: 20,
              stagger: 0.1,
              ease: "power2.out",
            }, "<2")
            .fromTo(".my-button", {opacity: 0}, {
              scale: 1,
              opacity: 1,
              duration: 1,
              stagger: 1,
              ease: "back.out(1.7)",
            }, "<1.5");
        }
    }, [loading]);

  return (
    <>
      {/* Phone version - visible on small screens only */}
      <div className="md:hidden">
        <PhoneHome loading={loading} intro={intro} button={button} title={title}/>
      </div>

      {/* Window version - visible on medium screens and above */}
      <div className="hidden md:block">
        <WindowHome loading={loading} intro={intro} button={button} title={title} />
      </div>
    </>
  );
}