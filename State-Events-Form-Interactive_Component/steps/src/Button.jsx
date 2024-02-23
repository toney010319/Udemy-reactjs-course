/* eslint-disable react/prop-types */

//REUSABLE COMPONENT
const Button = ({ textColor, bgColor, onclick, children }) => {

    return (

        <button
            className={`${textColor} ${bgColor} px-4 py-2 rounded-full`}
            onClick={onclick}
        >{children}</button>


    )
}

export default Button
