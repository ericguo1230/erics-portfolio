'use client';
import { usePageContext } from "@/app/contexts/PageInfoContext"

export default function Resume() {
    const { loading } = usePageContext();

    return (
        <>
            {loading ? (
                    <>
                        <span className="loading loading-spinner loading-xl md:block hidden"></span>
                        <span className="loading loading-ring loading-xl md:hidden"></span>
                    </>
                ) : (
                    <div className="items-center justify-items-center md:w-200 md:h-150 overflow-auto w-90 h-150">
                        <iframe src="Eric-Resume.pdf" className="h-full w-full" />
                    </div>
                )}
        </>
    )
}