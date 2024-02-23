import { useState } from "react"
import { Bill } from "./component/Bill"
import Reset from "./component/Reset"
import Tip from "./component/Tip"
import { Total } from "./component/Total"


const TipCalculator = () => {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState(0)
    const [friendTip, setFriendTip] = useState(0)
    const totalTip = tip + friendTip

    const handleReset = () => {
        setBill('')
        setTip(0)
        setFriendTip(0)
        console.log("click")
    }
    return (
        <>
            <div className="flex flex-col gap-5 pt-20 pl-10">
                <Bill bill={bill} onSetBell={setBill} />
                <Tip percentage={tip} onSelect={setTip}>How did you like the service?</Tip>
                <Tip percentage={friendTip} onSelect={setFriendTip}>How did your friend like the service?</Tip>
            </div>
            {bill > 0 &&
                <div className="pl-10">
                    <Total bill={bill} tip={totalTip} />
                    <Reset onreset={handleReset} />
                </div>
            }
        </>
    )
}

export default TipCalculator
