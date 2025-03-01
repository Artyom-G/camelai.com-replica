import backgroundImage from "@/assets/background-orange-gradient.jpg";

export default function Home() {
  return (
    <main
      className="relative flex items-center h-screen w-full 
                 bg-cover bg-center bg-no-repeat flex-col"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <h1 className="text-white font-semibold text-6xl mt-[110] pb-10">The AI Data Analyst</h1>
      <h2 className="text-white text-2xl">Ask questions, get instant charts and insights from your data.</h2>
    </main>
  );
}
