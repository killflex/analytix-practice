import { motion } from 'motion/react';

import { Button } from './ui/button';

import { ctaData } from '@/constants';
import { ctaBanner } from '@/assets';

// Framer Motion Variants
import * as variants from '@/lib/motionVariants';

const Cta = () => {
  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:items-center'
        >
          <div className='p-8 md:p-16 xl:p-20'>
            <motion.h2
              variants={variants.fadeInRight}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='text-2xl leading-tight font-semibold mb-6 capitalize sm:text-4xl md:text-[40px] lg:mb-10'
            >
              {ctaData.text}
            </motion.h2>

            <motion.div
              variants={variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex gap-2 items-center'
            >
              <Button className='bg-foreground text-background hover:bg-foreground/90 duration-300'>
                Free Trial
              </Button>
              <Button
                variant='outline'
                className=''
              >
                Pricing & Plans
              </Button>
            </motion.div>
          </div>

          <motion.figure
            variants={variants.fadeInLeft}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='-order-1 pt-14 ps-8 sm:ps-12 md:ps-14 lg:order-none lg:p-0'
          >
            <img
              src={ctaBanner}
              alt=''
              className='img-cover'
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
