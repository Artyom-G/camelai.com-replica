"use client";

import { useEffect, useRef, useState } from "react";
import CarouselLogo from "./CarouselLogo";

interface CarouselProps {
  logos: { imageSrc: string; link: string }[];
  speed?: number;
}

export default function Carousel({ logos, speed = 1 }: CarouselProps) {
  const duplicatedLogos = [...logos, ...logos];
  const trackRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(Math.abs(speed));

  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth / 2;
      const duration = totalWidth / 30 / Math.abs(speed);
      setAnimationDuration(duration);
    }
  }, [logos, speed]);

  return (
    <div className="logo-carousel-wrapper">
      <div className="logo-carousel-container relative overflow-hidden w-full py-4">
        <div
          ref={trackRef}
          className={`logo-track p-3 ${speed < 0 ? "reverse" : ""}`}
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <CarouselLogo imageSrc={logo.imageSrc} link={logo.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
