'use client';
import { PageProps } from "@/app/(browser-layout)/projects/page";
import projects from '@/app/(browser-layout)/projects/content/content'

const div_height = 120

export default function PhoneProject({ loading }: PageProps){

    return(
          <>
            {loading ? (
              <span className="loading loading-ring loading-xl"></span>
            ) : 
            <>
              <div className={`carousel carousel-vertical round-box max-h-${div_height} w-full p-5`}>
                {projects.map((project, idx) => (
                  <div key={idx} id={`${idx}`} className={`carousel-item max-h-120 w-full flex flex-col overflow-auto`}>
                    <div className="card bg-base-100 image-full w-full shadow-sm">
                      <figure>
                        <img
                          src={project.img ? project.img : "/window.svg"}
                          alt={project.name}
                        />
                      </figure>
                      <div className="card-body">
                        <h1 className="card-title text-2xl text-accent underline font-bold mb-4">{project.name}</h1>
                        <h2 className="text-l text-success">{project.date}</h2>
                        <div className="text-start h-full">
                          {project.summary.map((detail, detailIdx) => (
                            <p key={detailIdx} className="text-sm text-secondary mb-2">
                              <span className="text-accent">•</span> {detail}
                            </p>
                          ))}
                        </div>
                        <div className="justify-end">
                          <a
                            href={`${project.link ? project.link : 'https://google.com'}`}
                            target='_blank'
                            className="btn btn-primary btn-sm hover:btn-success"
                          >
                            Go to Project!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
            }
        </>
    );
}