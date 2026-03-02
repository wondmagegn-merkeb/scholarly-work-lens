import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Star, Award, GraduationCap } from 'lucide-react';

const skills = [
  { name: 'Mathematics', level: 95 },
  { name: 'Computer Science', level: 90 },
  { name: 'Physics', level: 85 },
  { name: 'English Literature', level: 88 },
  { name: 'Public Speaking', level: 92 },
  { name: 'Data Analysis', level: 80 },
];

const achievements = [
  { title: "National Honor Society", year: "2023 - Present", desc: "Recognized for academic excellence, leadership, and service." },
  { title: "Dean's List", year: "2022, 2023, 2024", desc: "Maintained a consistent GPA of 4.0 throughout high school." },
  { title: "Varsity Debate Award", year: "2023", desc: "Awarded 'Most Improved Speaker' in the state championships." },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-3">Academic Foundation</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
              Skills & Expertise
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800">{skill.name}</span>
                    <span className="text-sm font-semibold text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-3">Recognition</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Achievements</h3>
            
            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 hover:bg-indigo-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <span className="text-xs font-semibold text-indigo-500 bg-white px-2 py-0.5 rounded border border-indigo-100">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-2">Want to work together?</h4>
                    <p className="text-indigo-200 mb-6">I'm always looking for collaborative research or community service opportunities.</p>
                    <a href="#contact" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                      Reach Out
                    </a>
                  </div>
                  <GraduationCap className="absolute -bottom-6 -right-6 w-48 h-48 text-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};