/* eslint-disable react/prop-types */


const Statistics = ({ items }) => {
    if (!items.length) return (
        <footer className="bg-[#68c1a4]    text-lg text-center p-5">
            <em>
                Start Adding some items to your List
            </em>
        </footer>
    )
    const totalItems = items.length
    const numPacked = items.filter((item) => item.packed).length
    const percentage = totalItems > 0 ? Math.round(numPacked / totalItems * 100) : 0
    return (

        <footer className="bg-[#68c1a4]    text-lg text-center p-5">

            <em>
                {
                    (percentage === 100)
                        ? "You got everything! Ready to go "
                        :
                        `You have ${totalItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
                }
            </em>
        </footer>

    )
}

export default Statistics
