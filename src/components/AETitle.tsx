import React, { useEffect, useState, useRef } from "react";
interface Props {
  seen: boolean;
  setSeen: Function;
}
let timer: NodeJS.Timer | undefined;
const title = "Axon Terminal";

function AETitle({ seen, setSeen }: Props) {
  const titleRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const element = entries[0].target;
        console.log("element", element);
        if (!seen && entries[0].isIntersecting) {
          console.log(seen);
          setSeen(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Start observing the TypewritterTitle component
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [seen]);

  return (
    <div className="bg-slate-100 py-16">
      <h1
        className={`text-7xl font-bold text-center ${
          !seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-1rem]"
        } transition-all duration-1000 ease-in-out`}
      >
        Axon Edit
      </h1>
    </div>
  );
}

export default AETitle;
