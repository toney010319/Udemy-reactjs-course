/* eslint-disable react/prop-types */


const Button = ({ children, onclick }) => {
    return (
        <button onClick={() => onclick()} className="bg-[#ffa139]  rounded-md p-2  text-sm font-bold">{children}</button>


    )
}

export default Button
