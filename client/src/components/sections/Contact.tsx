import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  FileDown, 
  Send
} from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Submit form
      contactMutation.mutate(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format errors
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };
  
  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="contact" className="py-20 diagonal-box bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading inline-block">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Ready to collaborate or have a question? Feel free to reach out and I'll get back to you as soon as possible!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="bg-background p-6 rounded-lg shadow-lg"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-secondary border ${
                    errors.name ? "border-destructive" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all`} 
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-secondary border ${
                    errors.email ? "border-destructive" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all`} 
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 bg-secondary border ${
                    errors.subject ? "border-destructive" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all`} 
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-destructive">{errors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className={`w-full p-3 bg-secondary border ${
                    errors.message ? "border-destructive" : "border-gray-700"
                  } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none`} 
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center"
                disabled={contactMutation.isPending}
              >
                <span>{contactMutation.isPending ? "Sending..." : "Send Message"}</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-background p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:shubhamchhatre20@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      shubhamchhatre20@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+917218616068" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7218616068
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Nagpur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://linkedin.com/in/shubham" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-secondary hover:bg-primary/20 p-4 rounded-lg transition-all flex items-center"
                >
                  <Linkedin className="text-primary text-xl mr-3 h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/Shubham-chhatre" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-secondary hover:bg-primary/20 p-4 rounded-lg transition-all flex items-center"
                >
                  <Github className="text-primary text-xl mr-3 h-5 w-5" />
                  <span>GitHub</span>
                </a>
                
                <button 
                  onClick={handleDownloadResume}
                  className="bg-secondary hover:bg-primary/20 p-4 rounded-lg transition-all flex items-center col-span-2"
                >
                  <FileDown className="text-primary text-xl mr-3 h-5 w-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
