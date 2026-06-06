'use client'

import { useState } from "react";

export const ListItemFAQ = ({ question, qa }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="max-w-5xl mx-auto">
            <button className="border-t border-base-300 py-4 font-medium text-lg w-full text-left flex justify-between" onClick={() => setIsOpen(!isOpen)}>{qa.question}
                {
                    isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                }
            </button>
            {
                isOpen ? <div className="text-md mb-4">{qa.answer}</div> : <></>
            }
        </div>
    );
}