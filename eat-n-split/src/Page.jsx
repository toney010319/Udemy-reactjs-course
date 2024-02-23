
import { useState } from 'react'
import { AddFriend } from './component/AddFriend'
import FriendList from './component/FriendList'
import SideForm from './component/SideForm'
import Button from './shared/Button'
import { initialFriends } from './data'

const Page = () => {
    const [showAddFriend, setShowAddFriend] = useState(false)

    const [friendList, setFriendList] = useState(initialFriends)
    const [selectedFriend, setSelectedFriend] = useState(null)

    const handleOpen = () => {
        console.log(open)
        setShowAddFriend((show) => !show)
        setSelectedFriend(null)
    }

    const handleAddFriend = (newFriend) => {
        setFriendList((friendList) => [...friendList, newFriend])
        setShowAddFriend(false)
    }

    const handleSelectFriend = (friend) => {

        setSelectedFriend(selected => selected?.id === friend.id ? null : friend)
        setShowAddFriend(false)
    }

    function handleSideForm(value) {
        setFriendList(friends => friends.map(friend => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
        setSelectedFriend(null)
    }

    return (
        <div className='grid grid-cols-2 grid-rows-1 gap-4'>

            <div>
                <FriendList friendList={friendList} onSelected={handleSelectFriend} selectedFriend={selectedFriend} />
                {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
                <Button onclick={handleOpen} >{showAddFriend ? "Close" : "Add Friend"}</Button>
            </div>
            {selectedFriend && <div>
                <SideForm selectedFriend={selectedFriend} onSubmit={handleSideForm} />
            </div>}
        </div>
    )
}

export default Page
