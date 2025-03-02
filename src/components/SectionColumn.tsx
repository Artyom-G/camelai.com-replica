import ButtonFilled from "./ButtonFilled";
import TitleDescription from "./TitleDescription";

export default function SectionColumn(){
    return(
        <section className="flex row w-full justify-center text-white">
            <div className="flex row w-full max-w-[1100px] justify-between">
                <div className="text-left justify-start max-w-[500px]">
                    <h1 className="text-center font-mono font-light text-white text-3xl pb-10">Want to build with camelAI?</h1>
                    <h2 className="pb-10 text-[24px] text-gray-300">Embed AI-powered analytics directly in your application with our API</h2>
                    <ButtonFilled>Join API Waitlist</ButtonFilled>
                </div>
                <div>
                    <TitleDescription title="Natural Language → SQL" desc="Same powerful query engine that powers camelAI"/>
                    <TitleDescription title="Secure Integration" desc="Enterprise-grade security and permissions"/>
                    <TitleDescription title="Flexible Integration" desc="Full control over the user experience"/>
                </div>
            </div>
        </section>
    );
}