import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <>
      <Image src="/hero.svg" alt="Hero Illustration" width="240" height="354" />
      <div className="flex gap-2 lg:gap-4 opacity-65 uppercase tracking-tight font-extralight text-xs lg:text-base mt-4 overflow-hidden">
        <span>Collaboration</span>
        <span>Mobile Work</span>
        <span>Cybersecurity</span>
        <span>Managed IT</span>
      </div>
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
        Hier entsteht etwas Neues.
      </h1>
      <h2 className="text-center font-bold text-base md:text-xl text-neutral-700">
        Wir sind in Kürze wieder online.
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
        <Button
          href="mailto:info@como-solution.de"
          text="Jetzt Kontakt aufnehmen"
          type="primary"
        />
        <Button
          href="tel:+4991231833700"
          text="+49 9123 18337-00"
          type="secondary"
        />
      </div>
    </>
  );
}
