import { motion, Variants } from 'framer-motion';
import Backdrop from '@/app/components/miniNavBar/Backdrop';
import { useEffect } from 'react';
import Buttons from '@/app/components/miniNavBar/Buttons';

export default function MiniNavbar({ handleClose, theme }: { handleClose: () => void, theme: string}) {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                handleClose();
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleClose]);

    const popLeft: Variants = {
        hidden: {
            x: -window.innerWidth,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "tween",
                stiffness: 300,
                damping: 30,
            },
        },
        exit: {
            x: -window.innerWidth,
            opacity: 0,
        },
    }
    return (
        <Backdrop onClick={handleClose} >
            <motion.div 
                className="fixed top-13 left-0 h-full w-50 md:w-58 bg-base-200 shadow-lg flex flex-col items-start justify-between pt-6 pb-8 pl-2 pr-2 z-50"
                variants={popLeft}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="flex flex-col items-start w-full">
                    <Buttons href="/about" title="About" icon="file.svg" />
                    <Buttons href="/projects" title="Projects" icon="github-logo.svg" />
                    <Buttons href="/blog" title="Blog" icon="contact-icon.svg" />
                </div>
                <div className="mb-12 md:ml-2 md:text-sm text-xs">
                    <div className="flex"><img src="globe.svg" className='w-4 h-4 mr-1 md:mr-2' /><p className="font-mono"> (343)-883-8189 </p></div>
                    <div className="flex"><img src="window.svg" className='w-4 h-4 mr-1 md:mr-2' /><p className="font-mono"> eric.guo1230@gmail.com </p></div>
                    <p className="font-mono">Theme: <span className="text-primary">{theme}</span></p>
                </div>
            </motion.div>
        </Backdrop>
    );
}