/* eslint-disable react/prop-types */

import { useState } from "react"



export const AddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    const handleAddFriend = (e) => {
        e.preventDefault()
        if (!name || !image) return
        const id = crypto.randomUUID()
        const newFriend =
        {
            id: id,
            name: name,
            image: `${image}?u=${id}`,
            balance: 0
        }


        onAddFriend(newFriend)
        setName("")
        setImage("https://i.pravatar.cc/48")
    }



    return (
        <>
            <div className=" bg-[#fdf4e1]  gap-5 ml-5 pt-10 justify-between  p-2 mt-5 ">
                <form className="flex flex-col gap-2      ">
                    <div className="flex flex-row  justify-between ">
                        <label>Friend Name:</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg" />
                    </div>
                    <div className="flex flex-row  justify-between ">
                        <label>Image Url:</label>
                        <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div className="flex  justify-end mt-2 pb-2">
                        <button className="bg-[#ffa139]  rounded-md p-2   text-sm font-bold " onClick={handleAddFriend}>Add</button>
                    </div>
                </form>
            </div>


        </>



    )
}
