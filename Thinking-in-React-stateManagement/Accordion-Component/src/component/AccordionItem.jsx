/* eslint-disable react/prop-types */




const AccordionItem = ({ num, title, children, onOpen, curOpen }) => {
    const isOpen = num === curOpen


    const handleToggle = () => {
        onOpen(isOpen ? null : num)
    }
    return (
        <div
            onClick={handleToggle}
            className={`${isOpen ? "border-t-8 border-t-green-500" : ""} cursor-pointer flex flex-col   p-5 m-10 drop-shadow-2xl shadow-lg border-[1px] border-slate-400 shadow-slate-400`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <p className="text-2xl font-bold text-gray-400">{num < 9 ? `0${num + 1}` : num + 1}</p>
                    <p className={`text-xl pl-3 font-bold ${isOpen ? "text-green-500" : ""}`}>{title}</p>
                </div>
                <p className="font-extrabold text-xl">{isOpen ? "-" : "+"}</p>
            </div>
            {isOpen &&
                <div className="pl-10">
                    <p>{children}</p>
                </div>
            }
        </div>
    )
}

export default AccordionItem
