import { motion } from 'framer-motion';
import { LogOut, CheckCircle } from 'lucide-react';
import Button3D from './Button3D';

const LogoutView3D = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15, z: -50 }}
      animate={{ opacity: 1, rotateY: 0, z: 0 }}
      exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-8"
      >
        <div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{
            background: 'linear-gradient(135deg, hsl(145 50% 95%) 0%, hsl(145 40% 90%) 100%)',
            boxShadow: `
              0 8px 24px -4px rgba(74, 160, 115, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset 0 -1px 0 rgba(74, 160, 115, 0.1)
            `,
          }}
        >
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
          You're logged in
        </h1>
        <p className="text-muted-foreground max-w-xs mx-auto">
          Your session is active and secure. Sign out when you're done.
        </p>
      </motion.div>

      {/* Logout Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xs mx-auto"
      >
        <Button3D onClick={handleLogout} variant="secondary" delay={0.25}>
          <span className="flex items-center justify-center gap-2">
            <LogOut size={18} />
            Sign out
          </span>
        </Button3D>
      </motion.div>

      {/* Footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-10 text-xs text-muted-foreground/70"
      >
        Secured with JWT authentication
      </motion.p>
    </motion.div>
  );
};

export default LogoutView3D;
