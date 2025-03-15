export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
        alt="Office Cleaning"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <img src="/logoLimpezas2.svg" alt="Limpas Logo" className="h-48 mb-8" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Descansa, Eles
          <br />
          Limpam!
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          While you're busy with business endeavors, we will put things in order
          in the workplace and create house of comfort.
        </p>
      </div>
    </section>
  );
}
