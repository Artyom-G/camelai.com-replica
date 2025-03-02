import backgroundImage from "@/assets/background-orange-gradient.jpg";
import ButtonFilled from "@/components/ButtonFilled";
import ButtonUnfilled from "@/components/ButtonUnfilled";
import Tag from "@/components/Tag";
import VideoPlayer from "@/components/VideoPlayer";

export default function SectionMain() {
    return (
        <div className="relative flex items-center h-full w-full 
            bg-cover bg-center bg-no-repeat flex-col pb-16"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
            <h1 className="text-white font-semibold text-6xl mt-[110] pb-10">The AI Data Analyst</h1>
            <h2 className="text-white text-2xl">Ask questions, get instant charts and insights from your data.</h2>
            <div className="flex flex-row items-center mt-[64] gap-5">
                <ButtonFilled>Try Free</ButtonFilled>
                <ButtonUnfilled>Book Demo</ButtonUnfilled>
            </div>
            <div className="flex flex-row items-center mt-[52] gap-2">
                <Tag text="Y Combinator backed" imageSrc="https://camelai.com/assets/images/yc-logo.png"></Tag>
                <Tag text="Enterprise Security" imageSrc="https://camelai.com/assets/images/lock-icon.png"></Tag>
                <Tag text="100% Data Privacy" imageSrc="https://camelai.com/assets/images/shield-icon.png"></Tag>
            </div>
            <div className="pt-[84px]">
                <VideoPlayer videoSrc="https://camelai.com/assets/images/camelai-gif.mp4"></VideoPlayer>
            </div>
        </div>
    );
}
