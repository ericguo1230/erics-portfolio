"use client";
import WindowProject from "@/app/(browser-layout)/projects/WindowProjects";
import PhoneProject from "@/app/(browser-layout)/projects/PhoneProject";
import { usePageContext } from "../../contexts/PageInfoContext";
import { useSessionContext } from "../../contexts/SessionContext";
import { useEffect, useState } from "react";

export interface PageProps{
    loading: boolean,
}

export default function ProjectsPage() {
    const { loading } = usePageContext()
    const { hasVisitedProjects, isSessionReady, markVisited } = useSessionContext();
    const [isFirstVisit, setIsFirstVisit] = useState(false);
    const [hasResolvedVisit, setHasResolvedVisit] = useState(false);

    useEffect(() => {
        if (!isSessionReady || hasResolvedVisit) return;

        if (!hasVisitedProjects) {
            setIsFirstVisit(true);
            markVisited('projects');
        }else{
            setIsFirstVisit(false);
        }

        setHasResolvedVisit(true);
    }, [hasResolvedVisit, hasVisitedProjects, isSessionReady, markVisited]);

    const showInitialLoader = !hasResolvedVisit || (loading && isFirstVisit);

    return (
        <>
            <div className="hidden md:block">
                <WindowProject loading={showInitialLoader} />
            </div>

            <div className="md:hidden block">
                <PhoneProject loading={showInitialLoader} />
            </div>
        </>
    );
}
