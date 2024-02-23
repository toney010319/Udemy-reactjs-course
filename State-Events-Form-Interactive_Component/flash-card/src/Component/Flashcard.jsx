import { useState } from "react"
import { questions } from "../Question"


const Flashcard = () => {
    const [selectedId, setSelectedId] = useState(null)

    const handleClick = (id) => {
        setSelectedId(id !== selectedId ? id : null)

    }
    console.log(selectedId)
    return (
        <div className="grid grid-cols-3 gap-20 mt-20 font-bold">
            {questions.map((question) => {
                return (
                    <div
                        onClick={() => handleClick(question.id)}
                        key={question.id}
                        className={`${question.id === selectedId ? "bg-[#fd2d2d]" : "bg-[#f7f7f7]"} border-[#e7e7e7] border-[1px] rounded-md aspect-[2/1] flex justify-center items-center p-[20px] cursor-pointer`}
                    >
                        <p>{question.id === selectedId ? question.answer : question.question}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Flashcard
