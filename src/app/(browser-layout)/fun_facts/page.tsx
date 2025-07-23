'use client';
import { facts, courses } from '@/app/(browser-layout)/fun_facts/content';
import { usePageContext } from '@/app/contexts/PageInfoContext';

export default function FunFacts(){
    const { loading } = usePageContext();

    return (
        <>
            {loading ? (
                <>
                    <span className="loading loading-spinner loading-xl md:block hidden"></span>
                    <span className="loading loading-ring loading-xl md:hidden"></span>
                </>
            ) : (
                <div className="join join-vertical bg-base-100">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Fun Facts!</div>
                        <div className="collapse-content text-sm p-4 text-start bg-base-200">
                            <ul>
                                {facts.map((fact, idx) => (
                                    <li key={idx}>
                                        <div className="flex">
                                            <p className="text-base-content font-mono"><span className="text-success text-xl">{idx + 1}. </span> {fact}</p>
                                        </div>
                                    </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">Relevant Courses & Skills</div>
                        <div className="collapse-content text-sm text-start bg-base-200 p-3">
                            <ul>
                                {courses.map((course, idx) => (
                                    <li key={idx}>
                                        <div className="flex">
                                            <h1 className="text-xl text-success font-mono">{course.name}: <span className="!text-sm !text-base-content"> {course.skills}</span></h1>
                                        </div>
                                    </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}