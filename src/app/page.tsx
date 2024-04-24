/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <img
        src="/bg.svg"
        alt="Background"
        className="absolute -z-1 top-0 w-full bg"
      />
      <main className="relative z-5 min-w-full h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4 p-4 md:p-8">
          <Header />
          <Hero />
        </div>
        <div>
          <Services />
          <Footer />
        </div>
      </main>
    </>
  );
}
