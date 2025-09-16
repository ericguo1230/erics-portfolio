import { InstagramLogo, GitHubLogo, LinkedInLogo } from "@/app/components/contact/ContactLogos";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// Note: DrawSVGPlugin requires GSAP membership
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const size = 60;

interface WindowHomeProps {
  triggerAnimation?: boolean;
  onAnimationComplete?: () => void;
}

const WindowHomePage: React.FC<WindowHomeProps> = ({ 
  triggerAnimation = true,
  onAnimationComplete 
}) => {
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
        .to(linkedinPaths[0], { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" }, "-=1") // border
        .to(linkedinPaths[1], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=0.2") // i line
        .to(linkedinPaths[2], { drawSVG: "100%", duration: 0.3, ease: "power2.inOut" }, "-=0.1") // i dot
        .to(linkedinPaths[3], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=0.2") // n left
        .to(linkedinPaths[4], { drawSVG: "100%", duration: 0.5, ease: "power2.inOut" }, "-=0.3") // n curve
        .to(linkedinPaths[5], { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, "-=0.2"); // n right
    }
  };

  useEffect(() => {
    if (triggerAnimation) {
      animateLogos();
    }
  }, [triggerAnimation]);

  // Optional: Trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && triggerAnimation) {
            animateLogos();
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-full w-full" ref={containerRef}>
      <div className="flex-grow justify-start items-start w-full p-6 bg-info md:p-10 rounded-lg shadow-lg hover:bg-success transition-colors duration-300 text-info-content hover:text-success-content">
        <h1 className="text-5xl font-bold mb-6">
          <a 
            href="mailto:ericc.guo@mail.utoronto.ca"
            className="hover:text-neutral-content transition-colors cursor-pointer"
          >
            ericc.guo@mail.utoronto.ca
          </a>
        </h1>
      </div>
      <div className="w-1/2 mx-auto mt-30">
        <div className="flex justify-between items-center">
          <InstagramLogo ref={instagramRef} size={size} className="drawable" />
          <GitHubLogo ref={githubRef} size={size} />
          <LinkedInLogo ref={linkedinRef} size={size} />
        </div>
      </div>
    </div>
  );
};

export default WindowHomePage;