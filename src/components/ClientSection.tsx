import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const clients = [
  {
    name: "Idecan",
    image:
      "idecan-semfundo.png",
    description: "Empresa líder em soluções tecnológicas",
  },
  {
    name: "Idib",
    image:
      "idib-semfundo.png",
    description: "Sistemas integrados para grande porte",
  },
];
const ClientsSection = () => {
  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Nossos Clientes</h2>
          <p className="text-xl text-gray-600">
            Empresas que confiam em nossas soluções
          </p>
        </motion.div>

        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-2 pb-5 px-2">
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-48 object-contain"
                    />
                    {/* <div className="p-6">
                      <h3 className="text-xl font-semibold text-dark mb-2">
                        {client.name}
                      </h3>
                      <p className="text-gray-600">{client.description}</p>
                    </div> */}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex" />
            <CarouselNext className="flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default ClientsSection;
