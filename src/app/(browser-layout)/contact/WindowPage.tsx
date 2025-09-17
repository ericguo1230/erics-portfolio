"use client";
import { InstagramLogo, GitHubLogo, LinkedInLogo } from "@/app/components/contact/ContactLogos";
import React from "react";
import { ContactPageProps } from "./page";


const WindowHomePage = ({ 
  instagramRef,
  githubRef,
  containerRef,
  linkedinRef,
  size,
  email
}: ContactPageProps) => {

  return (
    <div className="flex flex-col h-full w-full">
      <div className="email flex-grow justify-start items-start w-full p-6 bg-neutral md:p-10 rounded-xl shadow-xl hover:bg-info transition-colors duration-200 text-neutral-content hover:text-info-content">
        <h1 className="text-5xl font-bold mb-6">
          <a 
            href="mailto:ericc.guo@mail.utoronto.ca"
            className="hover:text-neutral-content transition-colors cursor-pointer contact"
          >
            {email}
          </a>
        </h1>
      </div>
      <div className="w-1/2 mx-auto mt-30">
        <div className="flex justify-between items-center"ref={containerRef}>
          <a href="https://www.instagram.com/eric.gu01/" target="_blank" rel="noopener noreferrer">
            <InstagramLogo ref={instagramRef} size={size} />
          </a>
          <a href="https://github.com/ericguo1230" target="_blank" rel="noopener noreferrer">
            <GitHubLogo ref={githubRef} size={size} />
          </a>
          <a href="https://www.linkedin.com/in/ericguo1230" target="_blank" rel="noopener noreferrer">
            <LinkedInLogo ref={linkedinRef} size={size} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WindowHomePage;