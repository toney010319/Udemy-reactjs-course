/* eslint-disable react/prop-types */


export const Bill = ({ onSetBell, bill }) => {

    return (
        <div className="flex flex-row gap-5" >
            <p>How much was the bill?</p>
            <input type="number" value={bill} placeholder="Enter bill amount" className="border-2 border-black px-2   rounded-xl"
                onChange={e => onSetBell(Number(e.target.value))}
            />

        </div>
    )
}
