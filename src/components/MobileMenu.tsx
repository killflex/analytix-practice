import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { Separator } from './ui/separator';

import { MenuItem } from '@/types';

import { ChevronsUpDown } from 'lucide-react';

type MobileMenuProps = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div className=''>
      <ul className='mb-3'>
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger className='w-full'>
                  <Button
                    variant='ghost'
                    className='w-full'
                  >
                    <div className='w-full flex justify-between items-center'>
                      {label}
                      <ChevronsUpDown />
                    </div>
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className='ps-2'>
                  <ul className='border-l border-l-muted-foreground/20'>
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button
                          variant='ghost'
                          className='w-full justify-start text-muted-foreground hover:bg-transparent dark:hover:bg-transparent'
                        >
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant='ghost'
                className='w-full justify-start'
              >
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className='bg-muted-foreground/20' />

      <div className='grid grid-cols-2 gap-2 mt-3'>
        <Button
          variant='ghost'
          className='w-full'
        >
          Sign In
        </Button>
        <Button className='w-full'>Start Trial</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
