import { motion } from 'framer-motion';
import { LogOut, CheckCircle } from 'lucide-react';
import AuthButton from './AuthButton';

const LogoutView = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
          You're logged in
        </h1>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Your session is active. You can safely log out when you're done.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-xs mx-auto"
      >
        <AuthButton onClick={handleLogout} variant="secondary" delay={0.25}>
          <span className="flex items-center justify-center gap-2">
            <LogOut size={18} />
            Sign out
          </span>
        </AuthButton>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-8 text-sm text-muted-foreground"
      >
        Secured with JWT authentication
      </motion.p>
    </motion.div>
  );
};

export default LogoutView;
