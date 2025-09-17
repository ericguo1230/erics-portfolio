import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);

// Modified logo components that accept refs and don't have their own animations
interface InstagramLogoProps {
  size?: number;
  className?: string;
}

const InstagramLogo = forwardRef<SVGSVGElement, InstagramLogoProps>(
  ({ size = 24, className = '' }, ref) => {
    return (
      <svg 
        ref={ref}
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#833ab4'}} />
            <stop offset="50%" style={{stopColor: '#fd1d1d'}} />
            <stop offset="100%" style={{stopColor: '#fcb045'}} />
          </linearGradient>
        </defs>
        
        <path 
          className="drawable instagram-border"
          d="M8 2 L16 2 Q22 2 22 8 L22 16 Q22 22 16 22 L8 22 Q2 22 2 16 L2 8 Q2 2 8 2 Z" 
          fill="none" 
          stroke="url(#instagramGradient)" 
          strokeWidth="2"
        />
        
        <circle 
          className="drawable instagram-outer-circle"
          cx="12" 
          cy="12" 
          r="5.5" 
          fill="none" 
          stroke="url(#instagramGradient)" 
          strokeWidth="2"
        />
        
        <circle 
          className="drawable instagram-inner-circle"
          cx="12" 
          cy="12" 
          r="3.5" 
          fill="none" 
          stroke="url(#instagramGradient)" 
          strokeWidth="2"
        />
        
        <circle 
          className="drawable instagram-dot"
          cx="17.5" 
          cy="6.5" 
          r="1.5" 
          fill="none" 
          stroke="url(#instagramGradient)" 
          strokeWidth="2"
        />
      </svg>
    );
  }
);

interface GitHubLogoProps {
  size?: number;
  className?: string;
  color?: string;
}

const GitHubLogo = forwardRef<SVGSVGElement, GitHubLogoProps>(
  ({ size = 24, className = '', color = 'gray' }, ref) => {
    return (
      <svg 
        ref={ref}
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path 
          className="drawable github-path"
          fill="none"
          stroke={color}
          strokeWidth="1.25"
          d="M12 0.5C5.37 0.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188c0.6 0.111 0.82-0.254 0.82-0.567c0-0.28-0.01-1.022-0.015-2.005c-3.338 0.711-4.042-1.582-4.042-1.582c-0.546-1.361-1.335-1.725-1.335-1.725c-1.087-0.731 0.084-0.716 0.084-0.716c1.205 0.082 1.838 1.215 1.838 1.215c1.07 1.803 2.809 1.282 3.495 0.981c0.108-0.763 0.417-1.282 0.76-1.577c-2.665-0.295-5.466-1.309-5.466-5.827c0-1.287 0.465-2.339 1.235-3.164c-0.135-0.298-0.54-1.497 0.105-3.121c0 0 1.005-0.316 3.3 1.209c0.96-0.262 1.98-0.392 3-0.398c1.02 0.006 2.04 0.136 3 0.398c2.28-1.525 3.285-1.209 3.285-1.209c0.645 1.624 0.24 2.823 0.12 3.121c0.765 0.825 1.23 1.877 1.23 3.164c0 4.53-2.805 5.527-5.475 5.817c0.42 0.354 0.81 1.077 0.81 2.182c0 1.578-0.015 2.846-0.015 3.229c0 0.309 0.21 0.678 0.825 0.56C20.565 21.917 24 17.502 24 12.292C24 5.78 18.627 0.5 12 0.5z"
        />
      </svg>
    );
  }
);

interface LinkedInLogoProps {
  size?: number;
  className?: string;
  backgroundColor?: string;
  iconColor?: string;
}

const LinkedInLogo = forwardRef<SVGSVGElement, LinkedInLogoProps>(
  ({ size = 24, className = '', backgroundColor = 'black', iconColor = 'white' }, ref) => {
    return (
      <svg 
        ref={ref}
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="blue" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Background rounded rectangle */}
        <path 
          className="drawable linkedin-border"
          d="M4 2 L20 2 Q22 2 22 4 L22 20 Q22 22 20 22 L4 22 Q2 22 2 20 L2 4 Q2 2 4 2 Z" 
          fill="#0077B5" 
          stroke={backgroundColor} 
          strokeWidth="2"
        />
        
        {/* Letter "i" - vertical line */}
        <path 
          className="drawable linkedin-i-line"
          d="M7 10 L7 16.5" 
          stroke={iconColor} 
          strokeWidth="1.8" 
          strokeLinecap="round"
        />
        
        {/* Letter "i" - dot */}
        <circle 
          className="drawable linkedin-i-dot"
          cx="7" 
          cy="7.5" 
          r="0.8" 
          fill="none" 
          stroke={iconColor} 
          strokeWidth="1.8"
        />
        
        {/* Letter "n" - left vertical line */}
        <path 
          className="drawable linkedin-n-left"
          d="M11.5 10 L11.5 16.5" 
          stroke={iconColor} 
          strokeWidth="1.8" 
          strokeLinecap="round"
        />
        
        {/* Letter "n" - top horizontal curve */}
        <path 
          className="drawable linkedin-n-curve"
          d="M11.5 12 Q13 10 14.5 10 Q16 10 16 11.5" 
          stroke={iconColor} 
          strokeWidth="1.8" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Letter "n" - right vertical line */}
        <path 
          className="drawable linkedin-n-right"
          d="M16 11.5 L16 16.5" 
          stroke={iconColor} 
          strokeWidth="1.8" 
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

export { InstagramLogo, GitHubLogo, LinkedInLogo };