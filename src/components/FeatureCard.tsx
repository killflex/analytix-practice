import { motion } from 'motion/react';

type FeatureCardProps = {
  classes?: string;
  children: React.ReactNode;
};

const FeatureCard = ({ classes, children }: FeatureCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden p-0.5 ring ring-inset ring-zinc-800/50 rounded-2xl ${classes}`}
    >
      <motion.div className='relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden'>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
