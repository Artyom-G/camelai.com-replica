import Image from "next/image";

interface TagProps {
  text: string;
  imageSrc: string;
}

export default function Tag({ text, imageSrc }: TagProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
      <Image src={imageSrc} alt={text} width={16} height={16} className="rounded-full" />
      <span className="text-sm text-gray-800">{text}</span>
    </div>
  );
}
