'use client';
import {useEffect, useRef, useState} from "react";
import PhoneHome from "@/app/components/HomePage/phone";
import WindowHome from "@/app/components/HomePage/window";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Flip from "gsap/Flip"
import { usePageContext } from "@/app/contexts/PageInfoContext";
import { useSessionContext } from "@/app/contexts/SessionContext";

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
  const { hasVisitedHome, isSessionReady, markVisited } = useSessionContext();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [hasResolvedVisit, setHasResolvedVisit] = useState(false);
  const phoneHomeRef = useRef<HTMLDivElement>(null);
  const windowHomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      if (!isSessionReady || hasResolvedVisit) return;

      if (!hasVisitedHome) {
          setIsFirstVisit(true);
          markVisited('home');
      }else{
          setIsFirstVisit(false);
      }

      setHasResolvedVisit(true);
  }, [hasResolvedVisit, hasVisitedHome, isSessionReady, markVisited]);

  useEffect(() => {
        if (!loading && isFirstVisit) {
          const isDesktop = window.matchMedia("(min-width: 768px)").matches;
          const root = isDesktop ? windowHomeRef.current : phoneHomeRef.current;
          const windowContent = root?.querySelector(".window-content");
          const introElement = root?.querySelector(".intro");
          const buttons = root?.querySelectorAll(".my-button");

          if (!root || !windowContent || !introElement || !buttons?.length) return;

          const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            let split = SplitText.create(introElement, { type: "words", mask:"words" });
    
            tl.fromTo(windowContent, {opacity: 0}, {opacity: 1, duration: 1.7})
              .from(split.words, {
                duration: 0.9,
                opacity: 0,
                y: 20,
                stagger: 0.07,
                ease: "power2.out",
              }, "-=0.1")
              .fromTo(buttons, {opacity: 0, scale: 0.95}, {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                stagger: 0.35,
                ease: "back.out(1.7)",
              }, "-=0.1");
          }, root);

          return () => ctx.revert();
        }
  }, [loading, isFirstVisit]);

  const showInitialLoader = !hasResolvedVisit || (loading && isFirstVisit);

  return (
    <>
      {/* Phone version - visible on small screens only */}
      <div className="md:hidden" ref={phoneHomeRef}>
        <PhoneHome loading={showInitialLoader} intro={intro} button={button} title={title}/>
      </div>

      {/* Window version - visible on medium screens and above */}
      <div className="hidden md:block" ref={windowHomeRef}>
        <WindowHome loading={showInitialLoader} intro={intro} button={button} title={title} />
      </div>
    </>
  );
}
