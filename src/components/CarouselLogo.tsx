import Image from "next/image";

interface CarouselLogoProps {
    imageSrc: string;
    link: string;
}

export default function CarouselLogo({ imageSrc, link }: CarouselLogoProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="">
            <Image
                src={imageSrc}
                alt="logo"
                width={80}
                height={40}
                className="filter brightness-[0.4] hover:brightness-100 transition hover:scale-110"
            />
        </a>
    );
}
