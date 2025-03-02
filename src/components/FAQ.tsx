"use client";

import { useState } from "react";

interface FAQProps {
    question: string;
    answer: string;
}

export default function FAQ({ question, answer }: FAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b-3 border-gray-900 py-4 text-white">
            <div
                className="cursor-pointer text-xl font-normal pb-3 pt-3 tracking-wide"
                onClick={toggleAnswer}
            >
                {question}
            </div>
            {isOpen && (
                <p className="text-gray-500 mt-2">{answer}</p>
            )}
        </div>
    );
}
