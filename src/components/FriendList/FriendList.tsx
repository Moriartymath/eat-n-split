import styles from "./FriendList.module.css";
import Friend from "./Friend/Friend.tsx";

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
  return (
    <>
      <ul className={styles.list}>
        {friendList.map((friend) => (
          <Friend
            selectedFriendId={selectedFriendId}
            id={friend.id}
            setSelectedFriendId={setselectedFriendId}
            oweBalance={friend.oweBalance}
            img={friend.img}
            friendName={friend.name}
          />
        ))}
      </ul>
    </>
  );
}

export default FriendList;
