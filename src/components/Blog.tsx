import { motion } from 'motion/react';

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { blogData } from '@/constants';

// Framer Motion Variants
import * as variants from '@/lib/motionVariants';

const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {blogData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'
        >
          {blogData.blogs.map(
            (
              {
                imgSrc,
                badge,
                title,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <motion.div
                variants={variants.fadeInUp}
                key={index}
              >
                <Card className='group'>
                  <CardHeader>
                    <figure className='rounded-lg overflow-hidden'>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='img-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </figure>
                  </CardHeader>

                  <CardContent>
                    <Badge className='mb-3'>{badge}</Badge>

                    <CardTitle className='leading-normal'>
                      <a
                        href='#'
                        className='hover:text-muted-foreground transition-colors duration-300'
                      >
                        {title}
                      </a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className='gap-3'>
                    <Avatar>
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>

                    <div className='w-full'>
                      <p className='text-sm'>{authorName}</p>

                      <div className='flex justify-between'>
                        <time
                          dateTime={publishDate}
                          className='text-xs text-muted-foreground'
                        >
                          {publishDate}
                        </time>
                        <p className='text-xs text-muted-foreground'>
                          {readingTime}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
