import styles from "./App.module.css";
import FriendList from "./FriendList/FriendList";
import PaymentInfo from "./PaymentInfo/PaymentInfo";

function App() {
  return (
    <div className={styles.App}>
      <FriendList />
      <PaymentInfo />
    </div>
  );
}

export default App;
