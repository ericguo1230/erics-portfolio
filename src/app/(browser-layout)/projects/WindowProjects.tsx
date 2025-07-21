'use client';
import { PageProps } from "@/app/(browser-layout)/projects/page";
import projects from '@/app/(browser-layout)/projects/content/content'
import { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function WindowProject({ loading }: PageProps){
    const [activeButton, setActiveButton] = useState(0);

    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        if (btnRef.current) {
            gsap.to(btnRef.current, { scale: 1.1, duration: 0.2 });
        }
    };

    const handleMouseLeave = () => {
        if (btnRef.current) {
            gsap.to(btnRef.current, { scale: 1, duration: 0.2 });
        }
    };

    return(
          <>
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : 
            <>
              <div className="carousel w-full">
                {projects.map((project, idx) => (
                  <div key={idx} id={`${idx}`} className="carousel-item w-full">
                    <div className="card card-side bg-base-100">
                      <figure className="w-3/5">
                        <img
                          src={project.img ? project.img : '/globe.svg'}
                          alt={project.name}
                          className="w-full h-full object-contain"
                        />
                      </figure>
                      <div className="card-body w-2/5 flex flex-col h-full">
                        <h1 className="text-center card-title text-3xl underline font-bold mb-4 w-full ">{project.name}</h1>
                        <div className="text-start h-full">
                          {project.summary.map((detail, detailIdx) => (
                            <p key={detailIdx} className="mb-2">
                              • {detail}
                            </p>
                          ))}
                        </div>
                        <div className="card-actions justify-end">
                          <a 
                            href={`${project.link ? project.link : 'https://google.com'}`} 
                            target="_blank"
                            className="btn btn-primary"
                            ref={btnRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            Go to Project!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                {projects.map((projects, idx) => (
                  <a 
                    key={idx} 
                    href={`#${idx}`} 
                    onClick={() => setActiveButton(idx)} 
                    className={`btn btn-xs ${activeButton === idx ? 'bg-success text-success-content' : ''}`}
                  >
                    {idx + 1}
                  </a>
                ))}
              </div>
            </>
            }
        </>
    );
}