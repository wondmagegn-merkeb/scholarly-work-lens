import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f6c8dff-c1d8-463e-a0b1-f3750f35459f/hero-bg-cc781ca6-1772455556277.webp" 
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700 mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Class of 2025 • Honor Student
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="text-indigo-600">Alex Rivera</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            A passionate high school student, aspiring software engineer, and science enthusiast. Dedicated to lifelong learning and creating impactful projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 px-2">
              <a href="#" className="p-3 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors shadow-sm">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-600 transition-colors shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats / Quick Info */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 left-0 right-0 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 flex justify-between max-w-3xl">
            <div className="text-center px-8 border-r border-gray-100">
              <p className="text-3xl font-bold text-indigo-600">4.0</p>
              <p className="text-sm text-gray-500 font-medium">GPA</p>
            </div>
            <div className="text-center px-8 border-r border-gray-100">
              <p className="text-3xl font-bold text-indigo-600">12+</p>
              <p className="text-sm text-gray-500 font-medium">Projects Done</p>
            </div>
            <div className="text-center px-8 border-r border-gray-100">
              <p className="text-3xl font-bold text-indigo-600">3</p>
              <p className="text-sm text-gray-500 font-medium">Awards</p>
            </div>
            <div className="text-center px-8">
              <p className="text-3xl font-bold text-indigo-600">500+</p>
              <p className="text-sm text-gray-500 font-medium">Service Hours</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};