import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button3D = ({ 
  children, 
  onClick, 
  type = 'button', 
  loading = false,
  variant = 'primary',
  delay = 0
}) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={loading}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        scale: 1.01,
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        y: 2,
        transition: { duration: 0.1 }
      }}
      className={`
        relative w-full py-4 px-6 rounded-xl font-medium text-sm
        transition-all duration-300 ease-out overflow-hidden
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${isPrimary 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-secondary text-secondary-foreground border border-border'
        }
      `}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: isPrimary
          ? `
            0 6px 20px -4px rgba(45, 40, 35, 0.3),
            0 3px 8px -2px rgba(45, 40, 35, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1)
          `
          : `
            0 4px 12px -2px rgba(45, 40, 35, 0.08),
            0 2px 4px -1px rgba(45, 40, 35, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(0, 0, 0, 0.03)
          `,
      }}
    >
      {/* Top highlight */}
      <div 
        className="absolute inset-x-0 top-0 h-px opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
        }}
      />
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          children
        )}
      </span>
      
      {/* Bottom shadow inset */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1 opacity-20"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.1))',
        }}
      />
    </motion.button>
  );
};

export default Button3D;
