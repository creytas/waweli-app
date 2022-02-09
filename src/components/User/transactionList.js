import dashboardStyles from "./Form.module.css";
import Transactions from "../Cards/Transactions";

export default function TransactionList() {
  return (
    <div>
      <Transactions icon="clarity:key-solid" title="buyed car" />
      <Transactions icon="tabler:steering-wheel" title="rented car" />
      <Transactions icon="wpf:maintenance" title="mechanics" />
      <Transactions icon="si-glyph:car-garage" title="sold cars" />
    </div>
  );
}
