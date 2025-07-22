'use client';
import experiences from '@/app/about/content/content';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { usePageContext } from '@/app/contexts/PageInfoContext';

export default function About() {
    const { path } = usePageContext();
    const [ checkedItems, setCheckedItems ] = useState<boolean[]>(
        new Array(experiences.length).fill(false)
    );

    useEffect(() => {
        gsap.fromTo(".experience-item", {opacity: 0},
            {
            scale: 1,
            opacity: 1,
            duration: 2,
            stagger: -1,
            y: -20,
            ease: "back.out(1.7)",
        });
    }, [path]);


    const handleCheckboxChange = (idx: number, isChecked: boolean) => {
        setCheckedItems(prev => {
            let newCheckedItems = [...prev];
            newCheckedItems[idx] = isChecked;
            return newCheckedItems
        });
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
                            <time className="hidden md:inline font-mono text-base-content italic md:timeline-middle timeline-start">{exp.period}</time>
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
                            tabIndex={idx}
                            className={`collapse collapse-arrow timeline-${idx % 2 === 0 ? 'start' : 'end'} bg-base-100 lg:!w-150 md:mt-15 ${idx % 2 === 0 ? (idx === 4 ? 'md:-mr-0' : 'md:-mr-10') : 'md:-ml-10'}`}
                        >
                            <input 
                                type="checkbox" 
                                className="peer" 
                                checked={checkedItems[idx]}
                                onChange={(e) => handleCheckboxChange(idx, e.target.checked)}
                            />
                            <div 
                                className={`collapse-title font-mono bg-base-100 text-base-content peer-checked:bg-success peer-checked:text-success-content text-center flex flex-col items-center`}
                            >
                                <time className="md:hidden italic md:timeline-middle timeline-start">{exp.period}</time>
                                <img
                                    className="md:w-80 md:h-80 w-40 h-40 object-contain items-center"
                                    src = {exp.logo}
                                />
                                <h1 className="font-bold text-2xl pt-2">{exp.company}</h1>
                                <div className="text-m font-semibold">{exp.role}</div>
                                <div className="text-sm">{exp.summary}</div>
                            </div>
                            
                            <div className='collapse-content text-sm pt-2 font-mono bg-base-100'>
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