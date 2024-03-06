import Image from "next/image";
import socials from "../data/socials.json";

export default function Header() {
  return (
    <div className="min-w-full flex justify-between items-center">
      <Image src="/logo_black.svg" alt="Logo" width="140" height="36" />
      <nav className="flex gap-2">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.href}
              className="self-center p-0.5 rounded-sm bg-neutral-700 hover:bg-sky-700"
              target="_blank"
            >
              <Image
                src={`/icons/${social.name.toLowerCase()}.svg`}
                alt={social.name}
                width="20"
                height="20"
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
