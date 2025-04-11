import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      // Animate the skill bar to the level percentage
      setTimeout(() => {
        setWidth(level);
      }, 100);
    }
  }, [isInView, level]);
  
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-1500 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}
