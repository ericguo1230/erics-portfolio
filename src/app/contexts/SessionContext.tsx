'use client'; 
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

type VisitedPage = 'about' | 'projects' | 'contact' | 'home';
const VISIT_STATE_VERSION = '2';
const VISIT_STATE_VERSION_KEY = 'visitStateVersion';
const VISITED_STORAGE_KEYS = {
    about: 'hasVisitedAbout',
    projects: 'hasVisitedProjects',
    contact: 'hasVisitedContact',
    home: 'hasVisitedHome',
} as const;

interface SessionContextType {
    hasVisitedAbout: boolean;
    hasVisitedProjects: boolean;
    hasVisitedContact: boolean;
    hasVisitedHome: boolean;
    isSessionReady: boolean;
    markVisited: (page: VisitedPage) => void;
}

const SessionContext = createContext<SessionContextType | null>(null);

export const useSessionContext = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSessionContext must be used within SessionProvider');
    }
    return context;
};

export function SessionProvider({ children,}: { children: ReactNode,}) {
    const [hasVisitedAbout, setHasVisitedAbout] = useState(false);
    const [hasVisitedProjects, setHasVisitedProjects] = useState(false);
    const [hasVisitedContact, setHasVisitedContact] = useState(false);
    const [hasVisitedHome, setHasVisitedHome] = useState(false);
    const [isSessionReady, setIsSessionReady] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.sessionStorage) return;

        if (sessionStorage.getItem(VISIT_STATE_VERSION_KEY) !== VISIT_STATE_VERSION) {
            Object.values(VISITED_STORAGE_KEYS).forEach((key) => {
                sessionStorage.setItem(key, 'false');
            });
            sessionStorage.setItem(VISIT_STATE_VERSION_KEY, VISIT_STATE_VERSION);
        }

        setHasVisitedAbout(sessionStorage.getItem(VISITED_STORAGE_KEYS.about) === 'true');
        setHasVisitedProjects(sessionStorage.getItem(VISITED_STORAGE_KEYS.projects) === 'true');
        setHasVisitedContact(sessionStorage.getItem(VISITED_STORAGE_KEYS.contact) === 'true');
        setHasVisitedHome(sessionStorage.getItem(VISITED_STORAGE_KEYS.home) === 'true');
        setIsSessionReady(true);
    }, []);

    const markVisited = useCallback((page: VisitedPage) => {
        if (typeof window === 'undefined' || !window.sessionStorage) return;

        switch (page) {
            case 'about':
                sessionStorage.setItem(VISITED_STORAGE_KEYS.about, 'true');
                setHasVisitedAbout(true);
                break;
            case 'projects':
                sessionStorage.setItem(VISITED_STORAGE_KEYS.projects, 'true');
                setHasVisitedProjects(true);
                break;
            case 'contact':
                sessionStorage.setItem(VISITED_STORAGE_KEYS.contact, 'true');
                setHasVisitedContact(true);
                break;
            case 'home':
                sessionStorage.setItem(VISITED_STORAGE_KEYS.home, 'true');
                setHasVisitedHome(true);
                break;
        }
    }, []);

    return (
        <SessionContext.Provider
            value={{
                hasVisitedAbout,
                hasVisitedProjects,
                hasVisitedContact,
                hasVisitedHome,
                isSessionReady,
                markVisited,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
