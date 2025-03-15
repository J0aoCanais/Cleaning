import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#A0D5CD]">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center">
        <div className="md:max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-[#A0D5CD]">
            Contacte-nos
          </h2>
          <p className="text-left text-gray-600 mt-2">
            Caso tenha alguma dúvida ou esteja interessado no nosso serviço não
            hesite em contactar-nos
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <Button className="bg-[#A0D5CD] text-white hover:bg-[#8BC0B8] px-8 py-6 text-lg rounded-full">
            Contacte-nos
          </Button>
        </div>
      </div>
    </section>
  );
}
