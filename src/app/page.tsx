'use client';
import Image from "next/image";
import {useEffect, useState} from "react";
import PhoneHome from "@/app/components/HomePage/phone";
import WindowHome from "@/app/components/HomePage/window";

const intro = "Hi, I'm Eric! I'm a software engineer with a passion for Machine Learning and Data Engineering!";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      
      {/* Phone version - visible on small screens only */}
      <div className="md:hidden">
        <PhoneHome loading={loading} intro={intro} />
      </div>

      {/* Window version - visible on medium screens and above */}
      <div className="hidden md:block">
        <WindowHome loading={loading} intro={intro} />
      </div>
    </div>
  );
}