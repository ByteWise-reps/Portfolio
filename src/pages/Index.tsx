import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClientSection from '../components/ClientSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ClientSection />
    </div>
  );
};

export default Index;
