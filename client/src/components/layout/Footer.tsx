import { Link } from "wouter";
import { Mail, Linkedin, Github, Twitter, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background text-muted-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary font-serif">
              SC.
            </Link>
            <p className="text-sm mt-2">Software Engineer & Freelancer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:shubhamchhatre20@gmail.com" 
              className="hover:text-primary transition-colors" 
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/shubham" 
              className="hover:text-primary transition-colors" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Shubham-chhatre" 
              className="hover:text-primary transition-colors" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-primary transition-colors" 
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shubham Chhatre. All rights reserved.</p>
          
          <nav className="flex flex-wrap space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-primary hover:bg-primary/80 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 ${
          showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
