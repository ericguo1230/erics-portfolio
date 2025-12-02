'use client';
import { useState } from 'react';
import { usePageContext } from '@/app/contexts/PageInfoContext';
import MiniNavbar from '@/app/components/miniNavBar/MiniNavbar';
import { AnimatePresence } from 'framer-motion';
import NavbarButton from '@/app/components/NavBar/Buttons';
import Link from 'next/link';

export default function Navbar() {
    const { path: currentPath, theme, setTheme } = usePageContext();
    const [miniNav, setMiniNav] = useState(false);

    const open = () => setMiniNav(true); 
    const close = () => setMiniNav(false); 

    const toggleTheme = () => {
        setTheme(theme === '"retro"' ? '"dracula"' : '"retro"');
    };

    return (
        <>
            <div className="navbar bg-accent shadow-lg sticky top-0 z-150">
                <div className="flex-none">
                    <button 
                        className="btn btn-square btn-ghost"
                        onClick={() => miniNav ? close() : open()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                    </button>
                </div>
                <div className="navbar-start">
                    <Link href='.'className={`btn btn-ghost text-accent-content hover:bg-warning text-2xl font-mono inline-flex`}>
                        Eric's Portfolio
                    </Link>
                </div>
                { !miniNav && <div className="navbar-center tabs text-accent-content hidden tabs-lift lg:flex font-mono hover:text-primary">
                    <NavbarButton href={'/about'} title={'About'} currentPath={currentPath} />
                    <NavbarButton href={'/projects'} title={'Projects'} currentPath={currentPath} />
                    <NavbarButton href={'/contact'} title={'Contact'} currentPath={currentPath} />
                </div>}
                <div className="navbar-end">
                    <label className="toggle text-base-content">
                    <input 
                        type="checkbox" 
                        value="dracula" 
                        className="theme-controller" 
                        checked={theme === '"dracula"'}
                        onChange={toggleTheme}
                    />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                </div>
            </div>
            <AnimatePresence
                initial={false}
                mode="wait"
                >
                {miniNav && (<MiniNavbar handleClose={close} theme={theme}/>)}
            </AnimatePresence>
        </>
    )
}