import styles from "./Friend.module.css";

function Friend({
  img,
  friendName,
  oweBalance,
  id,
  selectedFriendId,
  setSelectedFriend,
}) {
  return (
    <li className={styles.friend}>
      <div className="friendInfo">
        <div className={styles.imageContainer}>
          <img src={img} alt={friendName} className={styles.image} />
        </div>
        <h3 className={styles.text}>
          {friendName}
          <p>
            {!oweBalance
              ? `You and ${friendName} are even`
              : oweBalance > 0
              ? `${friendName} owes you ${oweBalance}`
              : `You owe ${friendName} ${oweBalance}€`}
          </p>
        </h3>
      </div>
      <button
        onClick={() =>
          setSelectedFriend((currId: number) => (currId === id ? -1 : id))
        }
      >
        {id === selectedFriendId ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default Friend;
