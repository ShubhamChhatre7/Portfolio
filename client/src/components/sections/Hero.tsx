import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(#7F5AF0 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary mb-2 font-mono">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-serif">Shubham Chhatre</h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground mb-6">Software Engineer & Freelancer</h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              Building elegant solutions to complex problems with a passion for clean, efficient code. 
              Specialized in web development and creating memorable digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg transition-all"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="border border-primary text-primary hover:bg-primary hover:bg-opacity-10 px-6 py-3 rounded-lg transition-all"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
            <div className="relative bg-secondary p-4 rounded-lg">
              <pre className="text-sm">
                <code>
                  <span className="text-accent">class</span> <span className="text-primary">SoftwareEngineer</span> {"{"}
                  {"\n"}  constructor() {"{"}
                  {"\n"}    this.name = <span className="text-green-300">"Shubham Chhatre"</span>;
                  {"\n"}    this.skills = [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"React"</span>, 
                  {"\n"}      <span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"SQL"</span>];
                  {"\n"}    this.education = <span className="text-green-300">"B.Tech in Electronics & Telecom"</span>;
                  {"\n"}  {"}"}
                  {"\n"}
                  {"\n"}  <span className="text-accent">solve</span>(problem) {"{"}
                  {"\n"}    <span className="text-purple-300">return</span> <span className="text-accent">this.analyze</span>(problem)
                  {"\n"}      .<span className="text-accent">then</span>(solution {'=>'} 
                  {"\n"}        solution.<span className="text-accent">implement</span>());
                  {"\n"}  {"}"}
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <a href="#about" aria-label="Scroll Down">
            <ChevronDown className="text-primary text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
