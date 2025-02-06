"use client";

import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import About from "./components/aboutSection";
import styles from "./page.module.css";
import Questions from "./components/questions";
import InquiryForm from "./components/inquiryForm";
import CTABanner from "./components/ctabanner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <HeroSection />
        <About />
        <Questions />
        <InquiryForm />
        <CTABanner />
        <Footer />
      </main>
    </div>
  );
}
