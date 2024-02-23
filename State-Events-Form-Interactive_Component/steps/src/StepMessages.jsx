/* eslint-disable react/prop-types */

//REUSABLE COMPONENT
const StepMessages = ({ step, children }) => {
    return (
        <div className="  flex  flex-col items-center   font-bold" >
            <h3 className="font-bold text-2xl">STEP {step}</h3>
            {children}
        </div >
    )
}

export default StepMessages
