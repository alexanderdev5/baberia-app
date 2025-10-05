import React from "react";
import { FiScissors, FiDroplet, FiUser, FiShield } from "react-icons/fi";

const FeaturedServices = () => {
  const services = [
    {
      icon: FiScissors,
      title: "Cortes Premium",
      description: "Estilos modernos y clásicos con las últimas técnicas de barbería",
      features: ["Corte clásico", "Fade moderno", "Barba y bigote", "Afeitado tradicional"],
      price: "Desde $25",
      popular: true
    },
    {
      icon: FiDroplet,
      title: "Tatuajes Artísticos",
      description: "Diseños únicos y personalizados creados por artistas especializados",
      features: ["Black & Gray", "Color profesional", "Cover-up", "Diseño personalizado"],
      price: "Desde $80",
      popular: false
    },
    {
      icon: FiUser,
      title: "Asesoría de Estilo",
      description: "Consultoría personalizada para encontrar tu look perfecto",
      features: ["Análisis facial", "Estilo personal", "Mantenimiento", "Productos recomendados"],
      price: "Gratis con cita",
      popular: true
    },
    {
      icon: FiShield,
      title: "Tratamientos Premium",
      description: "Cuidados especializados para piel y barba",
      features: ["Mascarillas faciales", "Aceites para barba", "Limpieza profunda", "Hidratación"],
      price: "Desde $15",
      popular: false
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-red-500 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-amber-400 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-montserrat inline-flex items-center bg-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-red-500/30">
            <FiScissors className="text-red-400 mr-2" size={16} />
            <span className="text-red-400 text-sm font-bold">NUESTROS SERVICIOS</span>
          </div>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Servicios Premium
            </span>
          </h2>
          <p className="font-montserrat text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios de barbería y tatuajes con los más altos estándares de calidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                service.popular 
                  ? "border-red-500/50 hover:border-red-500" 
                  : "border-gray-700/50 hover:border-amber-500/50"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="font-montserrat bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                service.popular 
                  ? "bg-red-500/20 text-red-400" 
                  : "bg-amber-500/20 text-amber-400"
              }`}>
                <service.icon size={32} />
              </div>

              {/* Content */}
              <h3 className="font-oswald text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="font-montserrat text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="font-montserrat space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      service.popular ? "bg-red-500" : "bg-amber-500"
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <span className={`font-oswald text-xl font-bold ${
                  service.popular ? "text-red-400" : "text-amber-400"
                }`}>
                  {service.price}
                </span>
                <button className={`font-montserrat px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  service.popular
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-amber-600 hover:bg-amber-700 text-white"
                }`}>
                  Reservar
                </button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.popular 
                  ? "bg-gradient-to-br from-red-500/5 to-transparent" 
                  : "bg-gradient-to-br from-amber-500/5 to-transparent"
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <button className="font-montserrat bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-2xl font-bold border border-gray-600/50 hover:border-amber-500/50 transition-all duration-300 shadow-2xl">
            Ver Todos Los Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;