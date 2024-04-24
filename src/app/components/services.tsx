import Image from "next/image";
import services from "../data/services.json";

export default function Services() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-8 my-4">
      {services.map((service) => {
        return (
          <div
            key={service.name}
            className="flex flex-col bg-neutral-700/20 backdrop-blur-sm rounded-2xl p-8"
          >
            <Image
              src={`/icons/${service.icon}.svg`}
              alt={service.name}
              width="96"
              height="48"
              className="mb-8"
            />
            <h3 className="font-bold text-base lg:text-xl mb-2">
              {service.name}
            </h3>
            <p className="opacity-65">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
