import { motion } from 'framer-motion';

import { fadeAnimations } from '../frammerMotions/fade';

type Props = JSX.Element | JSX.Element[] | string | string[];

const AnimatedPage = ({ children }: { children: Props }) => {
  return (
    <motion.div
      variants={fadeAnimations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.2 }}
      className={'w-full h-full'}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
