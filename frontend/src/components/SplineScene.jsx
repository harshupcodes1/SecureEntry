import { motion } from 'framer-motion';

const SplineScene = () => {
  return (
    <motion.div
      className="spline-container hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <iframe
        src="https://my.spline.design/genkubgreetingrobot-XZ8TQ7XJ0t5Ofhbq5lP7EzFt/"
        frameBorder="0"
        width="100%"
        height="100%"
        title="3D Spline Scene"
        className="w-full h-full"
        style={{ pointerEvents: 'auto' }}
      />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-background/10" />
    </motion.div>
  );
};

export default SplineScene;
