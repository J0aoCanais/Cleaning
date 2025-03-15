import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils/index";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    service: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log(formData);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="max-h-screen bg-gray-50">
      <Navbar />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-1">
              Fale <span className="text-[#A0D5CD]">connosco</span>
            </h1>
            <p className="mb-8 text-gray-600 max-w-md">
              Enim tempor eget praesent facilisis sed maecenas adipiscing. Eu
              leo molestie vel eros non sit blandit natus.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Número de Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço da Limpeza (Não obrigatório)"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="date"
                  placeholder="Data da Limpeza dd/mm/aaa (Não obrigatório)"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="service"
                  placeholder="Tipo de Serviço (Não obrigatório)"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded p-2"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-200 rounded p-2"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreement: checked }))
                  }
                />
                <Label htmlFor="agreement" className="text-sm text-gray-600">
                  I want to protect my data by signing an NDA
                </Label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-white border border-gray-300 text-gray-800 font-medium rounded"
              >
                ENVIAR
              </button>
            </form>

            <div className="flex mt-8 space-x-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">PHONE</p>
                  <p className="text-sm text-gray-700">+1123-456-789</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-MAIL</p>
                  <p className="text-sm text-gray-700">info@limpeza.com</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-MAIL</p>
                  <p className="text-sm text-gray-700">info@orçamentos.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-1/2">
            <div className="relative h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-8.1359178!3d38.5578487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e49953e2d2a9%3A0xcd2146d6eb5be0e4!2s%C3%89vora%20District%2C%20Portugal!5e0!3m2!1sen!2sus!4v1652367931225!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-[200px]">
                <h3 className="text-sm font-semibold text-[#A0D5CD]">
                  Headquarters
                </h3>
                <p className="text-xs text-gray-600">Company + &amp; Co.</p>
                <p className="text-xs text-gray-600">Street, 31</p>
                <p className="text-xs text-gray-600">100 ID Pragae</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
