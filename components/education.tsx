// components/education.tsx
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { useRef } from "react";

// Gradient schemes for education cards
const educationGradients = [
  { bg: "from-red-900 via-red-800 to-red-700", border: "from-red-400/60 via-red-300/60 to-red-200/60" },
  { bg: "from-purple-900 via-indigo-900 to-purple-800", border: "from-purple-400/60 via-indigo-400/60 to-purple-300/60" },
];

export default function Education() {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <div className="education-grid grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {educationData.map((item, index) => {
          const gradient = educationGradients[index % educationGradients.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="education-card-wrapper"
              style={{ height: '220px' }}
            >
              <div 
                className={`education-card relative rounded-xl p-[1.5px] bg-gradient-to-br ${gradient.border}`}
                style={{ height: '100%', width: '100%' }}
              >
                <div 
                  className={`education-card-inner relative rounded-xl bg-gradient-to-br ${gradient.bg} p-5 flex flex-col justify-between overflow-hidden`}
                  style={{ height: '100%' }}
                >
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent z-0" />
                  
                  {/* Content */}
                  <div className="education-content relative z-10 flex flex-col justify-between" style={{ height: '100%' }}>
                    <div>
                      <h3 className="education-date text-lg font-semibold" style={{ color: '#ffffff' }}>{item.date}</h3>
                      <h4 className="education-institution text-base font-medium mt-1" style={{ color: '#ffffff' }}>{item.institution}</h4>
                      <p className="education-title text-sm mt-1" style={{ color: '#f3f4f6' }}>{item.title}</p>
                      <p className="education-location text-xs mt-1" style={{ color: '#e5e7eb' }}>{item.location}</p>
                    </div>
                    <p className="education-grade text-xs mt-3" style={{ color: '#e5e7eb' }}>Grade: {item.grade}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
