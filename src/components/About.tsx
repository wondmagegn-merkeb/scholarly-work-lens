import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Globe } from 'lucide-react';

export const About = () => {
  const qualities = [
    { icon: Target, title: 'Ambitious', desc: 'Always setting high goals for academic and personal growth.' },
    { icon: Heart, title: 'Community-Focused', desc: 'Active volunteer in local food banks and school tutoring programs.' },
    { icon: Zap, title: 'Quick Learner', desc: 'Love diving into new technologies and complex scientific theories.' },
    { icon: Globe, title: 'Collaborative', desc: 'Thrive in team environments, from student council to sports teams.' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-3">About Me</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Building my path through curiosity and hard work.</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I am a senior at Lincoln High School with a deep interest in the intersection of technology and biology. 
              My journey started with a simple science fair project that led me to discover the power of coding.
              <br /><br />
              Beyond academics, I am a varsity debate team member and a volunteer mentor for younger students. I believe that 
              education is more than just grades; it's about how we use what we know to improve the world around us.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {qualities.map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-2">
                  <div className="bg-indigo-50 w-10 h-10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop" 
                alt="Student studying" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-600 p-8 rounded-2xl text-white shadow-xl hidden sm:block">
              <p className="text-4xl font-bold italic">"Innovation starts with a question."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};