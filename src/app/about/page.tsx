'use client';
import { useState } from 'react';
import experiences from '@/app/about/content/content';

export default function About() {
    const [expandedItems, setExpandedItems] = useState(new Set());

    const toggleExpanded = (idx: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(idx)) {
            newExpanded.delete(idx);
        } else {
            newExpanded.add(idx);
        }
        setExpandedItems(newExpanded);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {experiences.map((exp, idx) => (
                    <li 
                        key={idx} 
                        className={`timeline-item ${exp.timeline} cursor-pointer rounded-lg p-2 transition-colors`}
                    
                    >
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
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
                            className={`collapse collapse-arrow timeline-${idx % 2 === 0 ? 'start' : 'end'} md:text-${idx % 2 === 0 ? 'end' : 'start'} bg-base-100 w-60 lg:w-120` }
                        >
                            <input type="checkbox" className="peer" />
                            <div 
                                className="collapse-title bg-base-100 text-primary-100 peer-checked:bg-base-300 peer-checked:text-accent"
                            >
                                <time className="font-mono italic">{exp.period}</time>
                                <div className="font-black text-lg">{exp.company}</div>
                                <div className="text-m font-black">{exp.role}</div>{exp.summary}
                            </div>
                            
                            <div className="collapse-content text-sm mt-2 font-mono">
                                {exp.details.map((detail, detailIdx) => (
                                    <p key={detailIdx} className={`inline-flex mb-1 ${detailIdx % 2 === 0 ? 'text-accent' : 'text-primary-100'}`}>
                                        <span className="text-warning text-xl mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                                <circle cx="6" cy="14" r="2" fill="currentColor"/>
                                                <circle cx="14" cy="6" r="2" fill="currentColor"/>
                                                <circle cx="14" cy="14" r="2" fill="currentColor"/>
                                                <path d="M 6 12 Q 10 8 12 6 M 12 8 L 14 12" stroke="currentColor" stroke-width="2" fill="none"/>
                                            </svg>
                                        </span> {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    )
}