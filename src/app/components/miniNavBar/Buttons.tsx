import { gsap } from "gsap";
import Link from 'next/link';

interface ButtonsProps {
    title: string;
    href: string;
    icon?: string;
} 


export default function Buttons(
    { title, href, icon }: ButtonsProps
) {


    return (
        <Link
            href={href} 
            className="sidedrawer text-m lg:text-lg w-full mb-1 mt-1 font-mono"
        >
            {icon && 
                <img src={icon} alt="" className="inline-block w-5 h-5 mr-2 align-middle"/>
            }
            {title}
        </Link>
    )
}