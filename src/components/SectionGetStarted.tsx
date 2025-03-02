import ButtonFilled from "./ButtonFilled";
import ButtonUnfilled from "./ButtonUnfilled";

export default function SectionGetStarted() {
    return (
        <section className="flex row justify-center w-full bg-black">
            <div className="flex row justify-between w-full max-w-[1160px]">
                <h1 className="text-3xl font-semibold text-white">
                    Get started for <span className="bg-[linear-gradient(135deg,_#6e7f42,_#c37842,_#f04e42)] bg-clip-text text-transparent">free</span>.
                </h1>
                <div className="flex row gap-4">
                    <ButtonFilled>Try Free</ButtonFilled>
                    <ButtonUnfilled>Contact Us</ButtonUnfilled>
                </div>
            </div>
        </section>
    );
}
