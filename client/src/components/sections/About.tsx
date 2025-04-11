import { motion } from "framer-motion";
import { Code, Database, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 diagonal-box bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              About Me
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm a Software Engineer with a background in Electronics and Telecommunication, 
              set to graduate in July 2024 from S.B. Jain Institute of Technology with a CGPA of 8.35.
            </p>
            <p className="text-muted-foreground mb-4">
              My technical journey encompasses both backend and frontend technologies, 
              with a strong foundation in data structures, algorithms, and problem-solving methodologies.
            </p>
            <p className="text-muted-foreground mb-4">
              I've gained practical experience through internships at Campus Marg and SS Infotech, 
              where I developed web solutions that improved system efficiency and data accessibility.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, I'm active in the tech community, having co-founded a student tech club 
              and organized coding workshops to share knowledge and inspire others.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-background p-4 rounded-lg flex items-center">
                <div className="bg-primary/20 p-3 rounded-full mr-3">
                  <Code className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Development</h3>
                  <p className="text-sm text-muted-foreground">Web & Software</p>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg flex items-center">
                <div className="bg-primary/20 p-3 rounded-full mr-3">
                  <Database className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Data</h3>
                  <p className="text-sm text-muted-foreground">SQL & Processing</p>
                </div>
              </div>
              <div className="bg-background p-4 rounded-lg flex items-center">
                <div className="bg-primary/20 p-3 rounded-full mr-3">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Leadership</h3>
                  <p className="text-sm text-muted-foreground">Team & Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden transform rotate-3 border-4 border-primary">
                <div 
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                <p className="text-primary font-bold text-xl">2+ Years</p>
                <p className="text-sm text-muted-foreground">Development Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
