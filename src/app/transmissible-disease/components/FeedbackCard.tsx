"use client"
import Image, {StaticImageData} from "next/image";

import quotes  from "~/images/quotes.svg"

type Feedback = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
}

type FeedbackCardProps = {
  feedback: Feedback;
}


export const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{feedback.content}</p>
      <div className="flex flex-row">
        <Image src={feedback.img} alt="nome" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {feedback.name}
          </h4> 
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite my-10">
            {feedback.title}
          </p>
        </div>
      </div>
    </div>
  )
}
