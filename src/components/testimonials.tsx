import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Liam Nohkan",
    position: "Cliente Residencial",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
    text: "Serviço excepcional! A equipe de limpeza superou todas as expectativas. Minha casa nunca esteve tão limpa e organizada. Recomendo fortemente!",
  },
  {
    id: 2,
    name: "Sofia Martinez",
    position: "Gerente de Escritório",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    text: "Profissionalismo e atenção aos detalhes! Os limpadores foram educados e fizeram um trabalho excepcional com nosso escritório. Certamente contrataremos novamente.",
  },
  {
    id: 3,
    name: "João Silva",
    position: "Cliente Residencial",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    text: "Rápido, eficiente e meticuloso. Minha casa nunca esteve melhor. A equipe foi respeitosa e usou produtos ecológicos, o que é um grande diferencial.",
  },
  {
    id: 4,
    name: "Emily Parker",
    position: "Proprietária",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    text: "Serviço incrível! Eles transformaram completamente nossa bagunça pós-construção em um espaço de vida impecável. Trabalho verdadeiramente excepcional.",
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#A0D5CD]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          O que os nossos melhores clientes
          <br />
          dizem sobre nós
        </h2>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="gap-2 md:gap-4 px-2 md:px-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-1 md:p-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-3 md:p-5 rounded-2xl shadow-md h-full flex flex-col relative text-base"
                >
                  {/* Ícone de aspas */}
                  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-[#A0D5CD] rounded-full p-1 md:p-2 shadow-md">
                    <Quote className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>

                  <div className="flex justify-end mb-2 md:mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#A0D5CD"
                          stroke="#A0D5CD"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="md:w-[14px] md:h-[14px]"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-center flex-grow mb-3 md:mb-4 text-xs md:text-sm italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 border-2 border-[#A0D5CD]"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-xs md:text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-[#A0D5CD]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-white w-6 h-6 md:w-8 md:h-8 shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
          <div className="hidden md:block absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 z-10">
            <CarouselNext className="bg-white w-6 h-6 md:w-8 md:h-8 shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
