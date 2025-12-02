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
    const { hasVisitedProjects } = useSessionContext();
    const [isFirstVisit, setIsFirstVisit] = useState(!hasVisitedProjects);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (!hasVisitedProjects) {
            sessionStorage.setItem("hasVisitedProjects", "true");
        }else{
            setIsFirstVisit(false);
        }

    }, []);

    return (
        <>
            <div className="hidden md:block">
                <WindowProject loading={loading && isFirstVisit} />
            </div>

            <div className="md:hidden block">
                <PhoneProject loading={loading && isFirstVisit} />
            </div>
        </>
    );
}