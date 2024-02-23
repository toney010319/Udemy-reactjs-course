/* eslint-disable react/prop-types */
import Button from "./Button"
import { Messages } from "./Messages"
import StepMessages from "./StepMessages"


function Card({ step, setStep }) {
    const handlePrevious = () => {
        if (step > 1) setStep(step - 1)
        console.log(step)
    }
    const handleNext = () => {
        if (step < 3) setStep(step + 1)
        console.log(step)
    }
    return (
        <>
            <div className="bg-gray-400 m-20 p-10  flex flex-col gap-10 font-bold"  >
                <div className="flex flex-row justify-evenly "  >
                    <div className={`${step === 1 ? "bg-[#7950f2]" : "bg-gray-700"} px-4 py-2 text-white rounded-full`}>
                        1
                    </div>
                    <div className={`${step === 2 ? "bg-[#7950f2]" : "bg-gray-700"} px-4 py-2 text-white rounded-full`}>
                        2
                    </div>
                    <div className={`${step === 3 ? "bg-[#7950f2]" : "bg-gray-700"} px-4 py-2 text-white rounded-full`}>
                        3
                    </div>
                </div>


                <StepMessages step={step}>
                    {Messages[step - 1]}
                </StepMessages>
                <div className="flex flex-row justify-evenly items-center">
                    <Button
                        textColor="text-white rounded-full"
                        bgColor="bg-[#7950f2]"
                        onclick={() => handlePrevious()}
                    >
                        <span>👈</span> Previous
                    </Button>
                    <Button
                        textColor="text-white rounded-full"
                        bgColor="bg-[#7950f2]"
                        onclick={() => handleNext()}
                    >
                        Next  <span>👉</span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Card
