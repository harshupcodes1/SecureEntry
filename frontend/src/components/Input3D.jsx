import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const Input3D = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  delay = 0,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      <label className="block text-sm font-medium text-foreground mb-2.5">
        {label}
      </label>

      <div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inset shadow container */}
        <div
          className={`
    absolute inset-0 rounded-xl transition-all duration-300
    pointer-events-none
    ${isFocused ? 'opacity-100' : 'opacity-0'}
  `}
          style={{
            boxShadow: '0 0 0 3px rgba(120, 110, 100, 0.08)',
          }}
        />


        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3.5 rounded-xl
            bg-secondary/60 text-foreground
            placeholder:text-muted-foreground/60
            border transition-all duration-300 ease-out
            focus:outline-none focus:bg-card
            ${isFocused
              ? 'border-primary/40'
              : 'border-border/80 hover:border-border'
            }
            ${isPassword ? 'pr-12' : ''}
          `}
          style={{
            boxShadow: isFocused
              ? `
                inset 0 2px 4px rgba(60, 50, 40, 0.04),
                0 1px 2px rgba(255, 255, 255, 0.8)
              `
              : `
                inset 0 2px 6px rgba(60, 50, 40, 0.06),
                inset 0 1px 2px rgba(60, 50, 40, 0.03)
              `,
          }}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Input3D;
