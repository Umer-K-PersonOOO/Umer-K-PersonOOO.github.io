import React, { useEffect, useState, useRef } from "react";

const AETitle: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAppeared) {
            setIsVisible(true);
            setHasAppeared(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAppeared]);

  return (
    <div ref={sectionRef} className="bg-slate-100 py-24">
      <p
        className={`text-8xl font-bold text-center ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-1rem]"
        } transition-all duration-1000 ease-in-out`}
      >
        Axon Edit
      </p>
    </div>
  );
};

export default AETitle;
