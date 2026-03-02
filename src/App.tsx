import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;