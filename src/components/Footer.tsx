import { motion } from 'motion/react';

import Logo from './Logo';

import { Button } from './ui/button';

import { footerData } from '@/constants';

// Framer Motion Variants
import * as variants from '@/lib/motionVariants';

const Footer = () => {
  return (
    <motion.footer
      variants={variants.fadeInUp}
      initial='start'
      whileInView='end'
      viewport={{ once: true }}
      className='section !pb-0'
    >
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <Logo />

          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className='mb-4'>{title}</p>

                {items.map(({ href, label }, index) => (
                  <li
                    key={index}
                    className=''
                  >
                    <Button
                      variant='link'
                      className='p-0 text-muted-foreground'
                    >
                      <a
                        href={href}
                        className=''
                      >
                        {label}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className='flex justify-between border-t border-gray-600/10 py-6 lg:col-span-4'>
            <a
              href='https://killflex.vercel.app'
              target='_blank'
            >
              {footerData.copyright}
            </a>

            <div className=''>
              <ul className='flex gap-5'>
                {footerData.socialLinks.map(({ href, icon }, index) => (
                  <li
                    key={index}
                    className=''
                  >
                    <a
                      href={href}
                      target='_blank'
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
