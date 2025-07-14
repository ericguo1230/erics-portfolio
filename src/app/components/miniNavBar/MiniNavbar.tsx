import { motion, Variants } from 'framer-motion';
import Backdrop from '@/app/components/miniNavBar/Backdrop';
import { useEffect } from 'react';
import Buttons from '@/app/components/miniNavBar/Buttons';

export default function MiniNavbar({ handleClose }: { handleClose: () => void }) {

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
                className="fixed top-16 left-0 h-full w-56 lg:w-70 bg-base-200 shadow-lg flex flex-col items-start p-6 z-50"
                variants={popLeft}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Buttons href="/about" title="About" icon="/file.svg" />
                <Buttons href="/projects" title="Projects" icon="/github-logo.svg" />
                <Buttons href="/contact" title="Contact" icon="/contact-icon.svg" />
            </motion.div>
        </Backdrop>
    );
}