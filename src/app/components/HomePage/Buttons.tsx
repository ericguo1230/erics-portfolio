import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

interface ButtonProps {
    button: string;
    ref: string;
    content: string;
    img?: string;
    isNew?: boolean;
    internal?: boolean;
}

export default function Button({button, ref, content, img, isNew = false, internal = false }: ButtonProps) {

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
                href={ref}
                className={`${button} btn btn-primary hover:btn-success`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target={`${isNew ? '' : '_blank'}`}
                rel="noopener noreferrer"
            >
                {content}
            </a>) : (
                <Link
                    ref={btnRef}
                    href={ref}
                    className={`${button} btn btn-primary hover:btn-success`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    target={`${isNew ? '' : '_blank'}`}
                    rel="noopener noreferrer"
                >
                    {content}
                </Link>
                )}
        </>
    );
}