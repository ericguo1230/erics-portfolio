'use client';
import { PageProps } from "@/app/(browser-layout)/projects/page";
import projects from '@/app/(browser-layout)/projects/content/content'
import { useState } from 'react';

export default function WindowProject({ loading }: PageProps){
    const [activeButton, setActiveButton] = useState(0);

    return(
          <>
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : 
            <>
              <div className="carousel w-full mt-5">
                {projects.map((project, idx) => (
                  <div key={idx} id={`${idx}`} className="carousel-item w-full">
                    <div className="card card-side bg-base-100 shadow-xl">
                      <figure className="w-2/5">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <div className="card-body w-3/5 flex flex-col h-full">
                        <h1 className="card-title text-3xl underline font-bold mb-4">{project.name}</h1>
                        <div className="text-start h-full">
                          {project.summary.map((detail, detailIdx) => (
                            <p key={detailIdx} className="mb-2">
                              • {detail}
                            </p>
                          ))}
                        </div>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Go to Project!</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                {projects.map((projects, idx) => (
                  <a key={idx} href={`#${idx}`} onClick={() => setActiveButton(idx)} className={`btn btn-xs ${activeButton === idx ? 'bg-success text-success-content' : ''}`}>{idx + 1}</a>
                ))}
              </div>
            </>
            }
        </>
    );
}