import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { Users, Bus } from "lucide-react";

export function Projects() {
  const projectData = [
    {
      title: "Building Edutech Website",
      date: "Sep 2024",
      description: "Built an edutech and tech website using the Django framework and hosted it on PythonAnywhere, focusing on efficiency, accuracy, and data storage.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django", "Git", "SQL"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      links: {
        github: "https://github.com/Shubham-chhatre",
        demo: "#"
      }
    },
    {
      title: "PhysioPhy Website",
      date: "Feb 2025",
      description: "Built a smart web-based platform that automates physiotherapy appointment booking with real-time slot availability and inquiry forms to improve clinic efficiency.",
      technologies: ["React", "Vue", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Supabase"],
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      links: {
        github: "https://github.com/Shubham-chhatre",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 diagonal-box bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading inline-block">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A showcase of my technical skills and problem-solving abilities through real-world applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
          
          {/* Achievement Project */}
          <motion.div 
            className="md:col-span-2"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="project-card group bg-background rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Notable Achievements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary p-4 rounded-lg flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Student Tech Club Co-founder</h4>
                      <p className="text-muted-foreground text-sm">
                        Co-founded a student tech club and organized coding workshops that led to increased membership and student engagement in technical activities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-secondary p-4 rounded-lg flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                      <Bus className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Bus Tracking Portal</h4>
                      <p className="text-muted-foreground text-sm">
                        Led a team of 5 to organize and launch a bus tracking portal for both private and public sector services, improving transit efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
