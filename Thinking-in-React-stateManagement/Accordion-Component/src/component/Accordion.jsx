import { useState } from "react"
import { fags } from "../data"
import AccordionItem from "./AccordionItem"


const Accordion = () => {
    const [curOpen, setCurOpen] = useState(null)
    return (
        <div className="flex flex-col">{
            fags.map((el, index) =>
                <AccordionItem
                    num={index}
                    key={index}
                    title={el.title}

                    onOpen={setCurOpen}
                    curOpen={curOpen}
                >{el.text}</AccordionItem>)

        }

        </div>
    )
}

export default Accordion
