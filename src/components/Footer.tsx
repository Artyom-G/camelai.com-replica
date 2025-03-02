import Image from "next/image";
import ButtonFilled from "./ButtonFilled";
import InputField from "./InputField";

export default function Footer(){
    
    const links = [
        {"title": "Company", "links": ["About Us", "Schedule a Call", "Email Us"]},
        {"title": "Links", "links": ["Data Sources", "Demo Videos", "Blog", "Product Hunt"]},
        {"title": "Legal", "links": ["Terms", "Privacy Policy", "Security", "Acceptable Use"]}]
    
    return(
        <section className="pt-[120px] bg-black pb-6 flex flex-col justify-center w-full">
            <div className="flex justify-center w-full pb-10">
                <div className="flex justify-between w-full max-w-[1200px]">
                    <div>
                        <Image src="https://camelai.com/assets/images/main-camelai.png" alt="camelai" width={290} height={100}></Image>
                        <h3 className="text-white pt-4 pb-4">Subscribe to our newsletter for product updates</h3>
                        <div className="flex flex-row gap-2">
                            <InputField></InputField>
                            <ButtonFilled>Subcribe</ButtonFilled>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        {
                            links.map((item, index) => {
                                return(
                                <div key={index} className="flex flex-col text-white text-sm">
                                    <h1 className="text-gray-600 pb-6">{item.title}</h1>
                                    {
                                        item.links.map((link, index2)=>{
                                            return(
                                                <a className="pb-6 cursor-pointer">{link}</a>
                                            )
                                        })
                                    }
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="w-full max-w-[1200px] justify-center flex flex-col">
                    <div className="flex justify-start w-full gap-5">
                        <Image src="https://camelai.com/assets/images/x.com.png" alt="logo" width={35} height={35}></Image>
                        <Image src="https://camelai.com/assets/images/discord.png" alt="logo" width={35} height={35}></Image>
                        <Image src="https://camelai.com/assets/images/linkedin.png" alt="logo" width={35} height={35}></Image>
                        <Image src="https://camelai.com/assets/images/youtube.png" alt="logo" width={35} height={35}></Image>
                        <Image src="https://camelai.com/assets/images/github.png" alt="logo" width={35} height={35}></Image>
                    </div>
                    <p className="text-gray-600 text-xs border-t-2 border-[var(--clr-light-background-blue)] pt-3 mt-10">© 2024 camelQA (DBA camelAI) | All rights reserved</p>
                </div>
            </div>
        </section>
    );
}