import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  position: "left" | "right";
  title: string;
  company: string;
  date: string;
  children: React.ReactNode;
}

export function TimelineItem({ position, title, company, date, children }: TimelineItemProps) {
  const isLeft = position === "left";
  
  return (
    <div 
      className={cn(
        "timeline-item relative w-1/2 p-5 md:p-10",
        isLeft ? "timeline-left left-0" : "timeline-right left-1/2"
      )}
    >
      <div 
        className={cn(
          "absolute w-5 h-5 bg-accent border-4 border-primary rounded-full top-1/2 transform -translate-y-1/2 z-10",
          isLeft ? "right-[-10px]" : "left-[-10px]"
        )}
      ></div>
      
      <div className="bg-secondary p-6 rounded-lg shadow-lg relative z-0">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-primary">{company}</p>
          </div>
          <span className="bg-primary bg-opacity-20 text-primary text-sm font-medium py-1 px-3 rounded-full">
            {date}
          </span>
        </div>
        
        {children}
      </div>
    </div>
  );
}

// For mobile layout
export function TimelineItemMobile({ title, company, date, children }: Omit<TimelineItemProps, "position">) {
  return (
    <div className="timeline-item relative w-full pl-16 pr-4 py-4">
      <div className="absolute w-4 h-4 bg-accent border-4 border-primary rounded-full top-6 left-5 z-10"></div>
      
      <div className="bg-secondary p-4 md:p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            <p className="text-primary">{company}</p>
          </div>
          <span className="bg-primary bg-opacity-20 text-primary text-xs md:text-sm font-medium py-1 px-3 rounded-full self-start">
            {date}
          </span>
        </div>
        
        {children}
      </div>
    </div>
  );
}
