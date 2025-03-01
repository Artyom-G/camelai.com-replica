import SectionMain from "@/components/SectionMain";
import SectionImage from "@/components/SectionPicture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="justify-center justify-items-center align-middle">
      <SectionMain></SectionMain>
      <SectionImage h1="Ask any question" h2_1="Camel uses your live data." h2_2="Get tables and charts instantly." 
            bannerSrc="https://camelai.com/assets/images/chat-demo-ss.png"
            iconSrc="https://camelai.com/assets/images/code-icon.png">
      </SectionImage>
      <SectionImage h1="Powerful Dashboards" h2_1="Save any graph to a live dashboard." h2_2="Start a chat to answer ad hoc questions.
preview ." 
            bannerSrc="https://camelai.com/assets/images/dashboard-demo-ss.png"
            iconSrc="https://camelai.com/assets/images/light-bulb-icon.png">
      </SectionImage>
      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}
