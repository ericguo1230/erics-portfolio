'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface PageContextType {
    path: string;
    theme: string;
    setTheme: (theme: string) => void;
    mounted: boolean;
    loading: boolean;
}

const PageContext = createContext<PageContextType | null>(null);

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within PageProvider');
    }
    return context;
};

export function PageProvider({ children,}: { children: ReactNode,}) {
    const [theme, setTheme] = useState('"retro"'); // Default theme
    const [mounted, setMounted] = useState(false);
    const currentPath = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [currentPath, mounted]);

    useEffect(() => {
        if (mounted) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.setAttribute('data-theme', JSON.parse(savedTheme));
            } else {
                document.documentElement.setAttribute('data-theme', 'retro');
            }
        }
    }, [mounted]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', JSON.parse(theme));
        }
    }, [theme, mounted]);

    const contextValue: PageContextType = {
        path: currentPath,
        theme,
        setTheme,
        mounted,
        loading,
    };

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
}