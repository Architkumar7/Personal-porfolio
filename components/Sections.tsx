import React, { useRef, useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { type ExperienceItem, type ProjectItem } from '../types';
import {
  CoinStackIcon,
  BarChartIcon,
  BriefcaseIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  ChatBubbleLeftRightIcon,
  BuildingOffice2Icon
} from './Icons';

/* ---------------------------------
   Helper: Animated Section
---------------------------------- */
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section ref={ref} id={id} className={`py-20 md:py-28 ${className ?? ''}`}>
      <div className={`container mx-auto px-6 reveal ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

/* ---------------------------------
   HERO SECTION
---------------------------------- */
const roles = ['CA Aspirant', 'Finance Enthusiast', 'Tech Geek'];

const FloatingIcon: React.FC<{
  style: React.CSSProperties;
  children: React.ReactNode;
}> = ({ style, children }) => (
  <div
    className="absolute opacity-5 text-lime-300 filter drop-shadow-[0_0_8px_#a3e635]"
    style={style}
  >
    {children}
  </div>
);

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timeoutId: number;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = window.setTimeout(() => setText(text.slice(0, -1)), 60);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (text.length < fullText.length) {
        timeoutId = window.setTimeout(
          () => setText(fullText.slice(0, text.length + 1)),
          120
        );
      } else {
        timeoutId = window.setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, roleIndex, isDeleting]);

  const icons = [
    { icon: <CoinStackIcon className="w-8 h-8 md:w-12 md:h-12" />, top: '15%', left: '10%', animation: 'float-1 6s ease-in-out infinite' },
    { icon: <BarChartIcon className="w-8 h-8 md:w-12 md:h-12" />, top: '25%', left: '80%', animation: 'float-2 8s ease-in-out infinite' },
    { icon: <BriefcaseIcon className="w-8 h-8 md:w-12 md:h-12" />, top: '70%', left: '5%', animation: 'float-3 7s ease-in-out infinite' },
    { icon: <CoinStackIcon className="w-8 h-8 md:w-12 md:h-12" />, top: '80%', left: '90%', animation: 'float-1 7.5s ease-in-out infinite' },
    { icon: <BarChartIcon className="w-8 h-8 md:w-12 md:h-12" />, top: '50%', left: '50%', animation: 'float-2 9s ease-in-out infinite' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.1)_0%,_rgba(0,0,0,0)_60%)]" />

      {icons.map((item, i) => (
        <FloatingIcon
          key={i}
          style={{ top: item.top, left: item.left, animation: item.animation }}
        >
          {item.icon}
        </FloatingIcon>
      ))}

      <div className="text-center z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-100 mb-4">
          Archit Kumar
        </h1>

        <div className="text-2xl md:text-4xl text-lime-400 h-12">
          <span className="typing-cursor whitespace-nowrap">{text}</span>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
          A CA Aspirant with a strong interest in finance and technology, aiming to build
          expertise across audit, analytics, and fintech.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block bg-lime-400 text-black font-bold py-3 px-8 rounded-full hover:bg-lime-300 transition-all"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

/* ---------------------------------
   EDUCATION SECTION
---------------------------------- */
const experiences: ExperienceItem[] = [
  {
    role: 'ICAI (Institute of Chartered Accountants of India)',
    company: 'Chartered Accountancy',
    period: '2024 – Present',
    description: [
      'Cleared CA Foundation in first attempt (June 2024).',
      'Cleared CA Intermediate Group 1; awaiting Group 2 results.',
      'Successfully completed OC & ITT training.'
    ]
  },
  {
    role: 'Christ (Deemed to be University)',
    company: 'BCOM – Finance & Accountancy',
    period: '2024 – Present',
    description: [
      'Maintained an average CGPA of 3.62.',
      'Interacted with Finance Minister Nirmala Sitharaman on GST reforms.',
      'Won 3rd place in communication & negotiation fest.'
    ]
  },
  {
    role: 'Christ Academy Junior College',
    company: 'ISC (Commerce)',
    period: '2022 – 2024',
    description: [
      'Secured 93.5% in ISC examinations.',
      'Active participant in debates and copywriting.'
    ]
  },
  {
    role: 'Mitra Academy',
    company: 'ICSE',
    period: '2012 – 2022',
    description: [
      'Secured 95% in ICSE.',
      'Top 4 chess player in school team.'
    ]
  }
];

export const Education: React.FC = () => (
  <AnimatedSection id="education">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold">Education</h2>
      <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full" />
    </div>

    <div className="relative border-l-2 border-lime-900 pl-10">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-12 relative">
          <div className="absolute -left-[50px] top-2 w-8 h-8 bg-zinc-900 rounded-full border-4 border-lime-400 flex items-center justify-center">
            <BriefcaseIcon className="w-4 h-4 text-lime-400" />
          </div>

          <div className="bg-zinc-900/60 p-6 rounded-lg border border-zinc-800">
            <span className="text-sm text-lime-400">{exp.period}</span>
            <h3 className="text-xl font-bold text-gray-100 mt-1">{exp.role}</h3>
            <p className="text-gray-400 mb-3">{exp.company}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
);
