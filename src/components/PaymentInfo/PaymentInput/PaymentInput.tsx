import styles from "./PaymentInput.module.css";

function PaymentInput({ text, max, value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <p>{text}</p>
      {max ? (
        <input
          type="number"
          max={max}
          min={0}
          value={value}
          onChange={onChange}
          className={styles.inputNumber}
        />
      ) : (
        <input
          type="number"
          value={value}
          disabled={!onChange ? true : false}
          onChange={onChange}
          className={styles.inputNumber}
        />
      )}
    </div>
  );
}

export default PaymentInput;
