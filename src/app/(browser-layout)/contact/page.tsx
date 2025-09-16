'use client';
import { usePageContext } from '@/app/contexts/PageInfoContext'
import WindowHomePage from '@/app/(browser-layout)/contact/WindowPage';

const intro= "Contact me!"
const email = "ericc.guo@mail.utoronto.ca"

export default function BlogPage() {
    const { loading } = usePageContext();

    return (
        <>
            {loading ? (
                <>
                    <span className="loading loading-spinner loading-xl md:block hidden"></span>
                    <span className="loading loading-ring loading-xl md:hidden"></span>
                </>
            )
            : (
                <div className="h-full hidden md:block">
                    <WindowHomePage />
                </div>
            )}
        </>
    );
}