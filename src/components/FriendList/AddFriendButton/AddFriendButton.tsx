import styles from "./AddFriendButton.module.css";

type AddFriendButtonProps = {
  isOpen: boolean;
  setIsOpen: Function;
};
function AddFriendButton({ isOpen, setIsOpen }: AddFriendButtonProps) {
  return (
    <button
      className={styles.buttonAdd}
      onClick={() => setIsOpen((currIsOpen) => !currIsOpen)}
    >
      {!isOpen ? "Add friend" : "Close"}
    </button>
  );
}

export default AddFriendButton;
