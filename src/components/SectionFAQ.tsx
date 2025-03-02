import FAQ from './FAQ';

export default function SectionFAQ() {

    return (
        <div className='w-full bg-gradient-to-b from-transparent to-black/80 pb-[100px]'>
            <div className="max-w-[1000px] mx-auto p-4 text-white">
                <h2 className="text-3xl font-semibold mb-6 text-center">FAQs</h2>
                <FAQ question="How is my data stored?">camelAI's infrastructure is hosted on AWS. 
                    Data from applications is pulled only when necessary and limited to what you request in your prompt. 
                    It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our 
                    <a>Security Policy</a> and our <a>security blog post</a>.
                </FAQ>
                <FAQ question="Do you train on my data?">
                    No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. 
                    You can read more about OpenAI's API policies <a>here</a>.
                </FAQ>
                <FAQ question="Are my app connections secure?">
                    Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate 
                    and authorize access to your applications. 
                    Your data is encrypted in transit and at rest. 
                    If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.
                </FAQ>
                <FAQ question="How do you pull my data?">
                    camelAI only communicates with your connected apps when you request data in the chat. 
                    We do not train on your data, nor do we access or store any data without your request and supervision.
                </FAQ>
            </div>
        </div>
    );
}
