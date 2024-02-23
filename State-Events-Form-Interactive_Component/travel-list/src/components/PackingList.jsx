/* eslint-disable react/prop-types */

import { useState } from "react"
import Item from "./Item"



const PackingList = ({ items, handleDeleteItem, handleToggleItems, handleClearItems }) => {
    const [sortby, setSortBy] = useState("input")
    let sortedItems;
    if (sortby === "input") {
        sortedItems = items
    }
    if (sortby === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    }
    if (sortby === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
    }
    return (
        <>
            <div className="bg-[#4d3524] flex flex-col justify-between pt-10 pb-40 h-[63vh]">
                <ul className="flex flex-row  gap-10 justify-center items-center flex-wrap">
                    {

                        sortedItems.map((item) => (

                            <Item item={item} handleToggleItems={handleToggleItems} handleDeleteItem={handleDeleteItem} key={item.id} />

                        ))
                    }
                </ul>
                <div className="flex justify-center  gap-2 ">
                    <select value={sortby}
                        onChange={(e) => setSortBy(e.target.value)}
                        className=" bg-[#f7e2b7] p-2 rounded-3xl  px-4">
                        <option value="input">Sort by input order</option>
                        <option value="description">Sort by Description</option>
                        <option value="packed">Sory by Packed status</option>
                    </select>
                    <button onClick={handleClearItems} className=" bg-[#f7e2b7] p-2 rounded-3xl px-4">Clear List</button>
                </div>
            </div>
        </>
    )
}

export default PackingList
