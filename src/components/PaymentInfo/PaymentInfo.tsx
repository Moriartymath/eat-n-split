import styles from "./PaymentInfo.module.css";

type PaymentInfoProps = {
  friendName: string;
};

function PaymentInfo({ friendName }: PaymentInfoProps) {
  return (
    <div className={styles.paymentContainer}>
      <h1>Hello</h1>
      <h4>There is {friendName}</h4>
    </div>
  );
}

export default PaymentInfo;
