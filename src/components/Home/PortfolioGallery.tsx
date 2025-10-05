'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FiZoomIn, FiHeart, FiShare2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["Todos", "Cortes", "Tatuajes", "Barbas", "Diseños"];

  // Imágenes de Unsplash para barbería y tatuajes
  const portfolioItems = [
    {
      id: 1,
      category: "Cortes",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "Fade Moderno",
      description: "Corte degradado con diseño personalizado",
      artist: "Alex Barber",
      likes: 142,
      featured: true
    },
    {
      id: 2,
      category: "Tatuajes",
      image: "https://images.unsplash.com/photo-1611339555312-e607c6632f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dG9vfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "Black Work",
      description: "Tatuaje estilo black work en brazo",
      artist: "Maria Tattoo",
      likes: 89,
      featured: true
    },
    {
      id: 3,
      category: "Barbas",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXJkJTIwc3R5bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "Barba Clásica",
      description: "Arreglo y diseño de barba profesional",
      artist: "Carlos Style",
      likes: 76,
      featured: false
    },
    {
      id: 4,
      category: "Tatuajes",
      image: "https://images.unsplash.com/photo-1609621838384-13b21d52c463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhdHRvb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Color Realismo",
      description: "Tatuaje realista a color en espalda",
      artist: "David Art",
      likes: 156,
      featured: true
    },
    {
      id: 5,
      category: "Cortes",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Estilo Vintage",
      description: "Corte clásico con toque moderno",
      artist: "Alex Barber",
      likes: 93,
      featured: false
    },
    {
      id: 6,
      category: "Diseños",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhdHRvbyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Diseño Exclusivo",
      description: "Creación de diseño personalizado",
      artist: "Maria Tattoo",
      likes: 67,
      featured: false
    },
    {
      id: 7,
      category: "Tatuajes",
      image: "https://images.unsplash.com/photo-1577985057584-707d1a4d13d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhdHRvb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Geométrico",
      description: "Diseño geométrico en pierna",
      artist: "Luna Ink",
      likes: 124,
      featured: true
    },
    {
      id: 8,
      category: "Cortes",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Undercut",
      description: "Estilo undercut con diseño lateral",
      artist: "Alex Barber",
      likes: 88,
      featured: false
    },
    {
      id: 9,
      category: "Barbas",
      image: "https://images.unsplash.com/photo-1585747860815-342edbcdd0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXJkJTIwdHJpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Barba Estilizada",
      description: "Perfilado y arreglo de barba",
      artist: "Carlos Style",
      likes: 71,
      featured: false
    }
  ];

  const filteredItems = activeCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restaurar scroll del body
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  // Manejar navegación con teclado
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage]);

  const currentItem = filteredItems.find(item => item.id === selectedImage);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-amber-400 rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-red-500 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-montserrat inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-500/30">
            <FiZoomIn className="text-blue-400 mr-2" size={16} />
            <span className="text-blue-400 text-sm font-bold">PORTAFOLIO</span>
          </div>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nuestro Trabajo
            </span>
          </h2>
          <p className="font-montserrat text-xl text-gray-300 max-w-2xl mx-auto">
            Galería de nuestros mejores trabajos en barbería y tatuajes
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-montserrat px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openModal(item.id)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="font-montserrat bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    DESTACADO
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-oswald text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-gray-300 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-montserrat text-blue-400 text-sm">
                        Por: {item.artist}
                      </span>
                      <div className="flex items-center space-x-3">
                        <button 
                          className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Aquí puedes agregar la lógica de likes
                          }}
                        >
                          <FiHeart className="mr-1" size={16} />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                        <button 
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiShare2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <FiZoomIn size={20} />
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="font-montserrat bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="font-montserrat bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:scale-105 border border-blue-400/30">
            Ver Galería Completa
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 text-white hover:text-red-400 transition-colors p-2 bg-black/50 rounded-full"
          >
            <FiX size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-60 text-white hover:text-blue-400 transition-colors p-3 bg-black/50 rounded-full"
          >
            <FiChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 z-60 text-white hover:text-blue-400 transition-colors p-3 bg-black/50 rounded-full"
          >
            <FiChevronRight size={32} />
          </button>

          {/* Modal Content */}
          <div className="relative w-full max-w-6xl mx-4 max-h-[90vh] flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="relative w-full lg:w-2/3 h-96 lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-1/3 bg-gray-800/80 backdrop-blur-lg p-6 lg:p-8 rounded-2xl lg:rounded-l-none lg:rounded-r-2xl border border-gray-700/50">
              <div className="flex items-center gap-2 mb-4">
                {currentItem.featured && (
                  <div className="font-montserrat bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    DESTACADO
                  </div>
                )}
                <div className="font-montserrat bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-500/30">
                  {currentItem.category}
                </div>
              </div>

              <h3 className="font-oswald text-3xl font-bold text-white mb-4">
                {currentItem.title}
              </h3>
              
              <p className="font-montserrat text-gray-300 text-lg mb-6">
                {currentItem.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-gray-400">Artista:</span>
                  <span className="font-montserrat text-blue-400 font-bold">
                    {currentItem.artist}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-gray-400">Likes:</span>
                  <div className="flex items-center text-red-400">
                    <FiHeart className="mr-2" size={20} />
                    <span className="font-montserrat font-bold">{currentItem.likes}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-700/50">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-montserrat font-bold transition-colors">
                  Agendar Cita
                </button>
                <button className="flex items-center justify-center text-gray-400 hover:text-white transition-colors p-3 bg-gray-700/50 rounded-xl">
                  <FiShare2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-montserrat bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {filteredItems.findIndex(item => item.id === selectedImage) + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;