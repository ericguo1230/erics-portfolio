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
            gsap.to(btnRef.current, { scale: 1.02, duration: 0.2 });
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
            className="sidedrawer text-xl lg:text-xl w-full mb-1 mt-1 hover:text-accent"
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