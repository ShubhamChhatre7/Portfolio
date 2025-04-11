import React from "react";
import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { BadgeCheck, Code, Brain, Users, Lightbulb, MessageSquare, UserPlus, RefreshCw, Clock1 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const technicalSkills = [
    { skill: "Python", level: 90 },
    { skill: "React.js", level: 85 },
    { skill: "SQL", level: 80 },
    { skill: "Node.js", level: 75 }
  ];
  
  const coreConcepts = [
    { 
      icon: <Code className="text-primary text-sm" />, 
      title: "Data Structures", 
      description: "Proficient in designing and implementing efficient data structures." 
    },
    { 
      icon: <BadgeCheck className="text-primary text-sm" />, 
      title: "Algorithms", 
      description: "Strong understanding of algorithm design and analysis techniques." 
    },
    { 
      icon: <Code className="text-primary text-sm" />, 
      title: "OOP", 
      description: "Expertise in object-oriented programming principles and patterns." 
    },
    { 
      icon: <Brain className="text-primary text-sm" />, 
      title: "Problem Solving", 
      description: "Methodical approach to analyzing and solving complex problems." 
    }
  ];
  
  const softSkills = [
    { icon: Lightbulb, title: "Critical Thinking" },
    { icon: MessageSquare, title: "Communication" },
    { icon: UserPlus, title: "Teamwork" },
    { icon: RefreshCw, title: "Adaptability" },
    { icon: Clock1, title: "Time Management" }
  ];
  
  const coursework = [
    "Data Structures", "Algorithm Analysis", "Artificial Intelligence", 
    "Python Programming", "Software Methodology", "DBMS", 
    "Machine Learning", "Computer Networks"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block">
            Skills & Expertise
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code className="text-primary mr-3 h-5 w-5" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} level={item.level} />
              ))}
            </div>
          </motion.div>
          
          {/* Core Concepts */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Brain className="text-primary mr-3 h-5 w-5" />
              Core Concepts
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {coreConcepts.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary p-4 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Soft Skills */}
        <motion.div 
          className="mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Users className="text-primary mr-3 h-5 w-5" />
            Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {softSkills.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-secondary p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/20 p-3 rounded-full mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                  {item.icon && <item.icon className="text-primary" />}
                </div>
                <h4 className="font-medium">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Education and Certifications */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-3 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold">S.B. Jain Institute Of Technology</h4>
                <span className="text-primary">July 2024</span>
              </div>
              <p className="text-muted-foreground mb-2">BTech in Electronics and Telecommunication</p>
              <p className="text-primary">CGPA: 8.35</p>
              
              <div className="mt-4">
                <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => (
                    <Badge key={index} variant="skill" className="bg-background py-1 px-3 rounded-full text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-3 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Certifications
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-secondary p-4 rounded-lg flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.297 8.199l1.71 4.888h-3.42l1.71-4.888zm9.229 6.196l-1.21-3.455c-.188-.536-.381-1.114-.553-1.74l-1.67-4.763c-.509-1.428-1.83-2.426-3.365-2.426h-5.476c-1.535 0-2.856.998-3.365 2.426l-1.67 4.763c-.172.626-.365 1.204-.553 1.74l-1.21 3.455c-.291.83.149 1.731.98 2.022.173.06.351.09.531.09.66 0 1.277-.415 1.49-1.069l.946-2.701c.446.762 1.276 1.273 2.223 1.273h1.008l-1.304 3.721h2.449l1.667-4.768h2.106l1.667 4.768h2.449l-1.304-3.721h1.008c.947 0 1.777-.511 2.223-1.273l.946 2.701c.213.654.83 1.069 1.49 1.069.18 0 .358-.03.531-.09.831-.291 1.272-1.192.98-2.022z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Software Engineer Intern</h4>
                  <p className="text-sm text-muted-foreground">HackerRank | Dec 2024</p>
                </div>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10M7 17L17 7"/>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-4 rounded-lg flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Advanced Software Engineering</h4>
                  <p className="text-sm text-muted-foreground">Walmart Global Tech | Dec 2024</p>
                </div>
                <div className="ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10M7 17L17 7"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
