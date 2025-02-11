
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="início" className="min-h-screen flex items-center pt-5 bg-gradient-to-br from-white to-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-dark">
              Transformando ideias em soluções digitais
            </h1>
            <p className="text-xl text-gray-600">
              Consultoria especializada em TI, desenvolvimento de novas soluções e sustentação de sistemas
            </p>
            <div className="flex space-x-4">
              <a
                href="#contato"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
              >
                Fale Conosco
              </a>
              <a
                href="#serviços"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Software Development"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
