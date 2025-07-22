'use client';
import { usePageContext } from '@/app/contexts/PageInfoContext'

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
                <>
                    <h1 className="text-4xl text-center font-bold mb-8">Blog</h1>
                    <p className="text-lg text-center">This page is under construction. Stay tuned for updates!</p>
                </>
            )}
        </>
    );
}