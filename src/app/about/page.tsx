'use client';
import experiences from '@/app/about/content/content';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { usePageContext } from '@/app/contexts/PageInfoContext';
import { useSessionContext } from '@/app/contexts/SessionContext';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function About() {
    const { path } = usePageContext();
    const [ checkedItems, setCheckedItems ] = useState<boolean[]>(
        new Array(experiences.length).fill(false)
    );
    const listRef = useRef<HTMLUListElement>(null);
    const [ activeIdx, setActiveIdx ] = useState<number>(0);
    const { hasVisitedAbout } = useSessionContext();
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!hasVisitedAbout) {
            sessionStorage.setItem("hasVisitedAbout", "true");
            setIsFirstVisit(true);
        }else{
            setIsFirstVisit(false);
        }

    }, []);

    useEffect(() => {
        if (!hasVisitedAbout && isFirstVisit) {
            gsap.fromTo(".experience-item", {opacity: 0},
                {
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: -0.75,
                y: -20,
                ease: "back.out(1.7)",
            });
            window.scrollTo(0, document.body.scrollHeight);
            gsap.to(window, {
                scrollTo: {y: 0},
                duration: 6,
                ease: "power2.inOut",
            })
        }
    }, [path]);


    const handleToggle = (idx: number, isChecked: boolean) => {
        setCheckedItems(prev => {
            let newCheckedItems = [...prev];
            newCheckedItems[idx] = isChecked;
            return newCheckedItems
        });
        const element = document.querySelectorAll('.experience-item')[idx];
        if (checkedItems[idx] === false) {
            setActiveIdx(idx);
            gsap.to(window, {
                duration: 1,
                scrollTo: {y: element, offsetY: 0},
                ease: "power2.inOut",
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-y-auto" ref={listRef} tabIndex={0}>
                {experiences.map((exp, idx) => (
                    <li 
                        key={idx} 
                        className={`timeline-item cursor-pointer rounded-lg p-2 transition-colors experience-item`}
                    >
                        <div className="timeline-middle md:flex flex-col items-center inline-flex">
                            <time className="hidden md:inline font-mono text-base-content italic md:timeline-middle timeline-start w-50 text-center">{exp.period}</time>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`h-5 w-5 ${checkedItems[idx] ? 'text-success' : 'text-neutral'}`}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div 
                            tabIndex={0}
                            className={`collapse shadow-lg border timeline-${idx % 2 === 0 ? 'start' : 'end'} bg-base-100 lg:!w-150 md:mt-15 ${idx % 2 === 0 ? 'md:-mr-10' : 'md:-ml-10'}`}
                        >
                            <input 
                                type="checkbox" 
                                className="collapse-toggle sr-only" 
                                checked={checkedItems[idx]}
                                onChange={() => {}}
                                aria-hidden="true"
                            />
                            <div 
                                className={`collapse-title font-mono bg-base-100 text-base-content peer-checked:bg-success peer-checked:text-success-content text-center flex flex-col items-center cursor-pointer touch-manipulation ${checkedItems[idx] ? 'bg-success text-success-content' : ''}`}
                                onClick={() => handleToggle(idx, !checkedItems[idx])}
                                tabIndex={0}
                                role="button"
                                aria-expanded={checkedItems[idx]}
                                aria-controls={`collapse-content-${idx}`}
                            >
                                <time className="md:hidden italic md:timeline-middle timeline-start">{exp.period}</time>
                                <img
                                    className="md:w-40 md:h-40 w-30 h-30 object-contain items-center"
                                    src = {exp.logo}
                                />
                                <h1 className="font-bold text-2xl pt-2">{exp.company}</h1>
                                <div className="text-m font-semibold">{exp.role}</div>
                                {!checkedItems[idx] && <div className="text-sm peer-checketext-warning">{exp.summary}</div>}
                            </div>
                            
                            <div className='collapse-content text-sm font-mono peer-checked:bg-base-100 mt-2'>
                                {exp.details.map((detail, detailIdx) => (
                                    <p key={detailIdx} className="inline-flex mb-1 text-base-content">
                                        <span className="text-success text-m mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                                <circle cx="6" cy="14" r="2" fill="currentColor"/>
                                                <circle cx="14" cy="6" r="2" fill="currentColor"/>
                                                <circle cx="14" cy="14" r="2" fill="currentColor"/>
                                                <path d="M 6 12 Q 10 8 12 6 M 12 8 L 14 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                                            </svg>
                                        </span> {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <hr className={` ${checkedItems[idx] ? 'bg-success' : 'bg-base-300'}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
