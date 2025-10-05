"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define types for navigation items
interface NavigationItem {
  name: string;
  href: string;
  description: string;
  icon?: string;
}

interface MobileMenuItem {
  name: string;
  href: string;
  icon: string;
  children?: NavigationItem[];
}

interface MobileDropdownProps {
  item: MobileMenuItem;
  onClose: () => void;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close menu when route changes or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('resize', handleResize);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = {
    servicios: [
      { name: "Cortes de Cabello", href: "/servicios/cortes", description: "Estilos modernos y clásicos", icon: "✂️" },
      { name: "Arreglo de Barba", href: "/servicios/barba", description: "Afeitado tradicional y moderno", icon: "🧔" },
      { name: "Tatuajes Personalizados", href: "/servicios/tatuajes", description: "Diseños únicos para ti", icon: "🎨" },
      { name: "Restauración de Tatuajes", href: "/servicios/restauracion", description: "Renueva tu arte", icon: "🔧" },
      { name: "Piercing y Modificaciones", href: "/servicios/piercing", description: "Profesional y seguro", icon: "💎" },
      { name: "Tratamientos Capilares", href: "/servicios/tratamientos", description: "Cuidado especializado", icon: "💆" }
    ],
    artistas: [
      { name: "Nuestro Equipo", href: "/artistas/equipo", description: "Conoce a nuestros expertos", icon: "👥" },
      { name: "Barberos", href: "/artistas/barberos", description: "Especialistas en estilo", icon: "💈" },
      { name: "Tatuadores", href: "/artistas/tatuadores", description: "Artistas del tatuaje", icon: "✏️" },
      { name: "Portafolios", href: "/artistas/portafolios", description: "Ver nuestro trabajo", icon: "📷" },
      { name: "Estilos Especializados", href: "/artistas/estilos", description: "Técnicas únicas", icon: "🌟" }
    ],
    galeria: [
      { name: "Tatuajes", href: "/galeria/tatuajes", description: "Nuestras obras de arte", icon: "🖼️" },
      { name: "Cortes de Cabello", href: "/galeria/cortes", description: "Transformaciones increíbles", icon: "💇" },
      { name: "Barbas", href: "/galeria/barbas", description: "Estilos faciales", icon: "🧔‍♂️" },
      { name: "Antes y Después", href: "/galeria/transformaciones", description: "Resultados reales", icon: "📊" }
    ],
    precios: [
      { name: "Cortes y Barba", href: "/precios/cortes", description: "Servicios de barbería", icon: "💈" },
      { name: "Tatuajes", href: "/precios/tatuajes", description: "Por tamaño y complejidad", icon: "💵" },
      { name: "Piercing", href: "/precios/piercing", description: "Variedad de opciones", icon: "📌" },
      { name: "Paquetes", href: "/precios/paquetes", description: "Combina servicios", icon: "🎁" }
    ]
  };

  const mobileMenuItems: MobileMenuItem[] = [
    { name: "Inicio", href: "/", icon: "🏠" },
    { name: "Servicios", href: "#", icon: "✨", children: navigation.servicios },
    { name: "Artistas", href: "#", icon: "👨‍🎨", children: navigation.artistas },
    { name: "Galería", href: "#", icon: "📸", children: navigation.galeria },
    { name: "Precios", href: "#", icon: "💰", children: navigation.precios },
    { name: "Blog", href: "/blog", icon: "📝" },
    { name: "Contacto", href: "/contacto", icon: "📞" }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-2xl' 
          : 'bg-gray-900 border-b border-gray-800'
      }`}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-2 px-4">
          <div className="max-w-8xl mx-auto flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun-Vie: 9AM-8PM • Sáb: 8AM-9PM • Dom: 10AM-6PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+525512345678" className="flex items-center space-x-1 hover:text-red-200 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+52 55 1234 5678</span>
              </a>
              <div className="hidden sm:flex items-center space-x-2">
                <span>|</span>
                <a href="https://wa.me/525512345678" className="hover:text-green-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                U
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  Urban Style
                </h1>
                <p className="text-red-400 text-sm font-medium">Barbería & Tattoo Studio</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
              >
                Inicio
              </Link>
              
              {/* Servicios Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('servicios')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium">
                  Servicios
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'servicios' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-4">
                    <div className="grid gap-2">
                      {navigation.servicios.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start p-3 rounded-xl hover:bg-gray-800 transition-all duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-red-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-gray-500 group-hover:text-red-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Artistas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('artistas')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium">
                  Artistas
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'artistas' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-4">
                    <div className="grid gap-2">
                      {navigation.artistas.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start p-3 rounded-xl hover:bg-gray-800 transition-all duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-red-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/galeria" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
              >
                Galería
              </Link>

              <Link 
                href="/precios" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
              >
                Precios
              </Link>

              <Link 
                href="/blog" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
              >
                Blog
              </Link>

              <Link 
                href="/contacto" 
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
              >
                Contacto
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="https://wa.me/525512345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transform hover:-translate-y-0.5 transition-all duration-200 font-medium shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                </svg>
                WhatsApp
              </a>
              <Link 
                href="/citas" 
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transform hover:-translate-y-0.5 transition-all duration-200 font-medium shadow-lg border border-red-600"
              >
                Agendar Cita
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 relative z-60"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible delay-300'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 sm:w-96 bg-gray-900 border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  U
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Urban Style</h1>
                  <p className="text-red-400 text-sm">Barbería & Tattoo</p>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="h-[calc(100vh-120px)] overflow-y-auto pb-8">
            <div className="p-6">
              {/* Navigation Items */}
              <nav className="space-y-3 mb-8">
                {mobileMenuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-800/50 last:border-b-0 pb-3 last:pb-0">
                    {item.children ? (
                      <MobileDropdown 
                        item={item} 
                        onClose={() => setIsMenuOpen(false)}
                      />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center p-4 rounded-2xl bg-gray-800 text-white hover:bg-gray-750 hover:transform hover:-translate-y-0.5 transition-all duration-200 font-medium group"
                      >
                        <span className="text-xl mr-4 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="text-lg font-semibold">{item.name}</span>
                        <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mb-8">
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4 px-2">Acciones Rápidas</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/525512345678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-full p-4 bg-green-600/90 text-white rounded-2xl hover:bg-green-600 hover:transform hover:-translate-y-0.5 transition-all duration-200 font-semibold shadow-lg group"
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
                    </svg>
                    WhatsApp
                  </a>
                  <Link 
                    href="/citas" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl hover:from-red-700 hover:to-red-800 hover:transform hover:-translate-y-0.5 transition-all duration-200 font-semibold shadow-lg group"
                  >
                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Agendar Cita
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-5 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Información de Contacto
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start p-3 rounded-xl bg-gray-750 hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-300">+52 55 1234 5678</span>
                  </div>
                  <div className="flex items-start p-3 rounded-xl bg-gray-750 hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">citas@urbanstyle.com</span>
                  </div>
                  <div className="flex items-start p-3 rounded-xl bg-gray-750 hover:bg-gray-700 transition-colors duration-200">
                    <svg className="w-4 h-4 mr-3 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-gray-300">Av. Reforma 123, CDMX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Componente para dropdowns móviles con tipos TypeScript
const MobileDropdown = ({ item, onClose }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 rounded-2xl bg-gray-800 text-white hover:bg-gray-750 hover:transform hover:-translate-y-0.5 transition-all duration-200 font-medium group"
      >
        <div className="flex items-center">
          <span className="text-xl mr-4 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
          <span className="text-lg font-semibold">{item.name}</span>
        </div>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-400' : 'text-gray-500'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="ml-4 mt-3 space-y-2 border-l-2 border-red-500/30 pl-4 py-2">
          {item.children && item.children.map((child: NavigationItem, index: number) => (
            <Link
              key={index}
              href={child.href}
              onClick={onClose}
              className="flex items-center p-3 rounded-xl bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-750 hover:transform hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{child.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-sm group-hover:text-red-400 transition-colors">
                  {child.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">
                  {child.description}
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;