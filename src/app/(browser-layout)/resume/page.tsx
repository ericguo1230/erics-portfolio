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
                    <div className="w-[calc(100vw-5rem)] max-w-80 h-[calc(100dvh-13rem)] max-h-[34rem] min-h-96 md:w-200 md:h-150 md:max-w-none md:max-h-none overflow-hidden rounded-md border border-base-300 bg-base-100">
                        <iframe
                            src="Eric-Resume.pdf#view=FitH"
                            title="Eric Guo Resume"
                            className="h-full w-full"
                        />
                    </div>
                )}
        </>
    )
}
