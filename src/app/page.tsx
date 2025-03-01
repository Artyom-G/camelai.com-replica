import backgroundImage from "@/assets/background-orange-gradient.jpg";
import ButtonFilled from "@/components/ButtonFilled";
import ButtonUnfilled from "@/components/ButtonUnfilled";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <main
      className="relative flex items-center h-screen w-full 
                 bg-cover bg-center bg-no-repeat flex-col"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <h1 className="text-white font-semibold text-6xl mt-[110] pb-10">The AI Data Analyst</h1>
      <h2 className="text-white text-2xl">Ask questions, get instant charts and insights from your data.</h2>
      <div className="flex flex-row items-center mt-[64] gap-5">
        <ButtonFilled>Try Free</ButtonFilled>
        <ButtonUnfilled>Book Demo</ButtonUnfilled>
      </div>
      <div>
        <Tag text="Backed by Y Combinator" imageSrc="https://camelai.com/assets/images/yc-logo.png"></Tag>
      </div>
    </main>
  );
}
