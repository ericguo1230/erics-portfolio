'use client';
import experiences from '@/app/about/content/content';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function About() {

    useEffect(() => {
        // Initial animation on mount
        gsap.from(".experience-item", {
            scale: 1,
            opacity: 0,
            duration: 2,
            stagger: -1,
            y: 20,
            ease: "back.out(1.7)",
            delay: 1
        });
        
    }, []);

    const seededRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    const getSeededRandomBetween = (min: number, max: number, seed: number) => {
        return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {experiences.map((exp, idx) => (
                    <li 
                        key={idx} 
                        className={`timeline-item cursor-pointer rounded-lg p-2 transition-colors experience-item`}
                    
                    >
                        <div className="timeline-middle md:flex flex-col items-center inline-flex">
                            <time className="hidden md:inline font-mono italic md:timeline-middle timeline-start">{exp.period}</time>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 text-success"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div 
                            tabIndex={idx}
                            className={`collapse collapse-arrow timeline-${idx % 2 === 0 ? 'start' : 'end'} bg-base-100 w-60 md:mt-15 ${idx % 2 === 0 ? (idx === 4 ? 'md:-mr-0' : 'md:-mr-10') : 'md:-ml-10'}`}
                            style={{ 
                                '--random-width': `${getSeededRandomBetween(40, 80, idx + 3)}%`
                            } as React.CSSProperties}
                        >
                            <input type="checkbox" className="peer" />
                            <div 
                                className={`collapse-title bg-base-100 text-primary-100 peer-checked:bg-success peer-checked:text-success-content ${idx % 2 === 0 ? 'md:text-end' : 'md:text-start'}`}
                            >
                                <time className="md:hidden font-mono italic md:timeline-middle timeline-start">{exp.period}</time>
                                <div className={`font-mono font-bold text-lg flex items-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <img src={exp.logo} className="mr-2 h-5 w-7" />
                                    {exp.company}
                                </div>
                                <div className="text-m font-mono font-semibold">{exp.role}</div>
                                <div className="text-sm font-mono">{exp.summary}</div>
                            </div>
                            
                            <div className='collapse-content text-sm pt-2 font-mono bg-info'>
                                {exp.details.map((detail, detailIdx) => (
                                    <p key={detailIdx} className="inline-flex mb-1 text-info-content">
                                        <span className="text-secondary text-m mr-2">
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
                        <hr className="bg-secondary" />
                    </li>
                ))}
            </ul>
        </div>
    )
}