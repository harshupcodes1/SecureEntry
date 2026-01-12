import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import Card3D from '../components/Card3D';
import LoginForm3D from '../components/LoginForm3D';
import RegisterForm3D from '../components/RegisterForm3D';
import LogoutView3D from '../components/LogoutView3D';

const Index = () => {
  const [view, setView] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setView('logout');
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setView('logout');
  };

  const handleRegisterSuccess = () => {
    setView('login');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('login');
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* 3D Background Scene - Fixed position to prevent movement during view changes */}
      <Scene3D />
      
      {/* Gradient overlay for depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, transparent 0%, hsl(45 20% 97% / 0.3) 100%),
            linear-gradient(135deg, hsl(40 15% 94% / 0.5) 0%, transparent 40%, hsl(35 20% 90% / 0.3) 100%)
          `,
        }}
      />

      {/* Auth Card Container - Fixed height container to prevent layout shifts */}
      <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-end p-6 md:p-12 lg:pr-[25%]">
        <motion.div
          className="w-full max-w-md "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ minHeight: '500px' }}
        >
          <Card3D>
            <div style={{ minHeight: '480px' }}>
              <AnimatePresence mode="wait">
                {view === 'login' && !isAuthenticated && (
                  <LoginForm3D
                    key="login"
                    onSwitch={() => setView('register')}
                    onSuccess={handleLoginSuccess}
                  />
                )}
                {view === 'register' && !isAuthenticated && (
                  <RegisterForm3D
                    key="register"
                    onSwitch={() => setView('login')}
                    onSuccess={handleRegisterSuccess}
                  />
                )}
                {view === 'logout' && isAuthenticated && (
                  <LogoutView3D key="logout" onLogout={handleLogout} />
                )}
              </AnimatePresence>
            </div>
          </Card3D>

          {/* Footer */}
          
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
