import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils/index";
import { Check, ChevronDown, Facebook, Twitter, Instagram } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Servicos() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "residential",
      title: "Limpeza de Casas Particulares",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      features: [
        "Our team professional and experienced.",
        "Quick and efficient cleaning service.",
        "Quick and efficient cleaning service.",
        "Quick and efficient cleaning service.",
      ],
    },
    {
      id: "commercial",
      title: "Limpeza de Escritórios, Espaços Comerciais e Clínicas",
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      features: [
        "Professional cleaning staff.",
        "Specialized equipment and supplies.",
        "Flexible scheduling options.",
        "Customized cleaning plans.",
      ],
    },
    {
      id: "postConstruction",
      title: "Pós Obra",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      features: [
        "Dust and debris removal.",
        "Surface cleaning and polishing.",
        "Deep cleaning of all areas.",
        "Final inspection quality control.",
      ],
    },
    {
      id: "tourism",
      title: "Alojamentos Turísticos",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      features: [
        "Pristine cleaning standards.",
        "Turnover cleaning services.",
        "Linen change and laundry.",
        "Restocking of amenities.",
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Pedido de Orçamento",
      description:
        "Some paragraph text to explain why size of property will affect the price.",
    },
    {
      number: "2",
      title: "Agendamento da Limpeza",
      description:
        "Some paragraph text to explain why the cleaning frequency will affect the price.",
    },
    {
      number: "3",
      title: "Execução da Limpeza",
      description:
        "Some paragraph text to explain why the type of cleaning will affect the price.",
    },
    {
      number: "4",
      title: "Revisão e Satifação",
      description:
        "Some paragraph text to explain why any additional services will affect the price.",
    },
  ];

  const faqQuestions = [
    {
      question: "What do you not clean?",
      answer:
        "Oferecemos serviços completos de limpeza para residências, escritórios, clínicas, espaços comerciais, alojamentos turísticos e limpeza pós-obra.",
    },
    {
      question: "Do I need to be home for every cleaning service?",
      answer:
        "Não é necessário estar presente durante o serviço, mas é preciso garantir o acesso à propriedade.",
    },
    {
      question: "How will our relationship work?",
      answer:
        "Espere um serviço profissional, eficiente e de alta qualidade, realizado por profissionais qualificados e comprometidos com a sua satisfação.",
    },
    {
      question: "What time does your team arrive?",
      answer:
        "Nossa equipe chega no horário agendado, com pontualidade e eficiência para realizar o serviço no tempo programado.",
    },
  ];

  return (
    <div className="max-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        }}
      >
        <div className="text-center text-white z-10">
          <img
            src="/logoLimpezas2.svg"
            alt="Logo"
            className="w-20 h-20 object-contain mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-2">
            Profissionais em
            <br />
            Serviços de limpeza
          </h1>
          <p className="text-lg">
            Soluções de limpeza profissional para residências e empresas
          </p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-[#A0D5CD] text-center py-20">
        <div className="w-full px-0">
          <h2 className="text-3xl font-bold text-center text-white py-10">
            Os nossos serviços
          </h2>

          <div className="grid grid-cols-1 gap-0 w-full overflow-hidden">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden cursor-pointer transition-all duration-500 h-80 w-screen -mx-4"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white text-center mb-4">
                    {service.title}
                  </h3>

                  {hoveredService === service.id && (
                    <div className="px-8 py-4 flex flex-col items-center">
                      <div className="space-y-2 text-white">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-white bg-[#A0D5CD] rounded-sm p-1" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-[#A0D5CD] pt-8 pb-28">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            Todo o processo
          </h2>
          <p className="text-center text-white mb-16 max-w-2xl mx-auto">
            Some paragraph text that will explain the importance of such reason
            why the user should choose this cleaning company.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative min-h-[200px]">
                <div className="text-[250px] font-bold text-white/10 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-6 text-white relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-white max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                FREQUENTLY ASKED QUESTION
              </p>
              <h2 className="text-4xl font-light text-[#A0D5CD] mb-10">
                Obtenha respostas às suas questões
              </h2>

              <Accordion type="single" collapsible className="mb-8 space-y-4">
                {faqQuestions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="mb-4 bg-white rounded-lg shadow-sm"
                  >
                    <AccordionTrigger className="text-gray-800 font-medium text-left py-4 px-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-4 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <button className="bg-[#A0D5CD] text-white px-6 py-2 rounded-full hover:bg-[#8BC0B8] transition duration-300">
                Contacte-nos
              </button>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning Service"
                  className="rounded-lg w-full h-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning Service"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning Service"
                  className="rounded-lg w-full h-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1585421514284-efb74320a1d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Cleaning Service"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
