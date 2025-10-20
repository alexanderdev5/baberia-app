import FeaturedServices from "@/components/Home/FeaturedServices";
import HeroSection from "../components/Home/HeroSection";
import Image from "next/image";
import Promotions from "@/components/Home/Promotions";
import PortfolioGallery from "@/components/Home/PortfolioGallery";
export const runtime = 'nodejs' // ✅ SÍ

export default function Home() {
  return (
    <>
       <HeroSection
        title="Urban Style Barbería"
        subtitle="Donde el estilo se encuentra con la tradición. Cortes precisos, barbas perfectas y una experiencia única que define tu personalidad."
        primaryButtonText="Agendar Cita"
        secondaryButtonText="Ver Servicios"
        imageUrl="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt="Barbería Urban Style 2025"
        altText="Imagen principal de la barbería Urban Style"
        badgeText="Barbería Premium 20255"
        trustItems={[
          { icon: "check", text: "Citas Online 24/7" },
          { icon: "star", text: "Barberos Certificados" },
          { icon: "award", text: "Premio Excelencia 2023" },
          { icon: "check", text: "Productos Premium" },
          { icon: "star", text: "5★ Rating Google" }
        ]}
      />
       <FeaturedServices />
      <Promotions />
      
      <PortfolioGallery />
      

    </>
  );
}
