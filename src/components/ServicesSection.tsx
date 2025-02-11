
import { motion } from 'framer-motion';
import { Laptop, Users, Cog, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-12 h-12 text-primary" />,
    title: "Consultoria de TI",
    description: "Assessoria especializada para otimizar seus processos e infraestrutura tecnológica"
  },
  {
    icon: <Building2 className="w-12 h-12 text-primary" />,
    title: "Outsourcing",
    description: "Profissionais qualificados para complementar sua equipe e impulsionar seus projetos"
  },
  {
    icon: <Cog className="w-12 h-12 text-primary" />,
    title: "Desenvolvimento de Projetos",
    description: "Criação de soluções digitais sob medida para seu negócio"
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Sustentação de Sistemas",
    description: "Manutenção e suporte contínuo para garantir a estabilidade de suas aplicações"
  }
];

const ServicesSection = () => {
  return (
    <section id="serviços" className="pb-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600">Soluções completas para transformar seu negócio</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
