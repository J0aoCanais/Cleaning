import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Serviços", link: "/servicos" },
    { name: "Limpezas", link: "/limpezas" },
    { name: "Sobre Nós", link: "/sobre" },
    { name: "Contacto", link: "/contacto" },
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+351 123 456 789" },
    { icon: <Mail className="w-5 h-5" />, text: "info@limpas.com" },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "123 Main Street, City, Country",
    },
    { icon: <Clock className="w-5 h-5" />, text: "Seg-Sex: 8:00 - 18:00" },
  ];

  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, link: "#" },
    { icon: <Instagram className="w-5 h-5" />, link: "#" },
    { icon: <Twitter className="w-5 h-5" />, link: "#" },
    { icon: <Linkedin className="w-5 h-5" />, link: "#" },
  ];

  return (
    <footer className="bg-[#A0D5CD] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:pl-4 lg:pl-8">
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Links
            <span className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-white/40"></span>
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="text-white hover:text-white/80 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Social media
            <span className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-white/40"></span>
          </h3>
          <div className="flex space-x-6 justify-center mt-4">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-10">
            <h4 className="text-sm font-semibold mb-3 text-white/90">
              INSCREVA-SE PARA NOVIDADES
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-white/10 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-white/50 w-full"
              />
              <button className="bg-white text-[#A0D5CD] px-4 py-2 rounded-r-md hover:bg-white/90 transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="md:text-right md:pr-4 lg:pr-8">
          <h3 className="text-xl font-semibold mb-6 relative inline-block">
            Contact info
            <span className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-white/40"></span>
          </h3>
          <ul className="space-y-3">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start md:justify-end">
                <div className="mr-3 mt-1 text-white/80">{item.icon}</div>
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap justify-between items-center text-white/80">
        <div className="text-sm">
          <p>Designed and developed by</p>
          <p className="font-bold">PIXEL WEB</p>
        </div>
        <p>Termos e Condições | Política de Privacidade</p>
      </div>
    </footer>
  );
}
