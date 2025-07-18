'use client';
import { usePageContext } from "@/app/contexts/PageInfoContext";
import { homePath } from '@/app/global/variables'

export default function BlogPage() {
    const { path } = usePageContext()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 font-mono">
            <div className="mockup-browser bg-base-100 shadow-xl rounded-xl p-8 lg:w-260 md:w-full min-h-160 h-full text-center z-60 flex flex-col">
                <div className="mockup-browser-toolbar">
                    <div className="input">{homePath + path}</div>
                </div>

                <div className="flex-1 bg-base-200 font-mono flex flex-col items-center justify-center mt-4">
                    <h1 className="text-4xl font-bold mb-8">Blog</h1>
                    <p className="text-lg">This page is under construction. Stay tuned for updates!</p>
                </div>
            </div>
        </div>
    );
}