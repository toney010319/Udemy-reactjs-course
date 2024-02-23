/* eslint-disable react/prop-types */


export const Total = ({ bill, tip }) => {
    let totalTip = tip / 100 * bill
    let totalBill = bill + totalTip
    return (
        <h3 className="text-3xl font-bold">
            You Pay ${totalBill} (${bill} + ${totalTip} )
        </h3>
    )
}
