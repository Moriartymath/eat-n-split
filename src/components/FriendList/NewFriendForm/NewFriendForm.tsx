import { useState } from "react";
import styles from "./NewFriendForm.module.css";

type NewFriendFormProps = {
  setFriendList: Function;
};
function NewFriendForm({ setFriendList }: NewFriendFormProps) {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("https://i.pravatar.cc/48");

  return (
    <form
      className={styles.friendForm}
      onSubmit={(ev) => {
        ev.preventDefault();
        setFriendList((list) => [
          ...list,
          {
            name: userName,
            img: userImage,
            id: Date.now(),
            oweBalance: 0,
          },
        ]);
      }}
    >
      <div className={styles.name}>
        <p>
          <span>👫</span> Friend Name
        </p>
        <input
          type="text"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
          className={styles.nameInput}
        />
      </div>
      <div className={styles.image}>
        <p>
          <span>📸</span> Image URL
        </p>
        <input
          type="text"
          value={userImage}
          onChange={(ev) => setUserImage(ev.target.value)}
          className={styles.imageInput}
        />
      </div>
      <button className={styles.add}>Add</button>
    </form>
  );
}

export default NewFriendForm;
