export default function Button({
  href,
  text,
  type,
}: {
  href: string;
  text?: string;
  type: "primary" | "secondary" | "tertiary";
}) {
  const buttonType = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-transparent text-orange-500 hover:text-orange-600",
    tertiary: "bg-transparent text-neutral-700 hover:text-neutral-800",
  };

  return (
    <a href={href}>
      <div
        className={`button font-bold text-base md:text-xl py-1 md:py-3 px-3 md:px-6 rounded-full cursor-pointer ${buttonType[type]}`}
      >
        {text}
      </div>
    </a>
  );
}
