import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Trash,
  Grid,
  BrushIcon,
  WashingMachine,
  Wind,
  Sparkles,
} from "lucide-react";

const businessServices = [
  {
    id: 1,
    title: "Limpeza Comercial",
    description:
      "Serviços profissionais para escritórios e espaços comerciais, mantendo seu ambiente de trabalho impecável e saudável.",
    additionalText:
      "Nossos serviços de limpeza comercial incluem limpeza regular de escritórios, limpeza de carpetes, manutenção de pisos, limpeza de janelas e higienização de áreas comuns. Usamos produtos ecológicos e seguimos as melhores práticas do setor para garantir um ambiente de trabalho limpo e saudável.",
    icon: (
      <Building2 className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    id: 2,
    title: "Limpeza de Eventos",
    description:
      "Serviços rápidos e eficientes para limpar espaços antes, durante e após eventos, deixando tudo organizado novamente.",
    additionalText:
      "Nossos serviços de limpeza de eventos são perfeitos para conferências, festas, casamentos e eventos corporativos. Fornecemos limpeza pré-evento, manutenção durante o evento e limpeza pós-evento para garantir que seu local esteja impecável antes, durante e após sua ocasião especial.",
    icon: (
      <Trash className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    id: 3,
    title: "Limpeza de Vidros",
    description:
      "Limpeza especializada de janelas e superfícies de vidro, garantindo brilho e transparência perfeitos em qualquer altura.",
    additionalText:
      "Nossos serviços profissionais de limpeza de vidros utilizam técnicas e equipamentos avançados para deixar suas janelas impecáveis e sem manchas. Lidamos com janelas de todos os tamanhos e alturas, incluindo áreas de difícil acesso, para garantir vistas cristalinas e melhor iluminação natural.",
    icon: (
      <Grid className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
];

const homeServices = [
  {
    id: 4,
    title: "Limpeza Residencial",
    description:
      "Serviços profissionais para sua casa, garantindo ambientes limpos e saudáveis para toda a sua família.",
    additionalText:
      "Nossos serviços de limpeza residencial são adaptados às suas necessidades específicas. Oferecemos limpeza regular de manutenção, limpeza profunda e serviços especializados como limpeza de carpetes, limpeza de estofados e muito mais. Nossa equipe usa produtos ecológicos que são seguros para sua família e animais de estimação.",
    icon: (
      <Home className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    id: 5,
    title: "Limpeza Profunda",
    description:
      "Serviço intensivo que vai além da limpeza regular para eliminar sujeira acumulada, germes e bactérias em áreas críticas.",
    additionalText:
      "Nosso serviço de limpeza profunda vai além da limpeza regular para lidar com sujeira acumulada, gordura e bactérias. Limpamos áreas que geralmente são negligenciadas, incluindo atrás de eletrodomésticos, dentro de armários, rodapés, ventiladores de teto e muito mais. Perfeito para limpeza sazonal ou antes/depois de eventos especiais.",
    icon: (
      <BrushIcon className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
  {
    id: 6,
    title: "Limpeza Pré/Pós Mudança",
    description:
      "Garantimos que sua nova casa esteja impecável antes de se mudar ou que sua antiga casa fique perfeita ao sair.",
    additionalText:
      "Nosso serviço de limpeza pré/pós-mudança garante que sua nova casa esteja impecável antes de você se mudar ou que sua antiga casa esteja impecável quando você sair. Limpamos todas as superfícies, incluindo armários, eletrodomésticos, janelas, pisos e banheiros para ajudá-lo a recuperar seu depósito de segurança ou começar do zero em seu novo espaço.",
    icon: (
      <WashingMachine className="w-12 h-12 text-[#A0D5CD] group-hover:text-white transition-colors duration-300" />
    ),
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"business" | "home">("business");
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = activeTab === "business" ? businessServices : homeServices;

  const toggleServiceDetails = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 max-w-6xl mx-auto"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A0D5CD]">
            Principais Serviços
          </h2>
          <p className="text-gray-600 max-w-xl">
            Elevando o padrão de Limpeza & Desinfecção através de Gestão
            Qualificada, Processos Eficientes e Serviço de Segurança
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 md:mt-0"
        >
          <div className="bg-gray-100 p-1 rounded-md inline-flex">
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeTab === "business" ? "bg-[#A0D5CD] text-white shadow-md" : "text-gray-700 hover:text-[#A0D5CD]"}`}
            >
              Negócio
            </button>
            <button
              onClick={() => setActiveTab("home")}
              className={`px-6 py-2 rounded-md transition-colors duration-300 ${activeTab === "home" ? "bg-[#A0D5CD] text-white shadow-md" : "text-gray-700 hover:text-[#A0D5CD]"}`}
            >
              Casa
            </button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          exit={{ opacity: 0, y: 10 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-6 rounded-lg hover:bg-[#A0D5CD] group transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 h-full flex flex-col"
            >
              <div className="text-[#A0D5CD] mb-4 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white mb-6 text-sm transition-colors flex-grow">
                {service.description}
              </p>
              <div className="group-hover:hidden">
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 mb-6 text-sm text-gray-600 transition-colors"
                  >
                    {service.additionalText}
                  </motion.div>
                )}
              </div>
              <div className="hidden group-hover:block mt-4 mb-6 text-sm text-white transition-colors">
                {service.additionalText}
              </div>
              <Button
                variant="outline"
                className="border-[#A0D5CD] text-[#A0D5CD] group-hover:border-white group-hover:text-[#A0D5CD] transition-colors hover:text-[#A0D5CD] group-hover:bg-white mt-auto"
                onClick={() => toggleServiceDetails(service.id)}
              >
                {expandedService === service.id ? "Ler Menos" : "Ler Mais"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
