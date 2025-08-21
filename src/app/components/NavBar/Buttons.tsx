import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarButtonProps {
    title: string;
    href: string;
    currentPath: string;
}

export default function NavbarButton({href, title, currentPath}: NavbarButtonProps) {

    return (
        <Link href={href} className={`tab lg:w-40 text-lg text-warning flex justify-start ${currentPath === href ? 'tab-active' : ''}`}>
            {title}
        </Link>
    )
}