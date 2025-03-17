import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils/index";
import { ArrowRight, Quote, Twitter, Facebook } from "lucide-react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Limpezas() {
  const [sliderPosition1, setSliderPosition1] = useState(50);
  const [sliderPosition2, setSliderPosition2] = useState(50);
  const [sliderPosition3, setSliderPosition3] = useState(50);
  const [sliderPosition4, setSliderPosition4] = useState(50);

  // Stats counter state
  const [clientCount, setClientCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  const handleSliderChange = (e, setPosition) => {
    setPosition(e.target.value);
  };

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          // Start animations when section is visible
          animateCounter(0, 70, setClientCount);
          animateCounter(0, 20, setTeamCount);
          animateCounter(0, 60, setProjectCount);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounter = (start, end, setCounter) => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const increment = (end - start) / totalFrames;

    let currentFrame = 0;
    let currentValue = start;

    const animate = () => {
      currentFrame++;
      currentValue += increment;

      setCounter(Math.floor(currentValue));

      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setCounter(end);
      }
    };

    animate();
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-16">
          <div className="text-left text-white max-w-3xl">
            <p className="text-gray-200 mb-2 text-sm md:text-base">
              A melhor empresa de limpeza da Sua Cidade
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              Seja o nosso próximo caso de sucesso
            </h1>
            <p className="text-gray-200 mb-4 md:mb-6 max-w-xl text-sm md:text-base">
              Oferecemos serviços de limpeza profissional para garantir que o
              seu espaço esteja sempre impecável e acolhedor.
            </p>
            <button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white px-4 md:px-6 py-2 md:py-3 rounded-md transition duration-300 text-sm md:text-base">
              Contacte-nos
            </button>
          </div>
        </div>
      </div>

      {/* Industrial Cleaning Section */}
      <section className="py-10 md:py-16 bg-[#F6FAFF]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center mb-8 md:mb-12 text-3xl md:text-5xl font-semibold text-[#A0D5CD] py-2 md:py-4">
            Limpezas na indústria
          </h2>

          <div className="mb-12">
            {/* First before-after slider */}
            <div className="bg-white rounded-[25px] overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 px-4 md:px-6 pb-6 pt-6 md:pt-8 relative flex flex-col items-center text-center">
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png.svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                  <blockquote className="text-black-600 pt-4 text-base md:text-xl font-semibold leading-relaxed">
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-xs md:text-sm font-normal leading-relaxed">
                        Pedro Oliveira
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png (1).svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative h-80 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `polygon(0 0, ${sliderPosition1}% 0, ${sliderPosition1}% 100%, 0 100%)`,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="h-full w-0.5 bg-white"
                        style={{
                          left: `${sliderPosition1}%`,
                          position: "absolute",
                        }}
                      ></div>
                      <div
                        className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{
                          left: `${sliderPosition1}%`,
                          position: "absolute",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-180" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-0" />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition1}
                      onChange={(e) =>
                        handleSliderChange(e, setSliderPosition1)
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end pb-10">
              <Link
                to={createPageUrl("contacto")}
                className="flex text-black justify-center text-base md:text-xl font-semibold"
              >
                Pedir Orçamento{" "}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1" />
              </Link>
            </div>

            {/* Second before-after slider */}
            <div className="bg-white rounded-[25px] overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 relative h-80 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `polygon(0 0, ${sliderPosition2}% 0, ${sliderPosition2}% 100%, 0 100%)`,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="h-full w-0.5 bg-white"
                        style={{
                          left: `${sliderPosition2}%`,
                          position: "absolute",
                        }}
                      ></div>
                      <div
                        className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{
                          left: `${sliderPosition2}%`,
                          position: "absolute",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-180" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-0" />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition2}
                      onChange={(e) =>
                        handleSliderChange(e, setSliderPosition2)
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 px-4 md:px-6 pb-6 pt-6 md:pt-8 relative flex flex-col items-center text-center">
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png.svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                  <blockquote className="text-black-600 pt-4 text-base md:text-xl font-semibold leading-relaxed">
                    Another amazing experience! The team was professional and
                    exceeded expectations. Highly recommended.
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-xs md:text-sm font-normal leading-relaxed">
                        Maria Silva
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png (1).svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <Link
              to={createPageUrl("contacto")}
              className="flex text-black justify-center text-base md:text-xl font-semibold"
            >
              Pedir Orçamento{" "}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-[#A0D5CD]" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 md:mb-2 leading-tight">
                Mais de 5 Anos de Serviço
              </h2>
              <p className="text-white mb-8 text-base md:text-2xl font-semibold leading-relaxed pt-4 md:pt-10 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur non lobortis nibh, nec scelerisque eros. Fusce aliquam
                convallis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur non lobortis nibh, nec scelerisque eros.
              </p>
              <button className="bg-white hover:bg-[#8BC0B8] text-[#A0D5CD] transition duration-300 w-full md:w-auto px-6 py-3 md:py-4 rounded-full font-bold text-lg md:text-2xl">
                Contacte-nos
              </button>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4 md:gap-12">
                <div className="flex items-center justify-center">
                  <div className="bg-white p-4 md:p-6 shadow-md text-center w-full max-w-[160px] md:max-w-[200px] h-[160px] md:h-[200px] flex flex-col justify-center rounded-lg">
                    <p className="mb-1 md:mb-2 text-3xl md:text-5xl font-bold text-black">
                      {clientCount}+
                    </p>
                    <p className="text-sm md:text-base text-black">Clientes</p>
                    <p className="text-sm md:text-base text-black">
                      Satisfeitos
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-12">
                  <div className="bg-white p-4 md:p-6 shadow-md text-center w-full max-w-[160px] md:max-w-[200px] h-[160px] md:h-[200px] flex flex-col justify-center rounded-lg">
                    <p className="mb-1 md:mb-2 text-3xl md:text-5xl font-bold text-black">
                      {teamCount}+
                    </p>
                    <p className="text-sm md:text-base text-black">Equipa</p>
                    <p className="text-sm md:text-base text-black">
                      Profissional
                    </p>
                  </div>
                  <div className="bg-white p-4 md:p-6 shadow-md text-center w-full max-w-[160px] md:max-w-[200px] h-[160px] md:h-[200px] flex flex-col justify-center rounded-lg">
                    <p className="mb-1 md:mb-2 text-3xl md:text-5xl font-bold text-black">
                      {projectCount}+
                    </p>
                    <p className="text-sm md:text-base text-black">Projetos</p>
                    <p className="text-sm md:text-base text-black">
                      Concluídos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Cleaning Section */}
      <section className="py-10 md:py-16 bg-[#F6FAFF]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center mb-8 md:mb-12 text-3xl md:text-5xl font-semibold text-[#A0D5CD] py-2 md:py-4">
            Limpezas a particulares
          </h2>

          <div className="mb-12">
            {/* First before-after slider */}
            <div className="bg-white rounded-[25px] overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 px-4 md:px-6 pb-6 pt-6 md:pt-8 relative flex flex-col items-center text-center">
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png.svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                  <blockquote className="text-black-600 pt-4 text-base md:text-xl font-semibold leading-relaxed">
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-xs md:text-sm font-normal leading-relaxed">
                        Pedro Oliveira
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png (1).svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative h-80 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `polygon(0 0, ${sliderPosition3}% 0, ${sliderPosition3}% 100%, 0 100%)`,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="h-full w-0.5 bg-white"
                        style={{
                          left: `${sliderPosition3}%`,
                          position: "absolute",
                        }}
                      ></div>
                      <div
                        className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{
                          left: `${sliderPosition3}%`,
                          position: "absolute",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-180" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-0" />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition3}
                      onChange={(e) =>
                        handleSliderChange(e, setSliderPosition3)
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end pb-10">
              <Link
                to={createPageUrl("contacto")}
                className="flex text-black justify-center text-base md:text-xl font-semibold"
              >
                Pedir Orçamento{" "}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1" />
              </Link>
            </div>

            {/* Second before-after slider */}
            <div className="bg-white rounded-[25px] overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 relative h-80 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `polygon(0 0, ${sliderPosition4}% 0, ${sliderPosition4}% 100%, 0 100%)`,
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="h-full w-0.5 bg-white"
                        style={{
                          left: `${sliderPosition4}%`,
                          position: "absolute",
                        }}
                      ></div>
                      <div
                        className="h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center"
                        style={{
                          left: `${sliderPosition4}%`,
                          position: "absolute",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-180" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-0" />
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition4}
                      onChange={(e) =>
                        handleSliderChange(e, setSliderPosition4)
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 px-4 md:px-6 pb-6 pt-6 md:pt-8 relative flex flex-col items-center text-center">
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png.svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                  <blockquote className="text-black-600 pt-4 text-base md:text-xl font-semibold leading-relaxed">
                    Another amazing experience! The team was professional and
                    exceeded expectations. Highly recommended.
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-xs md:text-sm font-normal leading-relaxed">
                        Maria Silva
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="../public/icon-testimonial.png (1).svg" // Substitua pelo caminho do logo
                      alt="Logo"
                      className="w-12 h-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <Link
              to={createPageUrl("contacto")}
              className="flex text-black justify-center text-base md:text-xl font-semibold"
            >
              Pedir Orçamento{" "}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
