import Link from 'next/link';
import { usePageContext } from '@/app/contexts/PageInfoContext';

export default function Dock(){
    const { path } = usePageContext();

    return (
        <div className="dock flex bg-neutral text-neutral-content w-full justify-around" 
        style={{
            position: 'relative',
            right: 'auto',
            bottom: 'auto', 
            left: 'auto'
        }}>
            <Link className={`${path==='/' ? 'dock-active' : ''}`} href='/'>
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></line></g></svg>
                <span className="dock-label">Home</span>
            </Link>

            <Link className={`${path==='/about' ? 'dock-active' : ''}`} href='/about'>
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </g>
                </svg>
                <span className="dock-label">About</span>
            </Link>
            
            <Link className={`${path==='/projects' ? 'dock-active' : ''}`} href='/projects'>
                 <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="6,8 10,12 6,16" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="6" cy="6" r="1" fill="currentColor"/>
                        <circle cx="9" cy="6" r="1" fill="currentColor"/>
                        <circle cx="12" cy="6" r="1" fill="currentColor"/>
                    </g>
                </svg>
                <span className="dock-label">Projects</span>
            </Link>
            
            <Link className={`${path==='/contact' ? 'dock-active' : ''}`} href='/contact'>
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect></g></svg>
                <span className="dock-label">Contact</span>
            </Link>
        </div>
    )
}