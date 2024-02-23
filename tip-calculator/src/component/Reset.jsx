/* eslint-disable react/prop-types */


const Reset = ({ onreset }) => {
    return (
        <button onClick={onreset} className=" py-1 bg-gray-500 border-2 border-black text-white rounded-xl px-3 mt-2 ml-20">
            Reset
        </button>
    )
}

export default Reset
