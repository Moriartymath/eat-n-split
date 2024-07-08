import { useState } from "react";
import styles from "./App.module.css";
import FriendList from "./FriendList/FriendList.tsx";
import PaymentInfo from "./PaymentInfo/PaymentInfo.tsx";

function App() {
  const [selectedFriendId, setSelectedFriendId] = useState(-1);
  const [friendList, setFriendList] = useState([
    {
      img: "https://i.pravatar.cc/48",
      name: "illia Strelia",
      id: Date.now(),
      oweBalance: 20,
    },
    {
      img: "https://i.pravatar.cc/48",
      name: "illia Strelia1",
      id: 1,
      oweBalance: -50,
    },
    {
      img: "https://i.pravatar.cc/48",
      name: "illia Strelia2",
      id: 2,
      oweBalance: 100,
    },
  ]);

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
        />
      ) : null}
    </div>
  );
}

export default App;
