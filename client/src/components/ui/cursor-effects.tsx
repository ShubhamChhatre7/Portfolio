import { useEffect, useState } from "react";

export function CursorEffects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);
  
  return (
    <>
      <div 
        className="cursor-dot fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`cursor-outline fixed border-2 border-primary/50 rounded-full pointer-events-none z-[998] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering ? "w-16 h-16 border-primary/80" : "w-10 h-10"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
