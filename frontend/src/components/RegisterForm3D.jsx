import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input3D from './Input3D';
import Button3D from './Button3D';
import { apiRequest } from "../lib/app";


const RegisterForm3D = ({ onSwitch, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      // After successful register → switch to login
      onSuccess();
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
          Create account
        </h1>
        <p className="text-muted-foreground text-sm">
          Join us today
        </p>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input3D
          label="Full name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          delay={0.15}
        />

        <Input3D
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          delay={0.2}
        />

        <Input3D
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          delay={0.25}
        />

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className="auth-error"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-2">
          <Button3D type="submit" loading={loading} delay={0.3}>
            Create account
          </Button3D>
        </div>
      </form>

      {/* Switch to Login */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-8 text-sm text-muted-foreground"
      >
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-foreground font-medium hover:underline underline-offset-4 transition-all duration-200"
        >
          Sign in
        </button>
      </motion.p>
    </motion.div>
  );
};

export default RegisterForm3D;
