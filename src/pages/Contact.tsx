import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => (
  <>
    <Header />
    <main className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="mb-4">¿Tienes dudas o quieres reservar? Escríbenos o visítanos.</p>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Nombre</label>
          <input type="text" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Mensaje</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded font-bold hover:bg-yellow-500 transition">Enviar</button>
      </form>
      <div className="mt-8 text-center">
        <p><strong>Dirección:</strong> Calle Principal #123, Ciudad</p>
        <p><strong>Teléfono:</strong> +52 123 456 7890</p>
        <p><strong>Email:</strong> contacto@leninbarber.com</p>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
