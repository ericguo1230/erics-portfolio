import { useState, useEffect } from 'react';

interface NavbarButtonProps {
    title: string;
    href: string;
    currentPath: string;
}

export default function NavbarButton({href, title, currentPath}: NavbarButtonProps) {

    return (
        <a href={href} className={`tab md:w-45 text-lg flex justify-start ${currentPath === href ? 'tab-active' : ''}`}>
            {title}
        </a>
    )
}