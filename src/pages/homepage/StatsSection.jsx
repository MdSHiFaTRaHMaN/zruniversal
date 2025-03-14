import React, { useState, useEffect, useRef } from "react";
import { Statistic } from "antd";
import "antd/dist/reset.css";
import Counter from "../../assets/counter_bg.jpg";

const stats = [
  { value: 150, label: "Working Persons" },
  { value: 175, label: "Projects Completed" },
  { value: 150, label: "Happy Clients" },
  { value: 120, label: "Running" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });

              if (start === end) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="relative w-full py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Counter})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto flex flex-col md:flex-row justify-around items-center px-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4">
            <Statistic
              value={counts[index]}
              className="text-white text-3xl font-bold"
              valueStyle={{ color: "#fff" }}
            />
            <p className="text-lg font-semibold mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
