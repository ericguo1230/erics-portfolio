import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

interface ButtonProps {
    button: string;
    href: string;
    content: string;
    img?: string;
    isNew?: boolean;
    internal?: boolean;
}

export default function Button({button, href, content, img, isNew = false, internal = false }: ButtonProps) {

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
        <>
            {!internal ? (<a
                ref={btnRef}
                href={href}
                className={`${button} btn btn-primary hover:btn-success`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target={isNew ? '_blank' : undefined}
                rel={isNew ? 'noopener noreferrer' : undefined}
            >
                {content}
            </a>) : (
                <Link
                    ref={btnRef}
                    href={href}
                    className={`${button} btn btn-primary hover:btn-success`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {content}
                </Link>
                )}
        </>
    );
}
