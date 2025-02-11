
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="ByteWise-semfundo-site.png" alt="ByteWise Logo" style={{ width: '9rem' }} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Clientes', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
