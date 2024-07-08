import { useState } from "react";
import styles from "./App.module.css";
import FriendList from "./FriendList/FriendList.tsx";
import PaymentInfo from "./PaymentInfo/PaymentInfo.tsx";

function App() {
  const [selectedFriendId, setSelectedFriendId] = useState(-1);
  const [friendList, setFriendList] = useState([]);

  return (
    <div className={styles.App}>
      <FriendList
        friendList={friendList}
        setFriendList={setFriendList}
        selectedFriendId={selectedFriendId}
        setselectedFriendId={setSelectedFriendId}
      />
      {selectedFriendId !== -1 ? (
        <PaymentInfo
          friendName={
            friendList.find((friend) => friend.id === selectedFriendId).name
          }
          friendId={selectedFriendId}
          setFriendList={setFriendList}
        />
      ) : null}
    </div>
  );
}

export default App;
