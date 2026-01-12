import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const Scene3D = () => {
  return (
    <motion.div
  className="fixed inset-0 z-0 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ 
    opacity: 1,
    y: [0, -6, 0]   // 👈 VERY subtle up–down
  }}
  transition={{ 
    opacity: { duration: 1.2, ease: "easeOut" },
    y: {
      duration: 10,   // 👈 slow motion
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
>

      {/* Spline scene container - positioned to keep robot hand visible */}
      <div 
        className="absolute inset-0"
        style={{
          width: '120%',
          height: '120%',
          left: '-15%',
          top: '-5%',
        }}
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
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-background/30" />
    </motion.div>
  );
};

export default Scene3D;
