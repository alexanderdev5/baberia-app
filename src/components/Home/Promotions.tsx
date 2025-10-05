import React from "react";
import { FiClock, FiTag, FiCalendar } from "react-icons/fi";

const Promotions = () => {
  const promotions = [
    {
      title: "Primer Tatuaje",
      discount: "20%",
      description: "Descuento especial en tu primer tatuaje con nosotros",
      validUntil: "2024-12-31",
      code: "TATUAJE20",
      bgGradient: "from-purple-600/20 to-red-600/20",
      borderColor: "border-purple-500/50",
      textColor: "text-purple-400",
      popular: true
    },
    {
      title: "Combo Barbería",
      discount: "30%",
      description: "Corte + Barba + Tratamiento facial completo",
      validUntil: "2024-11-30",
      code: "BARBER30",
      bgGradient: "from-amber-600/20 to-red-600/20",
      borderColor: "border-amber-500/50",
      textColor: "text-amber-400",
      popular: false
    },
    {
      title: "Estudiante",
      discount: "15%",
      description: "Descuento permanente para estudiantes con credencial",
      validUntil: "Permanente",
      code: "STUDENT15",
      bgGradient: "from-green-600/20 to-blue-600/20",
      borderColor: "border-green-500/50",
      textColor: "text-green-400",
      popular: false
    }
  ];

  const calculateDaysLeft = (dateString: string) => {
    if (dateString === "Permanente") return "∞";
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 via-transparent to-amber-500/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-montserrat inline-flex items-center bg-amber-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-amber-500/30">
            <FiTag className="text-amber-400 mr-2" size={16} />
            <span className="text-amber-400 text-sm font-bold">OFERTAS ESPECIALES</span>
          </div>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Promociones Exclusivas
            </span>
          </h2>
          <p className="font-montserrat text-xl text-gray-300 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas limitadas y lleva tu estilo al siguiente nivel
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${promo.bgGradient} backdrop-blur-lg rounded-3xl p-8 border-2 ${promo.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Popular Badge */}
              {promo.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="font-montserrat bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                    <FiTag className="mr-1" size={12} />
                    MÁS SOLICITADO
                  </div>
                </div>
              )}

              {/* Discount Circle */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-black/50 rounded-full flex items-center justify-center border-2 border-white/20">
                    <span className="font-oswald text-3xl font-black text-white">
                      {promo.discount}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-400 animate-spin-slow"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-oswald text-2xl font-bold text-white text-center mb-3">
                {promo.title}
              </h3>
              <p className="font-montserrat text-gray-300 text-center mb-6 leading-relaxed">
                {promo.description}
              </p>

              {/* Code & Timer */}
              <div className="bg-black/40 rounded-2xl p-4 mb-6 border border-white/10">
                <div className="text-center">
                  <div className="font-montserrat text-sm text-gray-400 mb-2">CÓDIGO PROMOCIONAL</div>
                  <div className="font-oswald text-2xl font-black text-white tracking-widest">
                    {promo.code}
                  </div>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center justify-between bg-black/30 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center">
                  <FiClock className={`${promo.textColor} mr-2`} size={18} />
                  <span className="font-montserrat text-sm text-gray-300">Termina en:</span>
                </div>
                <div className="font-oswald text-lg font-bold text-white">
                  {calculateDaysLeft(promo.validUntil)} {promo.validUntil === "Permanente" ? "" : "días"}
                </div>
              </div>

              {/* CTA Button */}
              <button className={`font-montserrat w-full mt-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${promo.bgGradient.replace('/20', '')} hover:shadow-lg hover:scale-105 border ${promo.borderColor}`}>
                Aplicar Oferta
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="font-montserrat inline-flex items-center bg-gray-800/50 backdrop-blur-lg rounded-2xl px-6 py-4 border border-gray-600/50">
            <FiCalendar className="text-amber-400 mr-3" size={20} />
            <span className="text-gray-300">
              <strong className="text-white">Todas las promociones</strong> aplican con cita previa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;