import React, { useCallback, useEffect, useRef, useState } from 'react';

type Greeting = {
  text: string;
  lang: string;
  script: string;
  dir?: 'rtl';
};

const greetings: Greeting[] = [
  { text: 'Hello.', lang: 'ENGLISH', script: 'latin' },
  { text: 'नमस्ते', lang: 'हिन्दी', script: 'devanagari' },
  { text: 'こんにちは', lang: '日本語', script: 'japanese' },
  { text: 'مرحبا', lang: 'العربية', script: 'arabic', dir: 'rtl' },
  { text: 'Bonjour.', lang: 'FRANÇAIS', script: 'latin' },
  { text: 'Ciao.', lang: 'ITALIANO', script: 'latin' },
];

type IntroProps = {
  onDone: () => void;
};

const Intro: React.FC<IntroProps> = ({ onDone }) => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in');
  const [final, setFinal] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(onDone, 620);
  }, [onDone]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finished.current = true;
      onDone();
      return;
    }

    document.body.style.overflow = 'hidden';
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const run = async () => {
      for (let i = 0; i < greetings.length; i++) {
        if (finished.current) return;
        setIndex(i);
        setTyped('');
        setPhase('in');

        const text = greetings[i].text;
        for (let c = 1; c <= text.length; c++) {
          if (finished.current) return;
          setTyped(text.slice(0, c));
          await wait(38);
        }

        setPhase('hold');
        await wait(170);
        setPhase('out');
        await wait(180);
      }

      if (finished.current) return;
      setFinal(true);
      await wait(720);
      finish();
    };

    run();

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      document.body.style.overflow = '';
    };
  }, [finish, onDone]);

  const current = greetings[index];

  return (
    <div
      className={`intro ${leaving ? 'intro-leaving' : ''}`}
      onClick={finish}
      role="presentation"
    >
      <span className="sr-only">Welcome to the portfolio of Mihir Joshi.</span>

      <div className="intro-inner" aria-hidden="true">
        <div className="intro-head">
          <span className="intro-logo">
            MJ<span>.</span>
          </span>
          <span>A small introduction</span>
        </div>

        <div className="intro-center">
          {!final ? (
            <>
              <div className="intro-meta">
                <span>{current.lang}</span>
                <span>
                  Greeting 0{index + 1} / 0{greetings.length}
                </span>
              </div>
              <p
                key={index}
                className={`intro-word intro-script-${current.script} ${
                  phase === 'out' ? 'intro-word-out' : ''
                }`}
                dir={current.dir}
              >
                {typed}
                <span className="intro-caret" />
              </p>
            </>
          ) : (
            <div className="intro-final">
              <div className="intro-meta">
                <span>Welcome</span>
                <span>Portfolio / 2026</span>
              </div>
              <p className="intro-word intro-final-word">
                Welcome<span className="intro-accent">.</span>
              </p>
              <p className="intro-final-sub">to my corner of the internet</p>
            </div>
          )}
        </div>

        <div className="intro-foot">
          <div className="intro-progress">
            <i
              style={{
                width: `${
                  final ? 100 : ((index + 1) / greetings.length) * 100
                }%`,
              }}
            />
          </div>
          <span className="intro-skip">Skip intro ↗</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
