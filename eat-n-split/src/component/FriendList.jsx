/* eslint-disable react/prop-types */

import Friend from "../shared/Friend"



const FriendList = ({ friendList, onSelected, selectedFriend }) => {



    return (
        <>
            <div>
                {friendList.map((friend) => {

                    console.log(friend)
                    return <Friend key={friend.id} friend={friend} onSelected={onSelected} selectedFriend={selectedFriend} />
                })}
            </div>







        </>
    )
}

export default FriendList
