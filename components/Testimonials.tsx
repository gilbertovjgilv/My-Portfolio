import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import Carousel from './Carousel';
import { BriefcaseIcon } from './icons/Icons';
import { motion, Variants } from 'framer-motion';

interface TestimonialsProps {
  t: typeof translations.en.experience;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  const [carouselWidth, setCarouselWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 450) {
        // Account for container padding (px-4 = 1rem = 16px on each side)
        setCarouselWidth(screenWidth - 32); 
      } else {
        setCarouselWidth(400);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselItems = t.jobs.map((job, index) => ({
    id: index,
    title: job.role,
    description: `${job.company} | ${job.date}`,
    icon: <BriefcaseIcon className="carousel-icon" />,
    details: job.duties,
  }));

  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-[var(--bg-color-alt)]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]" variants={itemVariants}>{t.title}</motion.h2>
        <motion.p className="text-center text-sm text-[var(--text-secondary)] mb-12" variants={itemVariants}>{t.subtitle}</motion.p>

        <motion.div className="flex justify-center" variants={itemVariants}>
            <Carousel
                items={carouselItems}
                baseWidth={carouselWidth}
                autoplay={true}
                autoplayDelay={5000}
                pauseOnHover={true}
                loop={true}
            />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;