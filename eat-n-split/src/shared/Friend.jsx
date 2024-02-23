/* eslint-disable react/prop-types */

import Button from "./Button"


const Friend = ({ friend, onSelected, selectedFriend }) => {

    const isSelected = selectedFriend?.id === friend.id

    return (

        <div className="flex flex-row gap-5 ml-5 pt-10 justify-between">
            <div className={`${isSelected ? "bg-blue-200" : ""} flex justify-between items-center p-2 w-full`}>
                <div className={` flex flex-row   gap-5 items-center`}>
                    <img src={friend.image} alt="friend" className="rounded-full " />
                    <div>
                        <p>{friend.name}</p>
                        {friend.balance === 0 && <p> You and  {friend.name} are even</p>}
                        {friend.balance < 0 && <p className="text-red-500"> You owe {friend.name} ${Math.abs(friend.balance)}</p>}
                        {friend.balance > 0 && <p className="text-green-500"> {friend.name}   owes  You ${Math.abs(friend.balance)}</p>}
                    </div>
                </div>
                <Button onclick={() => onSelected(friend)} className="bg-[#ffa139]  rounded-md p-2   text-sm font-bold">{isSelected ? "Close" : "Select"}</Button>
            </div>
        </div >
    )
}

export default Friend



