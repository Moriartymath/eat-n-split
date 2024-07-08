import styles from "./FriendList.module.css";
import Friend from "./Friend/Friend.tsx";
import AddFriendButton from "./AddFriendButton/AddFriendButton.tsx";
import { useState } from "react";
import NewFriendForm from "./NewFriendForm/NewFriendForm.tsx";

type FriendListProps = {
  selectedFriendId: number;
  friendList: Array<{
    img: string;
    name: string;
    id: number;
    oweBalance: number;
  }>;
  setFriendList: Function;
  setselectedFriendId: Function;
};

function FriendList({
  selectedFriendId,
  setselectedFriendId,
  friendList,
  setFriendList,
}: FriendListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.leftContainer}>
      {friendList.length ? (
        <ul className={styles.list}>
          {friendList.map((friend) => (
            <Friend
              selectedFriendId={selectedFriendId}
              id={friend.id}
              key={friend.id}
              setSelectedFriendId={setselectedFriendId}
              oweBalance={friend.oweBalance}
              img={friend.img}
              friendName={friend.name}
            />
          ))}
        </ul>
      ) : (
        <div style={{ width: "100%" }}>
          <h4>No friends on your list 😭</h4>
        </div>
      )}
      <div className={styles.addFriendContainer}>
        {isOpen ? <NewFriendForm setFriendList={setFriendList} /> : null}
        <AddFriendButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default FriendList;
