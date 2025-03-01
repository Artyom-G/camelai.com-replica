import Image from "next/image";

interface SectionImageProps {
    h1: string;
    h2_1: string;
    h2_2: string;
    bannerSrc: string;
    iconSrc: string;
}

export default function SectionImage({
    h1,
    h2_1,
    h2_2,
    bannerSrc,
    iconSrc
}: SectionImageProps) {
    return (
        <section className="flex flex-col items-center justify-center h-full space-y-4 pb-[130px]">
            <div
                className="flex items-center justify-center space-x-3 relative p-5"
                style={{
                    width: "fit-content",
                    backgroundImage:
                        "linear-gradient(90deg, var(--clr-white-10) 50%, transparent 50%), linear-gradient(90deg, var(--clr-white-10) 50%, transparent 50%), linear-gradient(180deg, var(--clr-white-10) 50%, transparent 50%), linear-gradient(180deg, var(--clr-white-10) 50%, transparent 50%)",
                    backgroundPosition: "0 0, 0 100%, 0 0, 100% 0",
                    backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
                    backgroundSize: "18px 2px, 18px 2px, 2px 18px, 2px 18px",
                    borderRadius: "6px"
                }}
            >
                <Image
                    src={iconSrc}
                    alt="icon"
                    width={40}
                    height={40}
                />
                <h1 className="text-center font-mono font-light text-white text-3xl">{h1}</h1>
            </div>
            <h2 className="text-center text-[18px] text-gray-300 pb-0">
                {h2_1}
                <br />
                {h2_2}
            </h2>
            <h2 className="text-center pt-0"></h2>
            <div className="w-[95%] max-w-1280 justify-center flex">
                <Image src={bannerSrc} alt="banner" width={1280} height={100} />
            </div>
        </section>
    );
}
