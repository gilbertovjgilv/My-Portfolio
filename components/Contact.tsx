// FIX: The original file content was raw JSX. It has been wrapped in a proper React functional component with necessary imports, props, and a default export to resolve multiple errors.
import React from 'react';
import { translations } from '../translations';
import { MailIcon, PhoneIcon, SendIcon } from './icons/Icons';

interface ContactProps {
  t: typeof translations.en.contact;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]">{t.title}</h2>
        <p className="text-center text-sm text-[var(--text-secondary)] mb-12">{t.subtitle}</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 pt-2">
             <h3 className="text-xl font-bold mb-4 text-[var(--text-color)]">Contact Information</h3>
             <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-[var(--primary-color)] flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-[var(--text-color)]">{t.email.title}</h4>
                    <a href={t.email.link} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">{t.email.value}</a>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-[var(--primary-color)] flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-[var(--text-color)]">{t.phone.title}</h4>
                    <a href={t.phone.link} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">{t.phone.value}</a>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <form action="" className="flex flex-col gap-6">
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.name}</label>
              <input type="text" id="name" className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="email" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.email}</label>
              <input type="email" id="email" className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="project" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.project}</label>
              <input type="text" id="project" className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.message}</label>
              <textarea id="message" rows={5} className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)] resize-none"></textarea>
            </div>
            <button type="submit" className="bg-[var(--primary-color)] text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center hover:opacity-90 w-fit">
              {t.send} <SendIcon className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
