import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const AuthButton = ({
  children,
  onClick,
  type = 'button',
  loading = false,
  disabled = false,
  delay = 0,
  variant = 'primary',
}) => {
  const baseClasses = variant === 'primary' 
    ? 'auth-button' 
    : 'w-full py-3.5 px-6 rounded-xl font-medium text-sm bg-secondary text-secondary-foreground transition-all duration-300 ease-out hover:bg-accent active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ scale: disabled || loading ? 1 : 1.01 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Please wait...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default AuthButton;
