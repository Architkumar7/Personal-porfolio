import React from 'react';

interface IconProps {
  className?: string;
}

export const CoinStackIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.879A3 3 0 0112 6h0a3 3 0 012.121 5.121M12 6c-2.073 0-4.1.4-5.5 1.125M12 6v14m0-14c2.073 0 4.1.4 5.5 1.125m-11 0a4.5 4.5 0 000 8.25m11 0a4.5 4.5 0 01-11 0m11 0c-2.073 0-4.1-.4-5.5-1.125m5.5 1.125a4.5 4.5 0 00-5.5-8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v1.5m0 0v1.5m0-1.5h.008m-.008 0H12m0 0v-1.5m0 1.5v1.5m0 0h.008m-.008 0H12" />
  </svg>
);

export const BarChartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.47-2.206 2.656-1.19.18-2.31-.225-3.131-.956-1.144-.995-1.397-2.606-1.397-3.75V14.15m0 0c-1.144-.995-1.397-2.606-1.397-3.75v-4.075c0-1.313.964-2.47 2.206-2.656 1.19-.18 2.31.225 3.131.956 1.144.995 1.397 2.606 1.397 3.75V14.15m-11.25 0c-1.144-.995-1.397-2.606-1.397-3.75v-4.075c0-1.313.964-2.47 2.206-2.656 1.19-.18 2.31.225 3.131.956 1.144.995 1.397 2.606 1.397 3.75V14.15" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.62.68-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.99 3.38 3.75V19z" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 4.5h21A1.5 1.5 0 0124 6v12a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 18V6A1.5 1.5 0 011.5 4.5zM3 7.86v8.28l6.83-5.36L3 7.86zM21 7.86L14.17 13.2 21 16.14V7.86zM12.5 13.9l.17.13.17-.13 5.4-4.2H6.75l5.75 4.2zM3.41 6l8.76 6.87L20.59 6h-17.18z" />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.05 1.05 0 01-1.485 0l-3.72-3.72A2.1 2.1 0 015.25 14.882V10.608c0-.97.616-1.813 1.5-2.097m0 0A2.1 2.1 0 017.5 6.411v1.086c0 .97.616 1.813 1.5 2.097m0 0a2.1 2.1 0 002.25 0m0 0a2.1 2.1 0 012.25 0m0 0A2.1 2.1 0 0015 9.593v-1.086a2.1 2.1 0 00-2.25-2.097" />
    </svg>
);

export const BuildingOffice2Icon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V3.75M12 21V3.75M15.75 21V3.75M5.25 4.5h13.5" />
    </svg>
);