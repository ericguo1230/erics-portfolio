"use client";
import WindowProject from "@/app/(browser-layout)/projects/WindowProjects";
import { usePageContext } from "../../contexts/PageInfoContext";

export interface PageProps{
    loading: boolean,
}

export default function ProjectsPage() {
    const { loading } = usePageContext()
    return (
        <div className="hidden md:block">
            <WindowProject loading={loading} />
        </div>
    );
}