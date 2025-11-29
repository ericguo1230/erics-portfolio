'use client';
import { PageProps } from "@/app/(browser-layout)/projects/page";
import projects, {language_to_color} from '@/app/(browser-layout)/projects/content/content'
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function WindowProject({ loading }: PageProps){
    const [activeButton, setActiveButton] = useState(0);

    // Create refs for each project button and navigation buttons
    const projectBtnRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const navBtnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // Initialize refs arrays
    useEffect(() => {
        projectBtnRefs.current = projectBtnRefs.current.slice(0, projects.length);
        navBtnRefs.current = navBtnRefs.current.slice(0, projects.length);
    }, []);

    const handleProjectBtnMouseEnter = (index: number) => {
        if (projectBtnRefs.current[index]) {
            gsap.to(projectBtnRefs.current[index], { scale: 1.1, duration: 0.2 });
        }
    };

    const handleProjectBtnMouseLeave = (index: number) => {
        if (projectBtnRefs.current[index]) {
            gsap.to(projectBtnRefs.current[index], { scale: 1, duration: 0.2 });
        }
    };

    const handleNavBtnMouseEnter = (index: number) => {
        if (navBtnRefs.current[index]) {
            gsap.to(navBtnRefs.current[index], { scale: 1.05, duration: 0.2 });
        }
    };

    const handleNavBtnMouseLeave = (index: number) => {
        if (navBtnRefs.current[index]) {
            gsap.to(navBtnRefs.current[index], { scale: 1, duration: 0.2 });
        }
    };

    return(
          <>
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : 
            <>
              <div className="carousel md:w-[90%]">
                {projects.map((project, idx) => (
                  <div key={idx} id={`${idx}`} className="carousel-item w-full">
                    <div className="card card-side bg-base-100">
                      <figure className="w-3/5">
                        <img
                          src={project.img ? project.img : '/globe.svg'}
                          alt={project.name}
                          className="w-full h-full object-contain bg-base-300"
                        />
                      </figure>
                      <div className="card-body w-2/5 flex flex-col h-full bg-base-200">
                        <h1 className="text-center card-title text-3xl underline font-bold mb-4 w-full ">{project.name}</h1>
                        <h2 className="text-start italic text-accent">{project.date}</h2>
                        <div className="text-start h-full">
                          {project.summary.map((detail, detailIdx) => (
                            <p key={detailIdx} className="mb-2">
                              <span className ="text-success">•</span> {detail}
                            </p>
                          ))}
                        </div>
                        {project.languages && <div className="text-start text-accent text-bg-base">
                          Languages: {project.languages.map((lang, langIdx) => (
                            <div className={`badge ${language_to_color[lang.toLowerCase()] ? language_to_color[lang.toLowerCase()] : 'primary'} mr-2`} key={projects.length + langIdx}>{lang}</div>
                          ))}
                        </div>}
                        <div className="card-actions mt-2 justify-end">
                          <a 
                            href={`${project.link ? project.link : 'https://google.com'}`} 
                            target="_blank"
                            className="btn btn-primary hover:btn-success"
                            ref={(el) => { projectBtnRefs.current[idx] = el; }}
                            onMouseEnter={() => handleProjectBtnMouseEnter(idx)}
                            onMouseLeave={() => handleProjectBtnMouseLeave(idx)}
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
                {projects.map((project, idx) => (
                  <a 
                    key={idx} 
                    href={`#${idx}`} 
                    onClick={() => setActiveButton(idx)} 
                    className={`btn btn-xs hover:btn-success ${activeButton === idx ? '!bg-success !text-success-content' : ''}`}
                    ref={(el) => { navBtnRefs.current[idx] = el; }}
                    onMouseEnter={() => handleNavBtnMouseEnter(idx)}
                    onMouseLeave={() => handleNavBtnMouseLeave(idx)}
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
