'use client';
import { useState } from 'react';
import { usePageContext } from '@/app/contexts/PageInfoContext';
import MiniNavbar from '@/app/components/miniNavBar/MiniNavbar';
import { AnimatePresence } from 'framer-motion';
import NavbarButton from '@/app/components/NavBar/Buttons';

export default function Navbar() {
    const { path: currentPath, theme, setTheme } = usePageContext();
    const [miniNav, setMiniNav] = useState(false);

    const open = () => setMiniNav(true); 
    const close = () => setMiniNav(false); 

    const toggleTheme = () => {
        setTheme(theme === '"retro"' ? '"synthwave"' : '"retro"');
    };

    return (
        <>
            <div className="navbar bg-base-100 shadow-lg sticky top-0 z-150">
                <div className="flex-none">
                    <button 
                        className="btn btn-square btn-ghost"
                        onClick={() => miniNav ? close() : open()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                    </button>
                </div>
                <div className="navbar-start">
                    <a href='/'className={`btn btn-ghost text-2xl font-mono inline-flex ${currentPath === '/' ? 'underline' : ''}`}>
                        Eric's Portfolio
                    </a>
                </div>
                { !miniNav && <div className="navbar-center tabs hidden tabs-lift lg:flex font-mono">
                    <NavbarButton href={'/about'} title={'About'} currentPath={currentPath} />
                    <NavbarButton href={'/projects'} title={'Projects'} currentPath={currentPath} />
                    <NavbarButton href={'/blog'} title={'Blog'} currentPath={currentPath} />
                </div>}
                <div className="navbar-end">
                    <label className="toggle text-base-content">
                    <input 
                        type="checkbox" 
                        value="synthwave" 
                        className="theme-controller" 
                        checked={theme === '"synthwave"'}
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