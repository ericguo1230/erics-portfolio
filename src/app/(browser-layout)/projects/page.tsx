"use client";
import WindowProject from "@/app/(browser-layout)/projects/WindowProjects";
import PhoneProject from "@/app/(browser-layout)/projects/PhoneProject";
import { usePageContext } from "../../contexts/PageInfoContext";

export interface PageProps{
    loading: boolean,
}

export const language_to_color: {[key:string]: string} = {
      "python": "badge-success",
      "r": "badge-neutral",
      "java": "badge-warning",
      "typescript": "badge-info",
      "sql": "badge-accent",
      "sh": "badge-secondary",
}

export default function ProjectsPage() {
    const { loading } = usePageContext()
    return (
        <>
            <div className="hidden md:block">
                <WindowProject loading={loading} />
            </div>

            <div className="md:hidden block">
                <PhoneProject loading={loading} />
            </div>
        </>
    );
}