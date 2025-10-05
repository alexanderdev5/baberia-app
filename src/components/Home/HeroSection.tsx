import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiScissors, 
  FiCalendar, 
  FiCheck, 
  FiStar, 
  FiAward, 
  FiDroplet, 
  FiUsers, 
  FiMapPin,
  FiClock,
  FiShield
} from "react-icons/fi";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageUrl: string;
  imageAlt: string;
  altText: string;
  badgeText: string;
  trustItems: { icon: "check" | "star" | "award" | "users" | "shield"; text: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  imageUrl,
  imageAlt,
  badgeText,
  trustItems
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-16 sm:py-20 md:py-20 mt-9">
      {/* Background image con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover opacity-80"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-gray-900/70 to-red-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      </div>

      {/* Patrones geométricos temáticos */}
      <div className="absolute inset-0 z-0 opacity-15">
        {/* Tijeras estilizadas */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-500 rotate-45 opacity-60"></div>
        {/* Agujas de tatuaje */}
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-gray-300 rotate-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-red-400"></div>
        </div>
        {/* Gotas de tinta */}
        <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-red-500/20 rounded-full rotate-45"></div>
        {/* Navaja barbera */}
        <div className="absolute bottom-40 left-20 w-20 h-2 bg-gray-300/30 rotate-45">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500/30 rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 text-center mt-6 sm:mt-8 md:mt-0 w-full">
        {/* Badge mejorado */}
        <div className="font-montserrat inline-flex items-center bg-gradient-to-r from-red-600 to-red-800 backdrop-blur-sm rounded-full px-5 py-2.5 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-red-400/50 max-w-full mx-auto shadow-2xl shadow-red-500/20">
          <FiAward className="text-amber-300 mr-3 flex-shrink-0" size={18} />
          <span className="text-white text-sm sm:text-base font-black whitespace-nowrap truncate tracking-wide">
            {badgeText}
          </span>
        </div>

        {/* Título principal con iconos */}
        <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight break-words px-2">
          <span className="bg-gradient-to-r from-red-500 via-amber-500 to-red-400 bg-clip-text text-transparent relative">
            {title}
            <div className="absolute -top-2 -right-4 flex space-x-1">
              <FiScissors className="text-red-400" size={24} />
              <FiDroplet className="text-amber-400" size={24} />
            </div>
          </span>
        </h1>

        {/* Subtítulo con servicios destacados */}
        <p className="font-oswald text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed break-words px-4 sm:px-6 font-semibold">
          {subtitle}
        </p>

        {/* Servicios destacados */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-2xl mx-auto">
          <div className="font-montserrat flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/20">
            <FiScissors className="text-red-400 mr-2" size={20} />
            <span className="text-white font-medium text-sm">Corte Premium</span>
          </div>
          <div className="font-montserrat flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/20">
            <FiDroplet className="text-amber-400 mr-2" size={20} />
            <span className="text-white font-medium text-sm">Tatuajes Artísticos</span>
          </div>
          <div className="font-montserrat flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/20">
            <FiUsers className="text-green-400 mr-2" size={20} />
            <span className="text-white font-medium text-sm">Artistas Expertos</span>
          </div>
        </div>

        {/* Botones mejorados */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 sm:mb-14 px-4 sm:px-6 w-full max-w-2xl mx-auto">
          <Link
            href="/citas"
            className="font-montserrat bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-black shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center group w-full sm:w-auto min-h-[60px] border border-amber-400/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <FiScissors className="mr-4 flex-shrink-0 group-hover:rotate-45 transition-transform" size={24} />
            <span className="truncate">{primaryButtonText}</span>
          </Link>
          <Link
            href="/servicios"
            className="font-montserrat bg-white/15 hover:bg-white/25 backdrop-blur-xl text-white border border-white/40 px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center group w-full sm:w-auto min-h-[60px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="truncate">{secondaryButtonText}</span>
            <FiCalendar className="ml-4 group-hover:translate-x-1 transition-transform flex-shrink-0" size={24} />
          </Link>
        </div>

        {/* Información de ubicación y horario */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 max-w-3xl mx-auto">
          <div className="font-montserrat flex items-center text-white/80">
            <FiMapPin className="text-red-400 mr-2" size={18} />
            <span className="text-sm sm:text-base">Centro de la Ciudad</span>
          </div>
          <div className="font-montserrat flex items-center text-white/80">
            <FiClock className="text-amber-400 mr-2" size={18} />
            <span className="text-sm sm:text-base">Lun-Sáb: 9AM - 8PM</span>
          </div>
          <div className="font-montserrat flex items-center text-white/80">
            <FiShield className="text-green-400 mr-2" size={18} />
            <span className="text-sm sm:text-base">Materiales Estériles</span>
          </div>
        </div>

        {/* Trust items mejorados */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-200 text-sm sm:text-base px-4 max-w-6xl mx-auto">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className="font-montserrat flex items-center bg-white/10 backdrop-blur-lg rounded-2xl px-5 py-3 sm:px-6 sm:py-4 border border-white/15 flex-shrink-0 hover:bg-white/15 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
            >
              {item.icon === "check" && <FiCheck className="text-green-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />}
              {item.icon === "star" && <FiStar className="text-amber-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />}
              {item.icon === "award" && <FiAward className="text-red-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />}
              {item.icon === "users" && <FiUsers className="text-blue-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />}
              {item.icon === "shield" && <FiShield className="text-emerald-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />}
              <span className="whitespace-nowrap font-semibold text-sm sm:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator mejorado */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center">
          <span className="font-montserrat text-white text-sm font-semibold mb-2 bg-black/50 backdrop-blur-lg rounded-full px-4 py-1 border border-white/20">
            Explora Nuestros Servicios
          </span>
          <div className="w-8 h-12 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Badges de redes sociales y contacto */}
      <div className="absolute top-8 right-6 sm:right-8 hidden lg:flex flex-col gap-4">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-4 border border-white/15 hover:border-red-400/50 transition-all duration-300 cursor-pointer group">
          <div className="text-center">
            <div className="font-oswald text-2xl font-black text-red-500 group-hover:scale-110 transition-transform">IG</div>
            <div className="font-montserrat text-white text-xs mt-1">@leninbarber</div>
          </div>
        </div>
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-4 border border-white/15 hover:border-amber-400/50 transition-all duration-300 cursor-pointer group">
          <div className="text-center">
            <div className="font-oswald text-2xl font-black text-amber-500 group-hover:scale-110 transition-transform">FB</div>
            <div className="font-montserrat text-white text-xs mt-1">/leninbarber</div>
          </div>
        </div>
      </div>

      {/* Social proof badges mejorados */}
      <div className="absolute bottom-8 left-6 sm:left-8 hidden lg:block">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-5 border border-white/15 hover:border-green-400/50 transition-all duration-300 group">
          <div className="text-center">
            <div className="font-oswald text-3xl font-black text-green-500 group-hover:scale-110 transition-transform">1000+</div>
            <div className="font-montserrat text-white text-sm mt-1">Clientes Satisfechos</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 sm:right-8 hidden lg:block">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-5 border border-white/15 hover:border-amber-400/50 transition-all duration-300 group">
          <div className="text-center">
            <div className="font-oswald text-3xl font-black text-amber-500 group-hover:scale-110 transition-transform">4.9★</div>
            <div className="font-montserrat text-white text-sm mt-1">Rating Google</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;