'use client';
import { usePageContext } from '@/app/contexts/PageInfoContext'
import WindowHomePage from '@/app/(browser-layout)/contact/WindowPage';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(SplitText);

const email = "ericc.guo@mail.utoronto.ca"

export interface ContactPageProps {
  instagramRef: React.RefObject<SVGSVGElement | null>;
  linkedinRef: React.RefObject<SVGSVGElement | null>;
  githubRef: React.RefObject<SVGSVGElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  size?: number;
  email: string;
}

export interface AnimationProps {
  triggerAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export default function ContactPage({
    triggerAnimation=true,
    onAnimationComplete
}: AnimationProps) {
    const instagramRef = useRef<SVGSVGElement>(null);
    const githubRef = useRef<SVGSVGElement>(null);
    const linkedinRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const animateLogos = () => {
        // Get all drawable elements from each logo
        const instagramDrawables = instagramRef.current?.querySelectorAll('.drawable');
        const githubDrawables = githubRef.current?.querySelectorAll('.drawable');
        const linkedinDrawables = linkedinRef.current?.querySelectorAll('.drawable');

        // Set initial state for all drawable elements
        if (instagramDrawables) gsap.set(instagramDrawables, { drawSVG: "0%" });
        if (githubDrawables) gsap.set(githubDrawables, { drawSVG: "0%" });
        if (linkedinDrawables) gsap.set(linkedinDrawables, { drawSVG: "0%" });

        // Create master timeline
        const masterTimeline = gsap.timeline({
            onComplete: onAnimationComplete
        });

        // Instagram animation
        if (instagramRef.current) {
            const instagramPaths = instagramRef.current.querySelectorAll('.drawable');
            masterTimeline
                .to(instagramPaths[0], { drawSVG: "100%", duration: 1, ease: "power2.inOut" }) // border
                .to(instagramPaths[1], { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" }, "-=0.5") // outer circle
                .to(instagramPaths[2], { drawSVG: "100%", duration: 0.6, ease: "power2.inOut" }, "-=0.4") // inner circle
                .to(instagramPaths[3], { drawSVG: "100%", duration: 0.3, ease: "power2.inOut" }, "-=0.2"); // dot
        }

        // GitHub animation
        if (githubRef.current) {
            const githubPath = githubRef.current.querySelector('.drawable');
            masterTimeline.to(githubPath, { 
                drawSVG: "100%", 
                duration: 2, 
                ease: "power2.inOut" 
            }, "-=1.5");
        }

        // LinkedIn animation
        if (linkedinRef.current) {
            const linkedinPaths = linkedinRef.current.querySelectorAll('.drawable');
            masterTimeline
                .to(linkedinPaths[0], { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" }, "-=2") // border
                .to(linkedinPaths[1], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=1") // i line
                .to(linkedinPaths[2], { drawSVG: "100%", duration: 0.3, ease: "power2.inOut" }, "-=0.75") // i dot
                .to(linkedinPaths[3], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=0.5") // n left
                .to(linkedinPaths[4], { drawSVG: "100%", duration: 0.5, ease: "power2.inOut" }, "-=0.3") // n curve
                .to(linkedinPaths[5], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=0.2"); // n right
        }
    };

    const { loading } = usePageContext();


    useEffect(() => {
        let email = SplitText.create(".contact", {type: "chars"})
        const timeline = gsap.timeline();
        timeline.fromTo(".email", {opacity: 0},
            {
            scale: 1,
            opacity: 1,
            duration: 2,
            y: -20,
            ease: "back.out(1.7)",
        })
        .from(email.chars, {
            duration: 0.5,
            opacity:0.2,
            x: 2,
            stagger: 0.01,
            ease: "power2.out",
        });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting && triggerAnimation && !loading) {
                animateLogos();
                observer.unobserve(entry.target);
            }
            });
        }, { threshold: 0.5 });
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, [loading]);

    return (
        <>
            {loading ? (
                <>
                    <span className="loading loading-spinner loading-xl md:block hidden"></span>
                    <span className="loading loading-ring loading-xl md:hidden"></span>
                </>
            )
            : (
                <>
                    <div className={`h-full hidden md:block`}>
                        <WindowHomePage instagramRef={instagramRef} githubRef={githubRef} linkedinRef={linkedinRef} containerRef={containerRef} size={60} email={email}/>
                    </div>
                </>
            )}
        </>
    );
}