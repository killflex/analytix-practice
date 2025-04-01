import { motion } from 'motion/react';

import { brands } from '@/assets';

import * as variants from '@/lib/motionVariants';

const Brand = () => {
  return (
    <section className='section'>
      <div className='container'>
        <motion.p
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          className='text-center mb-4 md:mb-6'
        >
          Powering data insights for today's startup and tomorro's leader.
        </motion.p>

        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          className='flex justify-center flex-wrap gap-5 md:gap-10'
        >
          {brands.map((brand, index) => (
            <motion.figure
              variants={variants.fadeInUp}
              key={index}
            >
              <img
                src={brand}
                alt=''
                className='opacity-[0.6]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
