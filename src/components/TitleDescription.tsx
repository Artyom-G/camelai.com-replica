interface TitleDescriptionProps {
    title: string;
    desc: string;
}

export default function TitleDescription({ title, desc }: TitleDescriptionProps) {
    return (
        <div className="pb-8">
            <h2 className="text-[24px] pb-3">{title}</h2>
            <p className="text-[16px] text-gray-400">{desc}</p>
        </div>
    );
}
