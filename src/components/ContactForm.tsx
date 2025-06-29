import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle, Linkedin } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  description?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validazione form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Il nome è obbligatorio';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Il cognome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descrizione è obbligatoria';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'La descrizione deve essere di almeno 20 caratteri';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // URL dell'endpoint Google Apps Script (sostituisci YOUR_DEPLOYMENT_ID con l'ID effettivo)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwrmQYqlxwW2fKzmsoRD9l31gDZWwrA3mkHtQ9agyQzFCyNB4lbiH7hKuaWXPas-aR9tA/exec';

  // Gestione invio form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepara i dati per Google Sheets
      const sheetData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        description: formData.description
      };

      // Invia i dati a Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessario per Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      // Con mode: 'no-cors' non possiamo leggere la risposta,
      // assumiamo che la richiesta sia andata a buon fine se non ci sono errori
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', description: '' });
    } catch (error) {
      console.error('Errore durante l\'invio:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestione cambiamenti input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Rimuovi errore quando l'utente inizia a correggere
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="bg-custom-blue-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto a dire addio ai tuoi ostacoli? Compila il form!
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            A seguito della compilazione riceverai una breve analisi via email con stime di ore e prezzo.
            Ricorda, questi sono valori stimati e potranno variare dopo un colloquio approfondito.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Nome */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-blue-100">
                  Nome *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${errors.firstName ? 'border-red-400' : 'border-white/30'
                    }`}
                  placeholder="Il tuo nome"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Cognome */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-blue-100">
                  Cognome *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${errors.lastName ? 'border-red-400' : 'border-white/30'
                    }`}
                  placeholder="Il tuo cognome"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-100">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/20 border text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${errors.email ? 'border-red-400' : 'border-white/30'
                  }`}
                placeholder="la-tua-email@esempio.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Descrizione */}
            <div className="mb-8">
              <label htmlFor="description" className="block text-sm font-medium mb-2 text-blue-100">
                Necessità *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-white/20 border text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors resize-none ${errors.description ? 'border-red-400' : 'border-white/30'
                  }`}
                placeholder="Raccontami brevemente la tua situazione indicando: stato attuale, obiettivi, tempistiche e tecnologie impiegate"
              />
              {errors.description && (
                <p className="mt-2 text-sm text-red-300 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.description}
                </p>
              )}
              <p className="mt-2 text-sm text-blue-200">
                Caratteri: {formData.description.length} (minimo 20)
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:-translate-y-1 hover:shadow-lg'
                }`}
            >
              {isSubmitting ? (
                <>
                  Invio in corso...
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </>
              ) : (
                <>
                  Invia richiesta
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Stato invio */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 text-green-300 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                Messaggio inviato con successo! Ti contatterò a breve con un'analisi dettagliata.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 text-red-300 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                Ops! Qualcosa è andato storto nell'invio. Riprova più tardi o contattami direttamente via email.
              </div>
            )}
          </form>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-6">Oppure trovami sui social:</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/francesco-caputo-789a62199/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;