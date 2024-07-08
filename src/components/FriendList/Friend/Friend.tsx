import styles from "./Friend.module.css";

type FriendProps = {
  img: string;
  friendName: string;
  oweBalance: number;
  id: number;
  selectedFriendId: number;
  setSelectedFriendId: Function;
};

function Friend({
  img,
  friendName,
  oweBalance,
  id,
  selectedFriendId,
  setSelectedFriendId,
}: FriendProps) {
  return (
    <li className={styles.friend}>
      <div className={styles.friendInfo}>
        <div className={styles.imageContainer}>
          <img src={img} alt={friendName} className={styles.image} />
        </div>
        <div className={styles.text}>
          <h3>{friendName}</h3>
          <p>
            {!oweBalance
              ? `You and ${friendName} are even`
              : oweBalance > 0
              ? `${friendName} owes you ${oweBalance}`
              : `You owe ${friendName} ${Math.abs(oweBalance)}€`}
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          setSelectedFriendId((currId: number) => (currId === id ? -1 : id))
        }
      >
        {id === selectedFriendId ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
