import React from 'react';
import { Shield, Rocket, Users } from 'lucide-react';

interface PackageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className={`${gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg leading-relaxed opacity-95">{description}</p>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const packages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOS Bug Killer",
      description: "Per quando il codice ti sta guardando male e vorresti solo fare \"Cancella\" sul progetto... debug intensivo, analisi e risoluzione rapida dei problemi più ostici",
      gradient: "bg-gradient-to-br from-red-500 to-red-700"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "App su Misura & Rilascio garantito",
      description: "Hai un'idea di app da lanciare o migrare? Spiegami ciò che ti serve e ti consegno la prima versione entro 3 settimane. Quando tutto è pronto ti preparo al lancio su App Store e Google Play azzerando ogni possibilità di rifiuto dell'app.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dev Sostituto / Booster",
      description: "Ti manca una risorsa iterna o hai bisogno di una spinta in più per accelerare? Mi unisco a te e il tuo team per un periodo di tempo mettendo a disposizione tutte le mie competenze per portare a termine il progetto!",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Scegli la tua dose di soluzione: i pacchetti Mobile Dev SOS!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ho la cura giusta per ogni sintomo tecnologico.
            Scegli il pacchetto che fa al caso tuo e <span className="font-semibold text-blue-600">preparati a dire addio a tutti i tuoi problemi!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              icon={pkg.icon}
              title={pkg.title}
              description={pkg.description}
              gradient={pkg.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;