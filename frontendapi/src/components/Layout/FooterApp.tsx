import logo from '../../assets/images/MangaKomi.logo1.png';
import ub from '../../assets/images/Pio.jpg';

function FooterApp() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la Compañía */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="MangaKami" 
                className="h-12 w-12 transform transition-transform duration-300 hover:scale-110" 
              />
              <h3 className="text-2xl font-extrabold tracking-tight uppercase">MangaKami</h3>
            </div>
            <p className="text-gray-400 mt-4 text-center md:text-left">
            En MangaKami, te traemos las historias más emocionantes y el mejor manga con calidad garantizada.
            </p>
            <p className="mt-4 text-gray-400 text-center md:text-left">
              Dirección: Avenida 2 Norte # 24 - N - 91, Cali-Colombia
            </p>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces útiles</h3>
            <ul>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Inicio</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Servicios</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Nosotros</a></li>
              <li><a href="#" className="text-indigo-500 hover:text-indigo-300">Contacto</a></li>
            </ul>
          </div>

          {/* Imagen del mapa estático */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Ubicación</h3>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={ub} // Imagen de ejemplo de mapa
                alt="Ubicación de la compañía"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2025 MangaKami. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterApp;
