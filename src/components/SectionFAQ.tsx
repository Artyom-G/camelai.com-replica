import FAQ from './FAQ';

export default function SectionFAQ() {
  const faqs = [
    { question: "What is camelAI?", answer: "camelAI is a powerful AI-based query engine." },
    { question: "How does camelAI work?", answer: "It transforms natural language queries into SQL queries." },
    { question: "Is camelAI free?", answer: "camelAI offers both free and paid plans." },
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-4 text-white bg-gradient-to-b from-transparent to-black/80">
      <h2 className="text-3xl font-semibold mb-6 text-center">FAQs</h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
