"use client";

import { useState, ReactNode } from "react";

interface FAQProps {
    question: string;
    children: ReactNode;
}

export default function FAQ({ question, children }: FAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="py-4 text-white">
            <div
                className="cursor-pointer text-xl font-normal pb-3 pt-3 tracking-wide border-b-3 border-[var(--clr-light-background-blue)]"
                onClick={toggleAnswer}
            >
                {question}
            </div>
            <div className={"question-box-body text-gray-500 mt-2" + (isOpen ? " active ": "")}>
                <span className="faq p-2 text-white tracking-wide font-mono">    
                    {children}
                </span>
            </div>
        </div>
    );
}
