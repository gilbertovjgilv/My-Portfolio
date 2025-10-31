import React from 'react';
import { translations } from '../translations';
import Carousel from './Carousel';
import { BriefcaseIcon } from './icons/Icons';

interface TestimonialsProps {
  t: typeof translations.en.experience;
}

const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  const carouselItems = t.jobs.map((job, index) => ({
    id: index,
    title: job.role,
    description: `${job.company} | ${job.date}`,
    icon: <BriefcaseIcon className="carousel-icon" />,
    details: job.duties,
  }));

  return (
    <section id="experience" className="py-20 bg-[var(--bg-color-alt)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]">{t.title}</h2>
        <p className="text-center text-sm text-[var(--text-secondary)] mb-12">{t.subtitle}</p>

        <div className="flex justify-center">
            <Carousel
                items={carouselItems}
                baseWidth={400}
                autoplay={true}
                autoplayDelay={5000}
                pauseOnHover={true}
                loop={true}
            />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;