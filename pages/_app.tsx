import type { AppProps } from 'next/app';
import { useCallback, useEffect, useState } from 'react';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import Intro from '../components/Intro';
import '../styles/globals.css';

const STORAGE_KEY = 'mj-intro-seen';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jb',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const [introDone, setIntroDone] = useState(false);

  const handleDone = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      setIntroDone(true);
    }
    document.documentElement.classList.add('intro-seen');
    setIntroDone(true);
  }, []);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') {
        document.documentElement.classList.add('intro-seen');
        setIntroDone(true);
      }
    } catch {
      setIntroDone(true);
    }
  }, []);

  return (
    <div className={`site ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${
      introDone ? 'site-ready' : 'site-loading'
    }`}>
      {!introDone && <Intro onDone={handleDone} />}
      <Component {...pageProps} />
    </div>
  );
}
