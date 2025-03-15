import { Star, CheckCircle, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      text: "Equipe profissional e experiente",
      icon: <CheckCircle className="w-5 h-5 text-[#A0D5CD]" />,
    },
    {
      text: "Serviço de limpeza rápido e eficiente",
      icon: <Clock className="w-5 h-5 text-[#A0D5CD]" />,
    },
    {
      text: "100% de satisfação garantida",
      icon: <Award className="w-5 h-5 text-[#A0D5CD]" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-5/12"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Cleaning Team"
                className="rounded-lg shadow-xl mb-8"
              />
              {/* Borda decorativa */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-4 border-[#A0D5CD] rounded-lg -z-10"></div>
            </div>

            <div className="w-1 h-16 bg-[#A0D5CD] mx-auto"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white shadow-lg rounded-lg p-6 mt-8"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=AJHanna"
                  alt="Admin"
                  className="w-12 h-12 rounded-full border-2 border-[#A0D5CD]"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">A.J Hanna</h4>
                  <p className="text-sm text-[#A0D5CD] font-medium">
                    Fundador & CEO
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nossa missão é fornecer serviços de limpeza excepcionais,
                mantendo os mais altos padrões de profissionalismo e satisfação
                do cliente."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-6/12 flex flex-col items-center"
          >
            <h2 className="text-4xl font-bold text-[#A0D5CD] mb-8 text-center">
              Sobre Nós
            </h2>
            <div className="border-2 border-[#A0D5CD]/30 rounded-lg p-8 bg-white/50 shadow-md max-w-xl mx-auto">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center p-4 rounded-lg hover:bg-[#A0D5CD]/5 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-[#A0D5CD]/30 rounded-full flex items-center justify-center mr-4">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-medium">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex justify-center mt-8"
            >
              <button className="bg-[#A0D5CD] text-white px-8 py-4 rounded-full hover:bg-[#8BC0B8] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300">
                Ver Serviços
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
