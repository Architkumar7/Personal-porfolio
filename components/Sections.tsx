import React, { useRef, useState, useEffect } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { type ExperienceItem, type ProjectItem } from '../types';
import { CoinStackIcon, BarChartIcon, BriefcaseIcon, GithubIcon, LinkedInIcon, MailIcon, ChatBubbleLeftRightIcon, BuildingOffice2Icon } from './Icons';

// Helper component for scroll-triggered animations
const AnimatedSection: React.FC<{ children: React.ReactNode, id: string, className?: string }> = ({ children, id, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <section ref={ref} id={id} className={`py-20 md:py-28 ${className || ''}`}>
      <div className={`container mx-auto px-6 reveal ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

// --- HERO SECTION ---
const roles = ["CA Aspirant", "Finance Enthusiast", "Tech Geek"];

// New FloatingIcon Component
const FloatingIcon: React.FC<{ style: React.CSSProperties, children: React.ReactNode }> = ({ style, children }) => (
    <div className="absolute opacity-5 text-lime-300 filter drop-shadow-[0_0_8px_#a3e635]" style={style}>
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
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 60); // Deleting speed
      } else {
        // Finished deleting
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else { // is not deleting
      if (text.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 120); // Typing speed
      } else {
        // Finished typing, pause and then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause duration
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, roleIndex, isDeleting]);


  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const icons = [
    { icon: <CoinStackIcon className="w-8 h-8 md:w-12 md:h-12"/>, top: '15%', left: '10%', animation: 'float-1 6s ease-in-out infinite' },
    { icon: <BarChartIcon className="w-8 h-8 md:w-12 md:h-12"/>, top: '25%', left: '80%', animation: 'float-2 8s ease-in-out infinite' },
    { icon: <BriefcaseIcon className="w-8 h-8 md:w-12 md:h-12"/>, top: '70%', left: '5%', animation: 'float-3 7s ease-in-out infinite' },
    { icon: <CoinStackIcon className="w-8 h-8 md:w-12 md:h-12"/>, top: '80%', left: '90%', animation: 'float-1 7.5s ease-in-out infinite' },
    { icon: <BarChartIcon className="w-8 h-8 md:w-12 md:h-12"/>, top: '50%', left: '50%', animation: 'float-2 9s ease-in-out infinite' },
  ];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(163,230,53,0.1)_0%,_rgba(0,0,0,0)_60%)]"></div>
        {icons.map((item, i) => (
            <FloatingIcon key={i} style={{ top: item.top, left: item.left, animation: item.animation }}>
                {item.icon}
            </FloatingIcon>
        ))}

        <div className="text-center z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-100 mb-4 [text-shadow:0_0_12px_rgba(255,255,255,0.3)]">
                Archit Kumar
            </h1>
            <div className="text-2xl md:text-4xl text-lime-400 font-medium h-12 text-glow">
                <span className="typing-cursor whitespace-nowrap">{text}</span>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
                A CA Aspirant who has cleared CA foundation on the first attempt and is awaiting CA intermediate results. I have a keen interest in technology and aim to get experience in various fields related to Audit and Finance.
            </p>
            <a href="#contact" onClick={handleScrollToContact} className="mt-8 inline-block bg-lime-400 text-black font-bold py-3 px-8 rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-lime-500/20 hover:shadow-lime-400/40">
                Get In Touch
            </a>
        </div>
    </section>
  );
};


// --- ABOUT SECTION ---
const aboutSkills = [
  { icon: <CoinStackIcon className="w-8 h-8 text-lime-400"/>, title: 'Achievements', description: 'Recognized for academic excellence in national commerce olympiads.' },
  { icon: <BriefcaseIcon className="w-8 h-8 text-lime-400"/>, title: 'Certifications', description: 'Completed courses in MS Excel and Replit Agent to enhance technical skills.' },
  { icon: <BarChartIcon className="w-8 h-8 text-lime-400"/>, title: 'Diverse Interests', description: 'Exploring AI, Stock Markets, Photography, and Copywriting.' },
]
export const About: React.FC = () => {
  return (
    <AnimatedSection id="about" className="bg-zinc-900/70">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">About Me</h2>
        <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="md:w-1/3">
          <div className="relative w-60 h-60 md:w-80 md:h-80 mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-600 to-green-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img 
              src="https://i.ibb.co/Jb6qm3C/Whats-App-Image-2025-10-05-at-22-58-46-6894aaaf.jpg" 
              alt="Archit Kumar" 
              className="relative rounded-full w-full h-full object-cover border-4 border-zinc-800"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hey there! I’m a CA aspirant who loves exploring the deep worlds of finance and technology. I cleared my CA Foundation and Intermediate Group 1 on my first attempt and am now awaiting my Group 2 results. Numbers keep me grounded, but my curiosity for AI and tech keeps me moving forward. I’m excited to bring the best of both worlds together as I begin my CA articleship — learning, experimenting, and growing along the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {aboutSkills.map((skill) => (
              <div key={skill.title} className="flex flex-col h-full items-center md:items-start text-center md:text-left p-4 rounded-lg hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-lime-500/30">
                <div className="text-lime-400 [filter:drop-shadow(0_0_5px_currentColor)]">{skill.icon}</div>
                <h3 className="font-bold text-xl mt-3 mb-1 text-gray-100">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};


// --- EDUCATION SECTION ---
onst experiences: ExperienceItem[] = [
  { role: 'ICAI (Institute of Chartered Accountants of India)', company: 'Chartered Accountancy', period: '2024 - Present', description: ['Cleared CA Foundation in June 2024 in the first attempt.', 'Wrote CA intermediate in May 2025 cleared group 1 and awaiting result for group 2.', 'Successfully completed OC & ITT training. '] },
  { role: 'Christ (Deemed to be University)', company: 'BCOM (Finance & Accountancy)', period: '2024 - Present', description: ['Average of 3.62 CGPA in the two semesters.', 'Interacted with the honorable finance minister Nirmala Sitaraman to discuss New-Gen GST Reforms that was broadcasted on National Television.', 'Won 3rd place in a communication and negotiation fest.', 'Finalized in the Top 30 of a chess tournament featuring over 400 participants.'] },
  { role: 'Christ Academy Junior College', company: 'ISC (English, Commerce, economics and Math)', period: '2022 - 2024', description: ['Secured a 93.5% in 12th std ISC exams.', 'Represented the School in numerous interschool debating competitions.', 'Was a copywriter in a marketing agency as a side hustle for real-world market experience.', 'Secured top 3 in a photography competition.'] },
  { role: 'Mitra Academy', company: 'ICSE', period: '2012 - 2022', description: ['Secured a 95% in 10th std ICSE.', 'Was amongst top 4 best chess players in school team.'] }
];
export const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">Education</h2>
        <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="relative border-l-2 border-lime-900 pl-10">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[50px] top-1.5 w-8 h-8 bg-zinc-900 rounded-full border-4 border-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/30">
              <BriefcaseIcon className="w-4 h-4 text-lime-400" />
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-lg shadow-lg hover:shadow-lime-500/20 transition-all duration-300 border border-zinc-800 hover:border-lime-500/30 hover:-translate-y-1">
              <span className="text-sm font-semibold text-lime-400">{exp.period}</span>
              <h3 className="text-xl font-bold text-gray-100 mt-1">{exp.role}</h3>
              <p className="text-gray-400 mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((desc, i) => <li key={i} className="marker:text-lime-400">{desc}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

// --- SKILLS & INTERESTS SECTION ---
const skillsAndInterests: ProjectItem[] = [
  { title: 'Key Achievements', description: 'Recognized for academic and extracurricular excellence in competitive events.', skills: ['Commerce Olympiad (ICAI) - AIR 6', 'Commerce Olympiad (SRCC) - 99 percentile'] },
  { title: 'Technical Skills', description: 'Exploring modern technologies and software relevant to finance and business efficiency.', skills: ['MS Excel', 'AI', 'IDEA', 'MS Access', 'MS Powerpoint', 'MS Word', 'Oracle', 'Tally', 'Zoho'] },
  { title: 'Certifications', description: 'Completed courses to enhance technical and practical skills relevant to the finance industry.', skills: ['MS Excel', 'Replit Agent'] },
  { title: 'Co-curricular', description: 'Engaged in creative, athletic, and literary hobbies like debate and writing, alongside interests in guitar, dance, and sports.', skills: ['Guitar', 'Dance', 'Sports (Cricket)', 'Debate', 'Writing'] },
  { title: 'Other Interests', description: 'Pursuing a range of creative and analytical hobbies outside of core finance.', skills: ['Stock Market', 'Photography', 'Copywriting', 'Marketing'] },
];
export const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="bg-zinc-900/70">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">Skills & Interests</h2>
        <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {skillsAndInterests.map((project, index) => {
          const isLastItem = index === skillsAndInterests.length - 1;
          const isOddNumberOfItems = skillsAndInterests.length % 2 !== 0;

          // Card content is extracted to avoid repetition
          const cardContent = (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-lime-400 transition-colors">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
                    <GithubIcon className="w-6 h-6" />
                  </a>
                )}
              </div>
              <p className="text-gray-300 flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-lime-900/70 text-lime-300 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </>
          );
          
          if (isLastItem && isOddNumberOfItems) {
            // This wrapper will span the full width of the grid and center the card within it.
            return (
              <div key={index} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-[calc(50%-1rem)] bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300 hover:border-lime-500/50 hover:shadow-lime-500/10">
                  {cardContent}
                </div>
              </div>
            );
          }

          // Render a normal card
          return (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300 hover:border-lime-500/50 hover:shadow-lime-500/10">
              {cardContent}
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};


// --- IMPACTFUL EXPERIENCES SECTION ---
const impactfulExperiences = [
    {
        icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-lime-400 mb-4" />,
        title: "Interaction with Finance Minister",
        description: "Engaged in a high-level discussion with the Honourable Finance Minister of India, Nirmala Sitharaman, contributing insights and perspectives on new GST and tax reforms. This interaction was a unique opportunity to understand the logic and the mindset involved in setting fiscal and financial policies that shape the country.",
    },
    {
        icon: <BuildingOffice2Icon className="w-10 h-10 text-lime-400 mb-4" />,
        title: "Service Learning Project",
        description: "Gained deep insights into apartment organization operations, focusing on revenue and expense management. Analyzed and provided recommendations on systems related to revenue and expense optimization, applying financial logic to real-world scenarios.",
    }
];
export const ImpactfulExperiences: React.FC = () => {
    return (
        <AnimatedSection id="experiences">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Impactful Experiences</h2>
                <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {impactfulExperiences.map((exp, index) => (
                    <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 hover:border-lime-500/50 hover:shadow-lime-500/10">
                        <div className="text-lime-400 [filter:drop-shadow(0_0_5px_currentColor)]">{exp.icon}</div>
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-lime-400 transition-colors mt-4 mb-2">{exp.title}</h3>
                        <p className="text-gray-300 flex-grow">{exp.description}</p>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    );
};


// --- CONTACT SECTION ---
export const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="bg-zinc-900/70">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">Get In Touch</h2>
        <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 mb-8 rounded-full"></div>
        <p className="text-lg text-gray-300 mb-8">
          I'm actively seeking Articleship opportunities and am open to collaborations in the fin-tech space. Whether you have a question or just want to connect, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:Archer107kr@gmail.com" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-800 py-3 px-6 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 group border border-zinc-700 hover:border-lime-400">
            <MailIcon className="w-6 h-6 text-lime-400 group-hover:text-black transition-colors"/>
            <span className="font-semibold">Email Me</span>
          </a>
           <a href="https://www.linkedin.com/in/archit-kumar-2005-cainter" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-800 py-3 px-6 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 group border border-zinc-700 hover:border-lime-400">
            <LinkedInIcon className="w-6 h-6 text-lime-400 group-hover:text-black transition-colors"/>
            <span className="font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};
