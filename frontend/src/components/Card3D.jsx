import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Card3D = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Subtle rotation - max 4 degrees
    const rotateYValue = (mouseX / (rect.width / 2)) * 4;
    const rotateXValue = -(mouseY / (rect.height / 2)) * 4;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: rotateX,
        rotateY: rotateY
      }}
      transition={{
        opacity: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        y: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        rotateX: { duration: 0.15, ease: "easeOut" },
        rotateY: { duration: 0.15, ease: "easeOut" }
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Card shadow layer */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(60, 50, 40, 0.15) 100%)',
          transform: 'translateZ(-20px) translateY(15px) scale(0.95)',
          filter: 'blur(25px)',
        }}
      />
      
      {/* Main card */}
      <div 
        className="relative bg-card/95 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-border/50"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 25px 50px -12px rgba(60, 50, 40, 0.12),
            0 12px 24px -8px rgba(60, 50, 40, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -1px 0 rgba(60, 50, 40, 0.05)
          `,
        }}
      >
        {/* Glass highlight effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
          }}
        />
        
        <div style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Card3D;
