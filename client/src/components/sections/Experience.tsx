import { motion } from "framer-motion";
import { TimelineItem, TimelineItemMobile } from "@/components/ui/timeline-item";
import { Users, FolderKanban } from "lucide-react";
import { useEffect, useState } from "react";

export function Experience() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            Work Experience
          </h2>
        </motion.div>
        
        {isMobile ? (
          // Mobile Timeline
          <div className="animate-fade-in relative pl-7">
            <div className="absolute h-full w-0.5 bg-primary left-0 top-0"></div>
            
            <TimelineItemMobile
              title="Software Engineer Intern"
              company="Campus Marg"
              date="June 2023"
            >
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Created a web-based solution, increasing system efficiency by 20% in data processing workflows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Developed a dashboard with Python and Streamlit, improving data accessibility by 30%.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Conducted code reviews and debugging to ensure code quality and adherence to project requirements.</span>
                </li>
              </ul>
            </TimelineItemMobile>
            
            <TimelineItemMobile
              title="Engineering Intern"
              company="SS Infotech"
              date="Jan 2024"
            >
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Conducted performance benchmarking tests to validate the scalability of deployed solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Designed a customer feedback management system, increasing response rates by 18%.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Developed a responsive client services website, optimizing page load times from 5 to under 4 seconds.</span>
                </li>
              </ul>
            </TimelineItemMobile>
          </div>
        ) : (
          // Desktop Timeline
          <div className="timeline-container animate-fade-in">
            <TimelineItem
              position="right"
              title="Software Engineer Intern"
              company="Campus Marg"
              date="June 2023"
            >
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Created a web-based solution, increasing system efficiency by 20% in data processing workflows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Developed a dashboard with Python and Streamlit, improving data accessibility by 30%.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Conducted code reviews and debugging to ensure code quality and adherence to project requirements.</span>
                </li>
              </ul>
            </TimelineItem>
            
            <TimelineItem
              position="left"
              title="Engineering Intern"
              company="SS Infotech"
              date="Jan 2024"
            >
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Conducted performance benchmarking tests to validate the scalability of deployed solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Designed a customer feedback management system, increasing response rates by 18%.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Developed a responsive client services website, optimizing page load times from 5 to under 4 seconds.</span>
                </li>
              </ul>
            </TimelineItem>
          </div>
        )}
        
        {/* Responsibilities Section */}
        <motion.div 
          className="mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 font-serif relative inline-block">
            <span className="relative">
              Leadership Experience
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></span>
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-secondary p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Executive Member</h4>
                  <p className="text-sm text-muted-foreground">IEEE SB, SBJTMR Nagpur | Aug 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Organized technical workshops, coordinated events, and facilitated knowledge sharing among IEEE student members.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-secondary p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FolderKanban className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Team Leader</h4>
                  <p className="text-sm text-muted-foreground">Final Year Project, SBJTMR | Sep 2023</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Led a team of students in planning, execution, and presentation of complex technical projects while meeting academic deadlines.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
