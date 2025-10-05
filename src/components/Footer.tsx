"use client";
import Link from "next/link";
import { useState } from "react";

// Tipos TypeScript
interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface SocialMedia {
  name: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

interface ContactInfo {
  type: "phone" | "email" | "address";
  value: string;
  href?: string;
  icon: React.ReactNode;
}

interface ServiceHour {
  day: string;
  hours: string;
}

// Iconos para títulos de secciones
const SectionIcons = {
  services: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  ),
  artists: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  company: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  support: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  legal: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  newsletter: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  contact: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  social: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
    </svg>
  ),
  hours: (
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

// Datos del footer
const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/urbanstyle",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.2 14.786 3.71 13.635 3.71 12.338s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
      </svg>
    ),
    color: "hover:text-pink-600"
  },
  {
    name: "Facebook",
    href: "https://facebook.com/urbanstyle",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: "hover:text-blue-600"
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@urbanstyle",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    color: "hover:text-gray-900"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/525512345678",
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
      </svg>
    ),
    color: "hover:text-green-600"
  }
];

const serviceHours: ServiceHour[] = [
  { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM" },
  { day: "Sábado", hours: "8:00 AM - 9:00 PM" },
  { day: "Domingo", hours: "10:00 AM - 6:00 PM" }
];

const contactInfo: ContactInfo[] = [
  {
    type: "phone",
    value: "+52 55 1234 5678",
    href: "tel:+525512345678",
    icon: (
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    type: "email",
    value: "citas@urbanstyle.com",
    href: "mailto:citas@urbanstyle.com",
    icon: (
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    type: "address",
    value: "Av. Reforma 123, CDMX",
    href: "https://maps.google.com",
    icon: (
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Servicios",
      icon: SectionIcons.services,
      links: [
        { href: "/servicios/cortes-barba", label: "Cortes & Barba" },
        { href: "/servicios/tatuajes", label: "Tatuajes Personalizados" },
        { href: "/servicios/restauracion", label: "Restauración" },
        { href: "/servicios/barberia", label: "Barbería Clásica" },
        { href: "/servicios/piercing", label: "Piercing & Mods" }
      ]
    },
    {
      title: "Artistas",
      icon: SectionIcons.artists,
      links: [
        { href: "/artistas/barberos", label: "Nuestros Barbers" },
        { href: "/artistas/tatuadores", label: "Tatuadores" },
        { href: "/artistas/portafolios", label: "Portafolios" },
        { href: "/artistas/estilos", label: "Estilos" },
        { href: "/artistas/citas", label: "Agendar Cita" }
      ]
    },
    {
      title: "Empresa",
      icon: SectionIcons.company,
      links: [
        { href: "/nosotros", label: "Nosotros" },
        { href: "/blog", label: "Blog Style" },
        { href: "/galeria", label: "Galería" },
        { href: "/testimonios", label: "Testimonios" },
        { href: "/sostenibilidad", label: "Sostenibilidad" }
      ]
    },
    {
      title: "Soporte",
      icon: SectionIcons.support,
      links: [
        { href: "/ayuda", label: "Ayuda" },
        { href: "/contacto", label: "Contacto" },
        { href: "/faq", label: "Preguntas Frecuentes" },
        { href: "/cuidados", label: "Cuidados" },
        { href: "/garantia", label: "Garantía" }
      ]
    },
    {
      title: "Legal",
      icon: SectionIcons.legal,
      links: [
        { href: "/privacidad", label: "Privacidad" },
        { href: "/terminos", label: "Términos" },
        { href: "/cookies", label: "Cookies" },
        { href: "/salud", label: "Salud" },
        { href: "/condiciones", label: "Condiciones" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-t border-gray-700 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand & Newsletter Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transform group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                U
              </div>
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent break-words">
                  Urban Style
                </h3>
                <p className="text-red-400 font-medium text-xs sm:text-sm truncate">Barbería & Tattoo Studio</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md text-sm sm:text-base leading-relaxed break-words">
              Tu estilo, nuestra pasión. Especialistas en cortes modernos, tatuajes personalizados y experiencias únicas que definen tu identidad.
            </p>

            {/* Horarios de atención */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  {SectionIcons.hours}
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base">Horarios</h4>
              </div>
              <div className="space-y-1">
                {serviceHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-red-400 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  {SectionIcons.newsletter}
                </div>
                <h4 className="font-semibold text-white text-base sm:text-lg">Newsletter</h4>
              </div>
              {subscribed ? (
                <div className="bg-green-900 border border-green-700 rounded-xl p-3 sm:p-4 text-green-300 flex items-center gap-2 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-600 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 shadow-sm text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl border border-red-600 text-sm sm:text-base whitespace-nowrap"
                  >
                    Suscribirse
                  </button>
                </form>
              )}
              <p className="text-gray-400 text-xs sm:text-sm break-words">
                Recibe promociones exclusivas y tips de estilo mensualmente.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 flex-shrink-0">{section.icon}</span>
                  <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg break-words">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-red-400 transition-all duration-200 text-xs sm:text-sm leading-relaxed flex items-center gap-2 group break-words"
                      >
                        <span className="w-1.5 h-1.5 bg-red-900 rounded-full group-hover:bg-red-500 transition-all duration-200 flex-shrink-0"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-700 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  {SectionIcons.contact}
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                  Contacto
                </h4>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 group">
                    <span className="text-red-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      {contact.icon}
                    </span>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="hover:text-red-400 transition-all duration-200 flex items-center gap-1 font-medium text-sm sm:text-base break-all"
                      >
                        {contact.value}
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-medium text-sm sm:text-base break-all">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  {SectionIcons.social}
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                  Síguenos
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 hover:border-red-500 hover:shadow-md hover:scale-110 flex-shrink-0`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h5 className="font-semibold text-white mb-1 sm:mb-2 flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Confianza y Calidad
                </h5>
                <p className="text-gray-300 text-xs sm:text-sm break-words">
                  Estudio certificado con los más altos estándares de higiene y profesionales calificados.
                </p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
                <div className="bg-gray-700 rounded-lg p-2 sm:p-3 shadow-sm border border-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-medium">Máxima Higiene</span>
                </div>
                <div className="bg-gray-700 rounded-lg p-2 sm:p-3 shadow-sm border border-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-white text-xs sm:text-sm font-medium">Profesionales Certificados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              <p className="break-words">
                © {new Date().getFullYear()} Urban Style. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 order-1 sm:order-2 flex-wrap justify-center">
              <Link href="/privacidad" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-1 font-medium whitespace-nowrap">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-1 font-medium whitespace-nowrap">
                Términos
              </Link>
              <Link href="/cookies" className="hover:text-red-400 transition-colors duration-200 flex items-center gap-1 font-medium whitespace-nowrap">
                Cookies
              </Link>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-medium order-3 whitespace-nowrap">
              <span className="text-base">🇲🇽</span>
              <span>Hecho en México con pasión</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}