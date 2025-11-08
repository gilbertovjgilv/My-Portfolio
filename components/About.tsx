import React from 'react';
import { AwardIcon, BriefcaseIcon, CheckCircleIcon } from './icons/Icons';
import { translations } from '../translations';
import StarBorder from './StarBorder';
import { motion, Variants } from 'framer-motion';
import TiltedCard from './TiltedCard';

interface AboutProps {
  t: typeof translations.en.about;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <motion.section 
      id="about" 
      className="py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]" variants={itemVariants}>{t.title}</motion.h2>
        <motion.p className="text-center text-sm text-[var(--text-secondary)] mb-12" variants={itemVariants}>{t.subtitle}</motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="w-full max-w-sm mx-auto flex justify-center items-center min-h-[320px]" variants={itemVariants}>
            <TiltedCard
              imageSrc="https://i.postimg.cc/tRNt7nvL/YO-IA.png"
              altText="Gilberto Gil"
              containerHeight="320px"
              containerWidth="320px"
              imageHeight="320px"
              imageWidth="320px"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showMobileWarning={false}
              showTooltip={false}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <StarBorder as="div" color="var(--primary-color)" speed="5s">
                <AwardIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">Experience</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.experience}</span>
              </StarBorder>
              <StarBorder as="div" color="var(--primary-color)" speed="5.5s">
                <BriefcaseIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">Automations</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.automations}</span>
              </StarBorder>
              <StarBorder as="div" color="var(--primary-color)" speed="4.5s">
                 <CheckCircleIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">CSAT</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.csat}</span>
              </StarBorder>
            </div>
            <p className="text-[var(--text-secondary)] mb-8 text-justify">{t.description}</p>
            <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--primary-color)] text-white font-medium py-3 px-6 rounded-lg inline-flex items-center hover:opacity-90">
              {t.button}
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;