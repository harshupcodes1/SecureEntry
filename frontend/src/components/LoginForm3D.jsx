import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input3D from './Input3D';
import Button3D from './Button3D';
import { apiRequest } from "../lib/app";


const LoginForm3D = ({ onSwitch, onSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
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
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      // JWT token save
      localStorage.setItem('token', data.token);
      onSuccess();
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
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
          Welcome back
        </h1>
        <p className="text-muted-foreground text-sm">
          Sign in to your account
        </p>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input3D
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          delay={0.15}
        />

        <Input3D
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          delay={0.2}
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
          <Button3D type="submit" loading={loading} delay={0.25}>
            Sign in
          </Button3D>
        </div>
      </form>

      {/* Switch to Register */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-center mt-8 text-sm text-muted-foreground"
      >
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-foreground font-medium hover:underline underline-offset-4 transition-all duration-200"
        >
          Create one
        </button>
      </motion.p>
    </motion.div>
  );
};

export default LoginForm3D;
