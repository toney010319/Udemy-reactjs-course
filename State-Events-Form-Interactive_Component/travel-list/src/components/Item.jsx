/* eslint-disable react/prop-types */


const Item = ({ item, handleDeleteItem, handleToggleItems }) => {
    console.log(item)
    return (
        <li className=" flex flex-row w-fit gap-2  text-white font-bold text-lg">
            < input type="checkbox" onChange={() => handleToggleItems(item.id)} />
            < span className={item.packed ? "line-through" : ""} > {item.quantity} {item.description} </span >
            <button className="text-sm font-thin" onClick={() => handleDeleteItem(item.id)}>❌</button>
        </li >
    )
}

export default Item
