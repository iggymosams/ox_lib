import { AnimatePresence, motion } from 'framer-motion';

const SlideFadeRight: React.FC<{ visible: boolean; children: React.ReactNode; onExitComplete?: () => void }> = ({
  visible,
  children,
  onExitComplete,
}) => {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: [0, 0, 0.2, 1] } }}
          exit={{ opacity: 0, x: 50, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideFadeRight;
