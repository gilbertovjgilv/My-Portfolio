import React, { useState } from 'react';
import { translations } from '../translations';
import { MailIcon, PhoneIcon, SendIcon, CheckCircleIcon, SpinnerIcon } from './icons/Icons';
import { motion, Variants } from 'framer-motion';

interface ContactProps {
  t: typeof translations.en.contact;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setResponseMessage('');

    try {
      // IMPORTANT: Replace 'YOUR_FORM_ID_HERE' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/meoplbrd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setResponseMessage(t.form.successMessage);
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        const data = await response.json();
        setStatus('error');
        setResponseMessage(data.error || t.form.errorMessage);
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage(t.form.errorMessage);
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[500px]">
          <div className="max-w-md w-full p-8 border border-[var(--primary-color)]/30 rounded-lg bg-[var(--bg-color-alt)] animate-scaleUp">
            <CheckCircleIcon className="w-16 h-16 text-[var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">{t.form.successTitle}</h3>
            <p className="text-[var(--text-secondary)]">{responseMessage}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      id="contact" 
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]" variants={itemVariants}>{t.title}</motion.h2>
        <motion.p className="text-center text-sm text-[var(--text-secondary)] mb-12" variants={itemVariants}>{t.subtitle}</motion.p>
        
        <motion.div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto" variants={itemVariants}>
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.name}</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="email" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.email}</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="project" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.project}</label>
              <input type="text" id="project" value={formData.project} onChange={handleChange} className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)]" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="absolute -top-2 left-4 bg-[var(--bg-color)] px-1 text-xs text-[var(--text-secondary)]">{t.form.message}</label>
              <textarea id="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-transparent border border-[var(--primary-color)]/30 p-4 rounded-lg text-[var(--text-color)] focus:outline-none focus:border-[var(--primary-color)] resize-none"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-[var(--primary-color)] text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center hover:opacity-90 w-fit disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {status === 'sending' ? (
                  <>
                    <SpinnerIcon className="animate-spin mr-2" />
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    {t.send} <SendIcon className="ml-2" />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-4">{responseMessage}</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;