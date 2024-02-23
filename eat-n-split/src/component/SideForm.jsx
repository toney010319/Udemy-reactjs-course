/* eslint-disable react/prop-types */
import { useState } from "react"


const SideForm = ({ selectedFriend, onSubmit }) => {
    const [bill, setBill] = useState("")
    const [YourExpense, setYourExpense] = useState("")
    const [friendExpense, setFriendExpense] = useState("")
    const [pay, setPay] = useState("")
    const paidByFriend = bill ? bill - YourExpense : 0
    function handleSubmit(e) {
        e.preventDefault()
        if (!bill || !YourExpense) return
        onSubmit(pay === "user" ? paidByFriend : -YourExpense)

    }


    return (
        <div className='pt-10  bg-[#fdf4e1]  gap-5 ml-5   justify-between  p-2 mt-5 mr-5'>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2   p-5 overflow-hidden   ">
                <h2>Split a bill with {selectedFriend.name}</h2>
                <div className="flex flex-row  justify-between ">
                    <label>Bill value:</label>
                    <input id="name" type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="bg" />
                </div>
                <div className="flex flex-row  justify-between ">
                    <label>Your expense:</label>
                    <input id="image" type="text" value={YourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > bill ? YourExpense : Number(e.target.value))} />
                </div>
                <div className="flex flex-row  justify-between ">
                    <label>{selectedFriend.name} Expense:</label>
                    <input id="image" disabled type="text" value={paidByFriend} onChange={(e) => setFriendExpense(e.target.value)} />
                </div>
                <div className="flex flex-row  justify-between"><label> Who is Paying the bill   </label>
                    <select name="pay" id="pay" value={pay} onChange={(e) => setPay(e.target.value)}>
                        <option value="friend">{selectedFriend.name}</option>
                        <option value="user">You</option>
                    </select>

                </div>
                <div className="flex  justify-end mt-2 pb-2">
                    <button className="bg-[#ffa139]  rounded-md p-2   text-sm font-bold ">Split Bill</button>
                </div>
            </form>
        </div>
    )
}

export default SideForm
