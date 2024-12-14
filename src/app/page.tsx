"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Welcome from "@/components/Welcome";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="root-layout bg-gray-50">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Welcome setSelectedPage={setSelectedPage} />
    </div>
  );
}
