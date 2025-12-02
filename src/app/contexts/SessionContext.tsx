'use client'; 
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePageContext } from './PageInfoContext';

interface SessionContextType {
    hasVisitedAbout: boolean;
    hasVisitedProjects: boolean;
    hasVisitedContact: boolean;
    hasVisitedHome: boolean;
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

    const { path } = usePageContext();

    useEffect(() => {
        if (typeof window === 'undefined' || !window.sessionStorage) return;
        // This effect could be used to initialize session data from localStorage or cookies if needed
        const visitedAbout = sessionStorage.getItem('hasVisitedAbout') === 'true';
        const visitedProjects = sessionStorage.getItem('hasVisitedProjects') === 'true';
        const visitedContact = sessionStorage.getItem('hasVisitedContact') === 'true';
        const visitedHome = sessionStorage.getItem('hasVisitedHome') === 'true';
        
        // console.log("SessionContext initialized:", {
        //     visitedAbout,
        //     visitedProjects,
        //     visitedContact,
        //     visitedHome
        // });

        if (visitedAbout !== hasVisitedAbout){
            setHasVisitedAbout(visitedAbout)
        }
        if (visitedProjects !== hasVisitedProjects){
            setHasVisitedProjects(visitedProjects)
        }
        if (visitedContact !== hasVisitedContact){
            setHasVisitedContact(visitedContact)
        }
        if (visitedHome !== hasVisitedHome){
            setHasVisitedHome(visitedHome)
        }
    }, [path]);

    return (
        <SessionContext.Provider
            value={{
                hasVisitedAbout,
                hasVisitedProjects,
                hasVisitedContact,
                hasVisitedHome,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}