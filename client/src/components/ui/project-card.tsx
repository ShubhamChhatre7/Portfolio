import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./badge";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  image: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

export function ProjectCard({ 
  title, 
  date, 
  description, 
  technologies, 
  image,
  links = {} 
}: ProjectCardProps) {
  return (
    <div className="project-card group bg-background rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:-translate-y-2">
      <div className="relative h-60">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-center bg-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="skill">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a href="#" className="text-primary hover:text-accent transition-colors flex items-center">
            <span>View Details</span>
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <div className="flex space-x-3">
            {links.github && (
              <a 
                href={links.github} 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="View Code"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            
            {links.demo && (
              <a 
                href={links.demo} 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Live Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
