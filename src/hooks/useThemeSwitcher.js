import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefer-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');

    const handleModeChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light';
        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        let check = userPref === 'dark' ? 'dark' : 'light';
        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    handleModeChange();

    mediaQuery.addEventListener('change', handleModeChange);

    return () => mediaQuery.removeEventListener('change', handleModeChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
