import { useState } from "react"
import PackingList from "./PackingList"
import Statistics from "./Statistics"


const Form = () => {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [items, setItems] = useState([])

    const handleAddItems = (item) => {
        setItems((items) => [...items, item])

    }

    const handleToggleItems = (id) => {

        setItems(items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
    }
    const handleDeleteItem = (id) => {

        setItems(items.filter((item) => item.id !== id))
    }
    const handleAdd = (e) => {
        e.preventDefault()
        if (!description)

            return

        const newItem = {
            description, quantity, packed: false, id: Date.now()
        }
        handleAddItems(newItem)
        setDescription("")
        setQuantity(1)
    }

    const handleClearItems = (e) => {
        e.preventDefault()
        const confirmed = window.confirm("are you sure you want to delete all items?")
        if (confirmed)
            setItems([])
    }
    return (
        <>
            <form className='flex flex-row gap-5 p-8 justify-center items-center bg-[#df6c19]' onSubmit={handleAdd}>
                <p>what do you need for you trip?</p>
                <input
                    value={description}
                    type="text"
                    placeholder="item.."
                    className="bg-[#fde8aa] rounded-3xl p-2 px-5"
                    onChange={(e) => setDescription(e.target.value)} />
                <input
                    value={quantity}
                    type="number"
                    placeholder="quantity.."
                    className="bg-[#fde8aa] rounded-3xl p-2 px-5 w-36"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button className="px-5 py-2 bg-[#68c2a2] rounded-3xl">Add</button>
            </form>

            <PackingList items={items} handleClearItems={handleClearItems} handleDeleteItem={handleDeleteItem} handleToggleItems={handleToggleItems} />
            <Statistics items={items} />
        </>
    )

}

export default Form
