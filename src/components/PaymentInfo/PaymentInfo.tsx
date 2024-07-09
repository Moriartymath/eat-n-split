import { useState } from "react";
import styles from "./PaymentInfo.module.css";
import PaymentInput from "./PaymentInput/PaymentInput.tsx";

type PaymentInfoProps = {
  friendName: string;
  friendId: number;
  setFriendList: Function;
};

function PaymentInfo({
  friendName,
  friendId,
  setFriendList,
}: PaymentInfoProps) {
  const [billValue, setBillValue] = useState(0);
  const [expences, setExpences] = useState(0);
  const [isMyExpense, setIsMyExpense] = useState(0);

  const allInputs = [
    {
      text: "💰 Bill value",
      value: billValue,
      onChange(ev) {
        setBillValue(+ev.target.value);
      },
    },
    {
      text: "🧍‍♂️ Your expense",
      max: billValue,
      value: expences,
      onChange(ev) {
        setExpences(+ev.target.value);
      },
    },
    {
      text: `🧍‍♀️ ${friendName}\`s expense`,
      value: billValue - expences,
    },
  ];

  return (
    <form
      className={styles.paymentContainer}
      onSubmit={(ev) => {
        ev.preventDefault();
        setFriendList((currList) => {
          const friendIndex = currList.findIndex(
            (friend) => friend.id === friendId
          );
          const copyList = currList.slice();
          copyList.splice(friendIndex, 1, {
            ...currList[friendIndex],
            oweBalance:
              currList[friendIndex].oweBalance +
              (!isMyExpense ? -expences : billValue - expences),
          });
          return copyList;
        });
      }}
    >
      <h1>SPLIT BILL WITH {friendName.toUpperCase()}</h1>
      {allInputs.map((inputInfo, index) => (
        <PaymentInput
          key={index}
          text={inputInfo.text}
          value={inputInfo.value}
          max={inputInfo.max}
          onChange={inputInfo.onChange}
        />
      ))}
      <div className={styles.expenseSide}>
        <p>🤑 Who is paying the bill?</p>
        <select
          id={styles.expenseSide}
          value={isMyExpense}
          onChange={() =>
            setIsMyExpense((currExpense) => (+currExpense ? 0 : 1))
          }
          className={styles.selectSide}
        >
          <option value={0}>{friendName}</option>
          <option value={1}>You</option>
        </select>
      </div>
      <button>SPLIT BILL</button>
    </form>
  );
}

export default PaymentInfo;
