import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Calendar,
  MapPin,
  Award,
  ExternalLink
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { mockData } from "../data/mock";

const DetailsPage = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts or section changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [section]);

  const sectionConfig = {
    skills: {
      title: "Technical Skills",
      icon: Code2,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    experience: {
      title: "Professional Experience", 
      icon: Briefcase,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    education: {
      title: "Education & Certifications",
      icon: GraduationCap, 
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    contact: {
      title: "Get In Touch",
      icon: Mail,
      gradient: "from-purple-500/20 to-cyan-500/20"
    }
  };

  const currentSection = sectionConfig[section];
  const IconComponent = currentSection?.icon || Code2;

  const renderSkills = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Here are some of my core skills and expertise in technologies that I've used to build multiple scalable, 
          cross-platform mobile applications throughout my 9+ years in the industry.
        </p>
      </motion.div>
      
      {mockData.skills.map((category, index) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="bg-cyan-400/10 text-cyan-100 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A comprehensive overview of the professional experiences and achievements I've gained throughout my career 
          in mobile development frameworks, working with diverse teams and delivering impactful solutions across various industries.
        </p>
      </motion.div>
      
      {mockData.experience.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{job.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{job.duration}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Domain: {job.domain}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  {highlight}
                </li>
              ))}
            </ul>

            {job.projects && (
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-gray-400 mb-2">Key Projects:</p>
                <div className="flex flex-wrap gap-2">
                  {job.projects.map((project) => (
                    <Badge 
                      key={project}
                      variant="outline"
                      className="border-cyan-400/30 text-cyan-300"
                    >
                      {project}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-cyan-400/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{mockData.education.degree}</h3>
              <p className="text-cyan-400 font-semibold mb-1">{mockData.education.institution}</p>
              <p className="text-gray-400">{mockData.education.university} • {mockData.education.duration}</p>
              <p className="text-gray-400 mt-2">CGPA: {mockData.education.cgpa}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 bg-cyan-400/10 rounded-lg">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Professional Training</h3>
              <div className="space-y-3">
                {mockData.certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-cyan-400/30 pl-4">
                    <h4 className="font-semibold text-cyan-300">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.institution}</p>
                    <p className="text-gray-500 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );

  const renderContact = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <Card className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 max-w-md mx-auto">
        <div className="mb-6">
          <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400">Ready to collaborate on your next mobile project</p>
        </div>

        <div className="space-y-4">
          <a 
            href="mailto:gopalakrishnanhs@gmail.com"
            className="flex items-center justify-center gap-3 p-3 bg-cyan-400/10 rounded-lg hover:bg-cyan-400/20 transition-colors duration-200 text-cyan-100"
          >
            <Mail className="w-5 h-5" />
            gopalakrishnanhs@gmail.com
          </a>
          
          <a 
            href="https://www.linkedin.com/in/gopala-krishnan-h-b21aa8a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 text-blue-200"
          >
            <ExternalLink className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </Card>
    </motion.div>
  );

  const renderContent = () => {
    switch (section) {
      case 'skills':
        return renderSkills();
      case 'experience':
        return renderExperience();
      case 'education':
        return renderEducation();
      case 'contact':
        return renderContact();
      default:
        return <div className="text-white">Section not found</div>;
    }
  };

  if (!currentSection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Section not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </motion.div>

          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r ${currentSection.gradient} backdrop-blur-sm border border-white/10 mb-4`}>
              <IconComponent className="w-8 h-8 text-cyan-400" />
              <h1 className="text-3xl font-bold text-white">{currentSection.title}</h1>
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Creative Footer for Details Pages */}
          <motion.footer 
            className="relative mt-20 bg-gradient-to-br from-gray-900/90 via-slate-900/90 to-gray-900/90 backdrop-blur-sm border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="container mx-auto px-6 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Explore More Sections
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {Object.entries(sectionConfig).map(([key, config]) => {
                      const IconComponent = config.icon;
                      if (key === section) return null; // Don't show current section
                      return (
                        <Button
                          key={key}
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(`/details/${key}`)}
                          className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {config.title}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;