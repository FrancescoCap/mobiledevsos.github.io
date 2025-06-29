import React from 'react';
import Header from './components/Header';
import Problems from './components/Problems';
import Packages from './components/Packages';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] antialiased">
      {/* Header con presentazione */}
      <Header />
      
      {/* Sezione problemi che risolvo */}
      <Problems />
      
      {/* Sezione pacchetti di servizio */}
      <Packages />
      
      {/* Sezione progetti e portfolio */}
      <Projects />
      
      {/* Form di contatto */}
      <ContactForm />
      
      {/* Footer minimalista */}
      <footer className="bg-custom-blue-gradient text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Made with ❤️ (and a lot of ☕) by Francesco - Mobile Dev SOS
          </p>
          <p className="text-sm mt-2 opacity-75">
            © 2024 Mobile Dev SOS. Tutti i diritti riservati. 
            Nessun bug è stato maltrattato durante la creazione di questo sito! 😄
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;