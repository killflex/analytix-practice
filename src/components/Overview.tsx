import { motion } from 'motion/react';

import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import ReactPlayer from 'react-player/youtube';

import { overviewData } from '@/constants';
import { overviewBanner } from '@/assets';
import { Play } from 'lucide-react';

// Framer Motion Variants
import * as variants from '@/lib/motionVariants';

const Overview = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {overviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>

        <div>
          <motion.div
            variants={variants.fadeInScale}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='relative max-w-4xl mx-auto shadow-xl'
          >
            <figure className=''>
              <img
                src={overviewBanner}
                width={900}
                height={601}
                alt=''
              />
            </figure>

            <Dialog>
              <DialogTrigger>
                <Button
                  variant='secondary'
                  size='icon'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 shadow-lg'
                >
                  <div className='sr-only'>Play video</div>
                  <Play
                    fill='#fff'
                    size={50}
                  />
                </Button>
              </DialogTrigger>

              <DialogContent className='p-0 overflow-hidden md:max-w-[640px] lg:max-w-[800px]'>
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=FGzo2Dm3Rh8'
                    style={{
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    controls
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>

          <div className='max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-12 xl:grid-cols-[3fr_2fr]'>
            <motion.p
              variants={variants.fadeInRight}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'
            >
              {overviewData.listTitle}
            </motion.p>

            <motion.div
              variants={variants.staggerContainer}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'
            >
              {overviewData.list.map(({ title, text }, index) => (
                <motion.div
                  variants={variants.fadeInLeft}
                  key={index}
                  className='text-center'
                >
                  <h3 className='text-3xl'>{title}</h3>
                  <p className='text-muted-foreground'>{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
