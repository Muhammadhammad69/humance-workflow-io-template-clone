"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus } from 'lucide-react';
export const FaqQuestionComp = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      number: '01',
      question: 'In what areas do you provide consulting?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 2,
      number: '02',
      question: 'In which countries do you provide services?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 3,
      number: '03',
      question: 'How is a consulting started and organized?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 4,
      number: '04',
      question: 'What if I pick the wrong plan?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 5,
      number: '05',
      question: 'When should I receive my money?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 6,
      number: '06',
      question: 'What happen my data if I cancel?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 7,
      number: '07',
      question: 'Why my card payment is failing?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    },
    {
      id: 8,
      number: '08',
      question: 'Why should I subscribe newsletter?',
      answer: 'Our associate consultants specialize in a range of business areas. These include strategic planning, issues resolution, culture assessment, board effectiveness, retention'
    }
  ];

  const toggleAccordion = (index:number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-[50px] xs:py-[70px] sm:py-[80px] md:py-[100px] ">
      <div>
        <div className="flex items-center justify-center mb-4">
          <Button
            variant={"customOne"}
            className="uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-[8px] w-[8px] rounded-full bg-btn-icon-color"></div>
            Questions
          </Button>
        </div>
        <div>
          <h1 className="text-[30px] sm:text-[36px] lg:text-[60px] xl:text-[68px] font-medium  leading-[38px] sm:leading-[46px] lg:leading-[65px] xl:leading-[70px] tracking-[-2.04px] text-dark-color font-be-vietnam-pro  text-center">
            Frequently asked
            <br />
            Questions
          </h1>
        </div>
      </div>
      <div className="mt-8 xs:mt-10 md:mt-12">
        <div className="space-y-5">
            
            {faqs.map((faq, index) => (
          <div key={faq.id} className=" overflow-hidden">
            {/* Question Header */}
            <div 
              className="overflow-hidden flex justify-between py-5 px-8 text-dark-color bg-white rounded-xl tracking-tight text-[18px] xs:text-[20px] font-medium cursor-pointer  transition-colors font-be-vietnam-pro z-10"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{faq.number}. {faq.question}</h2>
              <div className="flex-shrink-0 ml-4">
                <div className={`transition-transform duration-700 ease-in-out
                    ${
                      openIndex === index ? '-rotate-45' : 'rotate-0'}
                    `}>
                    <Plus size={24} className="transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Answer Content */}
            <div 
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                openIndex === index ? ' max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mt-4 xs:mt-6 px-8 xs:px-12">
                <p className="text-gray-900 text-base font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
};
