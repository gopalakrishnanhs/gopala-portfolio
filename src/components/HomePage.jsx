import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin,
  MapPin,
  Phone,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const HomePage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const ctaTiles = [
    {
      id: "skills",
      title: "Technical Skills",
      description: "Frameworks, Tools & Technologies",
      icon: Code2,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: "experience", 
      title: "Experience",
      description: "9+ Years in Mobile Development",
      icon: Briefcase,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      id: "education",
      title: "Education & Certifications", 
      description: "Academic Background & Training",
      icon: GraduationCap,
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: "contact",
      title: "Get In Touch",
      description: "Let's connect and collaborate",
      icon: Mail,
      gradient: "from-purple-500/20 to-cyan-500/20"
    }
  ];

  const handleTileClick = (sectionId) => {
    navigate(`/details/${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-6 pt-20 pb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                Gopala Krishnan H
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              React Native Developer with{" "}
              <span className="text-cyan-400 font-semibold">9+ years</span> of experience
              building scalable, cross-platform mobile applications
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">gopalakrishnanhs@gmail.com</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/gopala-krishnan-h-b21aa8a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">LinkedIn Profile</span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Tiles Section */}
        <motion.section 
          className="container mx-auto px-6 pt-6 pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Discover My Journey
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ctaTiles.map((tile, index) => {
                const IconComponent = tile.icon;
                return (
                  <motion.div
                    key={tile.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                    className="h-full"
                  >
                    <Card 
                      className={`relative group cursor-pointer overflow-hidden bg-gradient-to-br ${tile.gradient} backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col`}
                      onClick={() => handleTileClick(tile.id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated border running around the tile */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-lg animate-border-glow">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-top"></div>
                          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-border-right"></div>
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-border-bottom"></div>
                          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-border-left"></div>
                        </div>
                      </div>
                      
                      <div className="relative p-6 flex-1 flex flex-col z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                            <IconComponent className="w-6 h-6 text-cyan-400" />
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                            {tile.title}
                          </h3>
                          
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-1">
                            {tile.description}
                          </p>
                        </div>
                        
                        <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Creative Footer */}
        <motion.footer 
          className="relative mt-20 bg-gradient-to-br from-gray-900/90 via-slate-900/90 to-gray-900/90 backdrop-blur-sm border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {/* Floating particles for footer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * 200,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * 200,
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to build something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    amazing
                  </span>
                  ?
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's collaborate and turn your mobile app ideas into reality
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/details/contact')}
                >
                  Let's Connect
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              {/* Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex flex-wrap justify-center gap-3">
                  {["React Native", "React JS", "Mobile Development", "Cross-Platform", "Firebase", "Security"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.6 + index * 0.1, duration: 0.4 }}
                      className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-300 text-sm font-medium hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                className="border-t border-white/10 pt-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <p className="text-gray-400 text-sm">
                      © 2024 Gopala Krishnan H. Crafted with passion.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href="mailto:gopalakrishnanhs@gmail.com"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/gopala-krishnan-h-b21aa8a1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <div className="w-px h-6 bg-gray-600"></div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    ></motion.div>
                    <span className="text-gray-400 text-sm">Available for projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default HomePage;