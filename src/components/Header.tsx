import React from 'react';
import { Code, Smartphone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-custom-blue-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Presentazione Testuale */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <Smartphone className="w-8 h-8 text-orange-400" />
              </div>
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <Code className="w-8 h-8 text-orange-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-orange-400">Mobile Dev</span>
              <span className="block">SOS!</span>
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-blue-100 leading-relaxed">
              <p>
                Ciao! Mi chiamo <span className="font-semibold text-white">Francesco</span>, ho 27 anni e da più di 6 anni mi diletto nel mondo dello sviluppo mobile.
              </p>

              <p>
                Se sei qui, probabilmente hai una di quelle <span className="font-semibold text-orange-300">"spine nel fianco" tipico dello sviluppo di un'applicativo</span>: un'app che non si comporta come dovrebbe, deadline che ti prendono per il collo, o semplicemente un'idea geniale che ha bisogno di due mani esperte per prendere il volo... sappi che <span className="font-semibold text-white">sei nel posto giusto!</span>
              </p>

              <p className="text-xl md:text-2xl font-semibold text-orange-300 animate-pulse">
                Continua a scorrere per scoprire come posso trasformare i tuoi ostacoli in brutti ricordi da raccontare!
              </p>
            </div>
          </div>

          {/* Foto Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/20 bg-gradient-to-br from-orange-400 to-orange-600">
              <img
                src="asset/my_photo.jpeg"
                alt="Francesco - Mobile Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;