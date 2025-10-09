import React from 'react';
import { Header, Footer } from './components/Layout';
import { Hero, About, Education, Skills, ImpactfulExperiences, Contact } from './components/Sections';

function App() {
  return (
    <div className="text-gray-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <ImpactfulExperiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;