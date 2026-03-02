import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="bg-indigo-600 p-12 lg:p-16 text-white relative">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">Get in touch</h3>
                <p className="text-indigo-100 text-lg mb-12 max-w-sm">
                  Whether you have a question about my projects, academic background, or just want to say hi, my inbox is always open.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm font-medium">Email Me</p>
                      <p className="text-xl font-bold">alex.rivera@school.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm font-medium">Location</p>
                      <p className="text-xl font-bold">Seattle, WA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 flex gap-4">
                  {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/30 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-gray-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell me more..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-gray-50 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};