import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer, link } = accordion;
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="bg-white border rounded-sm">
        <div className="min-h-[80px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "min-h-[160px] lg:min-h-[100px]" : "min-h-0"
          } max-h-0 overflow-hidden w-full transition-all px-[30px] text-start`}
        >
          <div className="mt-6">
            {answer}
            {link ? (
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                className="hover:underline text-primary-200"
              >
                berikut.
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
