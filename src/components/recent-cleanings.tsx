import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const cleanings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    title: "Office Cleaning",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    title: "Window Cleaning",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    title: "Home Cleaning",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    title: "Deep Cleaning",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Commercial Cleaning",
  },
];

export default function RecentCleanings() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f8fafa]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#A0D5CD]">
        Limpezas Recentes
      </h2>

      <div className="max-w-6xl mx-auto relative">
        <Carousel className="w-full">
          <CarouselContent>
            {cleanings.map((cleaning) => (
              <CarouselItem
                key={cleaning.id}
                className="md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative group overflow-hidden rounded-lg h-64 m-1">
                  <img
                    src={cleaning.image}
                    alt={cleaning.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#A0D5CD]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-[#A0D5CD] font-medium text-lg">
                      Ver mais
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
            <CarouselPrevious className="bg-white shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
            <CarouselNext className="bg-white shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-8">
          {cleanings.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === 0 ? "bg-[#A0D5CD]" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
