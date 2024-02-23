/* eslint-disable react/prop-types */


const Tip = ({ children, percentage, onSelect }) => {
  return (
    <div className="flex flex-row gap-5">
      <p>{children}</p>
      <select placeholder="Enter tip amount" className="border-2 border-black px-2   rounded-xl" value={percentage} onChange={(e) => onSelect(Number(e.target.value))} >

        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>


      </select>
    </div>
  )
}

export default Tip
