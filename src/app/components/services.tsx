import Image from "next/image";
import services from "../data/services.json";

export default function Services() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-8 my-4">
      {services.map((service) => {
        return (
          <div
            key={service.name}
            className="flex flex-col bg-white rounded-2xl p-8 shadow-xl"
          >
            <Image
              src={`/icons/${service.icon}.svg`}
              alt={service.name}
              width="36"
              height="36"
              className="mb-8 md:mb-12"
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
