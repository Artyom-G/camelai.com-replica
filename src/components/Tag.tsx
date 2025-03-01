import Image from "next/image";

interface TagProps {
  text: string;
  imageSrc: string;
}

export default function Tag({ text, imageSrc }: TagProps) {
  return (
    <div className="flex justify-center items-center my-[10px] rounded-[10px] pl-3 pr-3 h-[37px] bg-[var(--clr-white-10)]">
      <Image src={imageSrc} alt={text} width={16} height={16}/>
      <span className="text-sm text-white-800 tracking-wider pl-2 font-light">{text}</span>
    </div>
  );
}
