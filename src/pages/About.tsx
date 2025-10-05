import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => (
  <>
    <Header />
    <main className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Sobre Lenin Barber & Tattoo</h2>
      <p className="text-lg mb-4">Somos un equipo apasionado por el arte del corte y el tatuaje. Nuestra misión es ofrecerte una experiencia única, combinando estilo, creatividad y profesionalismo en cada servicio.</p>
      <p className="text-lg">Contamos con barberos y tatuadores expertos, instalaciones modernas y un ambiente acogedor para que te sientas como en casa.</p>
    </main>
    <Footer />
  </>
);

export default About;
