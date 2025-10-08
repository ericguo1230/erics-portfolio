'use client';
import { PageProps} from "@/app/(browser-layout)/projects/page";
import projects, {language_to_color} from '@/app/(browser-layout)/projects/content/content'

const div_height = 120

export default function PhoneProject({ loading }: PageProps){

    return(
          <>
            {loading ? (
              <span className="loading loading-ring loading-xl"></span>
            ) : 
            <div className="max-h-120 flex w-full justify-center">
              <div className={`carousel carousel-vertical round-box h-${div_height} w-full p-5`}>
                {projects.map((project, idx) => (
                  <div key={idx} id={`${idx}`} className={`carousel-item max-h-${div_height} w-full flex flex-col overflow-auto`}>
                    <div className="card bg-base-100 image-full w-full shadow-sm h-120">
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
                        {project.languages && <div className="text-start text-accent text-bg-base">
                          Languages: {project.languages.map((lang, langIdx) => (
                            <div className={`badge ${language_to_color[lang.toLowerCase()] ? language_to_color[lang.toLowerCase()] : 'primary'} mr-2`} key={projects.length + langIdx}>{lang}</div>
                          ))}
                        </div>}
                        <div className="justify-end mt-2">
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
            </div>
            }
        </>
    );
}