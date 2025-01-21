'use client'


import { useRef } from "react";
import HeroSection from "./components/herosection";
import MockupSection from "./components/mockupSection";
import Navbar from "./components/navbar";
import ProblemSection from "./components/problemSection";
import WaitlistSection from "./components/waitlistSection";
import styles from "./page.module.css";

export default function Home() {
  const elementRef = useRef(null);

  const handleScroll = () => {
    elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar handleScroll={handleScroll} />
        <HeroSection handleScroll={handleScroll} />
        <ProblemSection />
        <MockupSection />
        <div ref={elementRef}>
          <WaitlistSection />
        </div>
      </main>
    </div>
  );
}
