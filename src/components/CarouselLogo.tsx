import Image from "next/image";

interface CarouselLogoProps {
  imageSrc: string;
  link: string;
}

export default function CarouselLogo({ imageSrc, link }: CarouselLogoProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="px-5">
      <Image src={imageSrc} alt="logo" width={80} height={40} className="opacity-80 hover:opacity-100 transition" />
    </a>
  );
}
