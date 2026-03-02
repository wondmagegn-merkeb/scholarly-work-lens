import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Microscope, Palette, Trophy } from 'lucide-react';

const projects = [
  {
    title: "Eco-Friendly Battery",
    category: "Science Fair",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f6c8dff-c1d8-463e-a0b1-f3750f35459f/project-science-6002e548-1772455556523.webp",
    desc: "A research project exploring organic materials for sustainable energy storage. Won 1st place in Regional Science Fair.",
    tags: ["Research", "Chemistry", "Sustainability"],
    icon: Microscope
  },
  {
    title: "Student Planner App",
    category: "Software Development",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f6c8dff-c1d8-463e-a0b1-f3750f35459f/project-coding-93e01f64-1772455561993.webp",
    desc: "Built a React-based task management app specifically designed for high school schedules and assignments.",
    tags: ["React", "Firebase", "UI/UX"],
    icon: Code
  },
  {
    title: "Nature in Watercolor",
    category: "Fine Arts",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6f6c8dff-c1d8-463e-a0b1-f3750f35459f/project-art-78bdf18e-1772455556677.webp",
    desc: "A series of watercolor paintings exploring local flora. Featured in the District Annual Art Exhibition.",
    tags: ["Painting", "Art", "Observation"],
    icon: Palette
  },
  {
    title: "School Debate Series",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1544928147-79723465d5d0?q=80&w=1374&auto=format&fit=crop",
    desc: "Organized a district-wide debate competition involving 10 schools and over 100 participants.",
    tags: ["Leadership", "Public Speaking", "Org"],
    icon: Trophy
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-3"
          >
            My Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900"
          >
            Featured Projects & Works
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 flex items-center shadow-sm">
                    <project.icon className="w-3.5 h-3.5 mr-1.5" />
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" className="flex items-center text-sm font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                    View Project <ExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                  {project.category === "Software Development" && (
                    <a href="#" className="flex items-center text-sm font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                      Github <Github className="ml-1.5 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};