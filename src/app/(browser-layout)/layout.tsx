'use client';
import React, { useEffect, useRef } from "react";
import { usePageContext } from "@/app/contexts/PageInfoContext";
import { homePath } from "@/app/global/variables";
import Dock from '@/app/(browser-layout)/components/dock'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


export default function BrowserLayout({
    children,
}: {
    children: React.ReactNode;
}){

    const { path } = usePageContext();
    const browserDesktop = useRef<HTMLDivElement>(null);
    const browserMobile = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to check if element is visible (not hidden by CSS)
        const isElementVisible = (element: HTMLElement | null) => {
            if (!element) return false;
            const style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden';
        };

        // Determine which element to scroll to
        let targetElement = null;
        
        if (isElementVisible(browserDesktop.current)) {
            targetElement = browserDesktop.current;
        } else if (isElementVisible(browserMobile.current)) {
            targetElement = browserMobile.current;
        }

        if (targetElement) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {y: targetElement, offsetY: -50}, // Add some breathing room
                ease: "power2.inOut",
            });
        }
    }, [path]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 font-mono">
            <div className="mockup-browser bg-base-100 shadow-xl rounded-xl p-8 lg:w-280 md:w-full min-h-200 h-full text-center z-60 md:flex flex-col hidden">
                {/* Toolbar stays at the top */}
                <div className="mockup-browser-toolbar">
                    <div className="input">{homePath + path}</div>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center bg-base-100 mt-4" ref={browserDesktop}>
                    {children}
                </div>
            </div>

            <div className="md:hidden mockup-phone shadow-2xl relative z-20">
                <div className="mockup-phone-camera"></div>
                <div className="mockup-phone-display bg-base-300 flex flex-col">
                    <div className="flex-1 grid place-content-center w-full h-full" ref={browserMobile}>
                        {children}
                    </div>
                    <div className="z-10">
                        <Dock />
                    </div>
                </div>
            </div>
        </div>
    )
}