import { gsap } from "gsap";
import { useRef } from "react";

interface ButtonProps {
    button: string;
    ref: string;
    content: string;
    img?: string;
}

export default function Button({button, ref, content, img}: ButtonProps) {

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
            href={ref}
            className={`${button} btn btn-primary hover:btn-secondary`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    );
}