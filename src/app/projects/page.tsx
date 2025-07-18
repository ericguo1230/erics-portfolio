"use client";
import WindowProject from "@/app/projects/WindowProjects";
import { usePageContext } from "../contexts/PageInfoContext";

export interface PageProps{
    loading: boolean,
}

export default function ProjectsPage() {
    const { loading } = usePageContext()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 font-mono">
            <div className="hidden md:block">
                <WindowProject loading={loading} />
            </div>
        </div>
    );
}