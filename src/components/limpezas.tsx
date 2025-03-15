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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16">
          <div className="text-left text-white max-w-3xl">
            <p className="text-gray-200 mb-2">
              A melhor empresa de limpeza da Sua Cidade
            </p>
            <h1 className="text-5xl font-bold mb-4">
              Seja o nosso próximo caso de sucesso
            </h1>
            <p className="text-gray-200 mb-6 max-w-xl">
              Oferecemos serviços de limpeza profissional para garantir que o
              seu espaço esteja sempre impecável e acolhedor.
            </p>
            <button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white px-6 py-3 rounded-md transition duration-300">
              Contacte-nos
            </button>
          </div>
        </div>
      </div>

      {/* Industrial Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-[#A0D5CD] text-center mb-12">
            Limpezas na indústria
          </h2>

          <div className="mb-12">
            {/* First before-after slider */}
            <div className="bg-white rounded-lg overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 p-6 relative">
                  <div className="absolute -right-3 top-0 transform bg-[#A0D5CD]/20 rounded-full p-4 z-10">
                    <Quote className="w-6 h-6 text-[#A0D5CD]" />
                  </div>
                  <blockquote className="mr-6 text-gray-600 text-center mt-8">
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="font-semibold">Pedro Oliveira</p>
                      <p className="text-sm text-gray-500">CEO</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative h-64 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition1}%` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
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
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-90" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-90" />
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

            {/* Second before-after slider */}
            <div className="bg-white rounded-lg overflow-hidden relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 relative h-64 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition2}%` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
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
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-90" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-90" />
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
                <div className="col-span-12 md:col-span-6 p-6 relative">
                  <div className="absolute -left-3 top-0 transform bg-[#A0D5CD]/20 rounded-full p-4 z-10">
                    <Quote className="w-6 h-6 text-[#A0D5CD]" />
                  </div>
                  <blockquote className="ml-6 text-gray-600 text-center mt-8">
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="font-semibold">Paulo Organizer</p>
                      <p className="text-sm text-gray-500">CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to={createPageUrl("OrcarLimpeza")}
              className="flex items-center bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white px-6 py-3 rounded-md transition duration-300"
            >
              Pedir Orçamento <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#A0D5CD]/10" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Mais De 5 Anos De Serviço
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                mollis ante vel erat cursus, vitae consectetur lacus luctus.
                Suspendisse eget rutrum magna. Aenean a semper dui, ac bibendum
                sem. Praesent egestas felis ut eros maximus, sed lobortis ipsum
                feugiat. Proin a lacinia enim. Mauris vitae nisi ut nisl gravida
                condimentum.
              </p>
              <button className="bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white px-6 py-2 rounded-md transition duration-300">
                Contacte-nos
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-[150px] flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#A0D5CD] mb-2">
                    {clientCount}+
                  </p>
                  <p className="text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-[150px] flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#A0D5CD] mb-2">
                    {teamCount}+
                  </p>
                  <p className="text-gray-600">Equipe de Profissionais</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center h-[150px] flex flex-col justify-center">
                  <p className="text-4xl font-bold text-[#A0D5CD] mb-2">
                    {projectCount}+
                  </p>
                  <p className="text-gray-600">Projetos Concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Cleaning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-light text-[#A0D5CD] text-center mb-12">
            Limpezas a particulares
          </h2>

          <div>
            {/* First before-after slider */}
            <div className="bg-white rounded-lg overflow-hidden relative mb-8">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 p-6 relative">
                  <div className="absolute -right-3 top-0 transform bg-[#A0D5CD]/20 rounded-full p-4 z-10">
                    <Quote className="w-6 h-6 text-[#A0D5CD]" />
                  </div>
                  <blockquote className="mr-6 text-gray-600 text-center mt-8">
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="font-semibold">Pedro Oliveira</p>
                      <p className="text-sm text-gray-500">Cliente</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative h-64 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition3}%` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
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
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-90" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-90" />
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

            {/* Second before-after slider */}
            <div className="bg-white rounded-lg overflow-hidden relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 relative h-64 overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt="Before Cleaning"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition4}%` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1585421514284-efb74320a1d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="After Cleaning"
                        className="absolute inset-0 w-full h-full object-cover"
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
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] -rotate-90" />
                        <ArrowRight className="w-4 h-4 text-[#A0D5CD] rotate-90" />
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
                <div className="col-span-12 md:col-span-6 p-6 relative">
                  <div className="absolute -left-3 top-0 transform bg-[#A0D5CD]/20 rounded-full p-4 z-10">
                    <Quote className="w-6 h-6 text-[#A0D5CD]" />
                  </div>
                  <blockquote className="ml-6 text-gray-600 text-center mt-8">
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                    What a great experience! I was skeptical of professional
                    cleaningers, and kept on using Googlers. Highly recommended.
                    <span className="text-2xl text-[#A0D5CD] font-serif">
                      "
                    </span>
                  </blockquote>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="font-semibold">Paulo Organizer</p>
                      <p className="text-sm text-gray-500">Cliente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to={createPageUrl("OrcarLimpeza")}
              className="flex items-center bg-[#A0D5CD] hover:bg-[#8BC0B8] text-white px-6 py-3 rounded-md transition duration-300"
            >
              Pedir Orçamento <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
