import React, { useEffect, useState, useRef } from "react";

const AboutText: React.FC = () => {
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
    <div>
      <div ref={sectionRef} className="py-12">
        <p
          className={`text-2xl font-bold text-center ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[1rem]"
          } transition-all duration-1000 ease-in-out`}
        >
          Stats on how much labs stand on computer training
        </p>
      </div>
      <div ref={sectionRef} className="py-16 bg-slate-500">
        <p
          className={`text-4xl font-bold text-center ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[1rem]"
          } transition-all duration-1000 ease-in-out`}
        >
          We founded NCI to solve this problem.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
