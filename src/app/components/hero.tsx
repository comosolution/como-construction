import Button from "./button";
import Countdown from "react-countdown";

export default function Hero() {
  return (
    <>
      <div className="flex gap-2 lg:gap-4 opacity-65 uppercase tracking-tight font-extralight text-xs lg:text-base mt-20 overflow-hidden">
        <span>Collaboration</span>
        <span>Mobile Work</span>
        <span>Cybersecurity</span>
        <span>Managed IT</span>
      </div>
      <h1 className="text-center text-5xl md:text-9xl font-black tracking-tight">
        <Countdown date={new Date("May 8, 2024 12:00:00")} />
      </h1>
      <h2 className="text-center font-bold text-base md:text-xl opacity-65">
        Teeeeeeest...
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
        <Button
          href="mailto:info@como-solution.de"
          text="info@como-solution.de"
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
