import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, tech }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <ExternalLink className="w-4 h-4 text-blue-600" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "App per tracciamento performance calciatori (real-time)",
      description: "Un' app migrata da iOS nativo a Flutter per la lettura in real-time dei dati sulle performance atletiche dei calciatori durante le sessioni di allenamento",
      tech: ["Flutter", "GraphQL"]
    },
    {
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "App gestionale Coaching Online",
      description: "App gestionale su misura per un personal trainer per la gestione del suo servizio di coaching: allenamenti, controlli, invio diete e chat",
      tech: ["Flutter", ".NET Core", "SQL Server", "Azure", "Firebase"]
    },
    {
      image: "https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "App ricerca trainer",
      description: "App startup per la ricerca di professionisti fitness tramite matching fra i parametri impostati dall'utente e i profili dei trainer",
      tech: ["Flutter", ".NET Core", "SQL Server", "Azure", "Auth0"]
    },
    {
      image: "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "App per azienda sanitaria",
      description: "Portale per la consultazione di materiale sanitario informativo e ricerca di ambulatori vicini",
      tech: ["Flutter", "Google Maps"]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Alcuni progetti aziendali a cui sono intervenuto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;