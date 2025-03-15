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
  {
    id: 5,
    name: "Roberto Costa",
    position: "Diretor Comercial",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
    text: "Qualidade confiável e consistente. Estamos usando seus serviços para nossa empresa há mais de um ano, e eles nunca decepcionam. Excelente relação custo-benefício.",
  },
  {
    id: 6,
    name: "Laura Wilson",
    position: "Cliente Regular",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
    text: "A atenção aos detalhes é notável. Eles limpam lugares que eu nem sabia que precisavam de limpeza! Ótimo custo-benefício e equipe muito profissional.",
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

      <div className="max-w-7xl mx-auto relative">
        <Carousel className="w-full">
          <CarouselContent className="gap-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/5 p-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col relative"
                >
                  {/* Ícone de aspas */}
                  <div className="absolute -top-3 -left-3 bg-[#A0D5CD] rounded-full p-2 shadow-md">
                    <Quote className="w-4 h-4 text-white" />
                  </div>

                  <div className="flex justify-end mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#A0D5CD"
                          stroke="#A0D5CD"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 text-center flex-grow mb-6 text-base italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[#A0D5CD]"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#A0D5CD]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
            <CarouselPrevious className="bg-white w-10 h-10 shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
            <CarouselNext className="bg-white w-10 h-10 shadow-md hover:bg-[#A0D5CD] hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
