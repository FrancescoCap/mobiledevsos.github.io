import React from 'react';
import { Bug, Code2, Clock } from 'lucide-react';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Bug Bloccanti & Crash App",
      description: "La tua app si blocca più di un browser con 50 tab aperte? Niente panico! Li scovo e li elimino uno ad uno"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "App su misura & Rilascio garantito",
      description: "Vuoi sviluppare un'app ma non hai tempo o risorse interne? Mi occupo io di tutto, dalla progettazione all'implementazione, con tutti i migliori strumenti del momento"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Buchi di Risorse / Deadline Strette",
      description: "Team in affanno e deadline imminente? Sono il rinforzo che non sapevi di aver bisogno, mi integro e spingo il progetto verso il traguardo, senza compromessi sulla qualità"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ai tuoi problemi... le mie soluzioni SOS!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quale di questi problemi sta impendendo al tuo progetto di prendersi lo spazio che merita sul mercato?
            <span className="font-semibold text-blue-600"> Nulla può sorprendermi! Ho visto di tutto e risolto ancora di più!</span>
          </p>
        </div>

        <div className="grid gap-8 md:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;