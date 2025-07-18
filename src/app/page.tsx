'use client';
import {useEffect, useState} from "react";
import PhoneHome from "@/app/components/HomePage/phone";
import WindowHome from "@/app/components/HomePage/window";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Flip from "gsap/Flip"
import { usePageContext } from "./contexts/PageInfoContext";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(Flip);

export interface HomeProps {
    loading: boolean;
    intro: string;
    button: string;
    title: string;
}

const intro = "Hi, I'm Eric! I'm a software engineer with a passion for Machine Learning and Software and Data Engineering! Connect with me on LinkedIn or check out my projects below!";
const button = "my-button";
const title = "Welcome to Eric's Portfolio";

export default function Home() {
  const { loading } = usePageContext()

  useEffect(() => {
        console.log(loading)
        if (!loading) {
          gsap.fromTo(".window-content", {opacity: 0}, {opacity: 1, duration: 1});
          let split = SplitText.create(".intro", { type: "words", mask:"words" });
          gsap.from(split.words, {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "power2.out",
          })
          gsap.from(".my-button", {
            scale: 1,
            opacity: 0,
            duration: 1.5,
            stagger: 1,
            ease: "back.out(1.7)",
            delay: 0.5
          });
        }
    }, [loading]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 font-mono">
      {/* Phone version - visible on small screens only */}
      <div className="md:hidden">
        <PhoneHome loading={loading} intro={intro} button={button} title={title}/>
      </div>

      {/* Window version - visible on medium screens and above */}
      <div className="hidden md:block">
        <WindowHome loading={loading} intro={intro} button={button} title={title} />
      </div>
    </div>
  );
}