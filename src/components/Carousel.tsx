import { useEffect, useRef, useState } from "react";
import CarouselLogo from "./CarouselLogo";

interface CarouselProps {
  logos: { imageSrc: string; link: string }[];
  speed?: number; // Optional speed control
}

export default function Carousel({ logos, speed = 30 }: CarouselProps) {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless looping
  const trackRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(speed);

  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth / 2; // Half width (since duplicated)
      const duration = totalWidth / speed; // Adjust speed based on width
      setAnimationDuration(duration);
    }
  }, [logos, speed]);

  return (
    <div className="overflow-hidden w-full relative bg-black py-4">
      <div
        ref={trackRef}
        className="flex w-max animate-carousel"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <CarouselLogo key={index} imageSrc={logo.imageSrc} link={logo.link} />
        ))}
      </div>
    </div>
  );
}
