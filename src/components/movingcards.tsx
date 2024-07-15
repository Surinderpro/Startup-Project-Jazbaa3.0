"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    content:
      "The integrated platform revolutionized our DevOps workflow. Centralized access and AI-powered recommendations have significantly boosted our productivity and reduced errors.",
  },
  {
    content:
      "With real-time monitoring and automation, our team can now focus on strategic tasks. The platform's intelligent suggestions have been a game-changer for our cloud management.",
  },
  {
    content:
      "The unified dashboard and AI-driven insights are phenomenal. Managing multiple cloud services has never been easier or more efficient.",
  },
  {
    content:
      "Automated scaling and corrective actions have drastically improved our service reliability. The contextual help and community integration are invaluable.",
  },
  {
    content:
      "The platform's AI-powered recommendations for best practices have optimized our configurations and deployments. It's an indispensable tool for any DevOps team.",
  },
];
