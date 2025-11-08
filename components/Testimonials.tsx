import React from 'react';
import { translations } from '../translations';
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

const timelineItemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
        type: 'spring',
        stiffness: 100,
    }
  },
};

const listVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const listItemVariants: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-[var(--bg-color-alt)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]" variants={timelineItemVariants}>{t.title}</motion.h2>
        <motion.p className="text-center text-sm text-[var(--text-secondary)] mb-16" variants={timelineItemVariants}>{t.subtitle}</motion.p>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 top-2 h-full w-0.5 bg-[var(--primary-color)]/30 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          
          <motion.div
            className="space-y-12"
            variants={sectionVariants}
          >
            {t.jobs.map((job, index) => (
              <motion.div
                key={index}
                className="relative pl-14"
                variants={timelineItemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5">
                    <div className="w-8 h-8 bg-[var(--bg-color-alt)] rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-[var(--primary-color)] rounded-full border-4 border-[var(--bg-color-alt)]"></div>
                    </div>
                </div>

                {/* Timeline Card */}
                <div className="bg-[var(--bg-color)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--primary-color)]/30 hover:shadow-[var(--primary-color)]/10">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-color)]">{job.role}</h3>
                      <p className="text-md font-semibold text-[var(--primary-color)]">{job.company} - {job.location}</p>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] flex-shrink-0 mt-2 sm:mt-0 sm:ml-4">{job.date}</span>
                  </div>
                  <motion.ul
                    className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] text-sm mt-4"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 'all' }}
                  >
                    {job.duties.map((duty, i) => (
                      <motion.li key={i} variants={listItemVariants}>
                        {duty}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;