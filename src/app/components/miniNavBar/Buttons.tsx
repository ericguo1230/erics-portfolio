import { gsap } from "gsap";
import { useRef } from "react";

interface ButtonsProps {
    title: string;
    href: string;
    icon?: string;
} 


export default function Buttons(
    { title, href, icon }: ButtonsProps
) {

    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        if (btnRef.current) {
            gsap.to(btnRef.current, { scale: 1.1, duration: 0.2 });
        }
    };

    const handleMouseLeave = () => {
        if (btnRef.current) {
            gsap.to(btnRef.current, { scale: 1, duration: 0.2 });
        }
    };

    return (
        <a 
            ref={btnRef}
            href={href} 
            className="btn-ghost text-xl lg:text-2xl mt-6 mb-6 hover:text-accent hover:underline underline-offset-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {icon && 
                <img src={icon} alt="" className="inline-block w-5 h-5 mr-2 align-middle"/>
            }
            {title}
        </a>
    )
}