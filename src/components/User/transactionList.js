import dashboardStyles from "./Form.module.css";
import Transactions from "../Cards/Transactions";

const buyedCars = [
  { date: "2021-12-25", car: "Range Rover - Velar", price: 75475 },
  { date: "2016-04-13", car: "Toyota - Rav4", price: 5365 },
  { date: "2011-07-07", car: "Suzuki - Swift", price: 3100 },
  { date: "2006-02-25", car: "fiat - Mini", price: 1400 },
];
const rentedCars = [
  { date: "2020-06-30", car: "Toyota - Hiace Van", price: 1250 },
  { date: "2019-06-30", car: "Toyota - Hiace Van", price: 1250 },
  { date: "2018-06-30", car: "Toyota - Hiace Van", price: 1250 },
  { date: "2017-06-30", car: "Toyota - Hiace Van", price: 1250 },
];
const soldCars = [];
const mechanics = [
  { date: "2022-02-05", car: "Range Rover - Velar", cause: "maintenance" },
];
export default function TransactionList() {
  return (
    <div>
      <Transactions
        icon="clarity:key-solid"
        title="buyed car"
        rows={buyedCars}
      />
      <Transactions
        icon="tabler:steering-wheel"
        title="rented car"
        rows={rentedCars}
      />
      <Transactions icon="wpf:maintenance" title="mechanics" rows={mechanics} />
      <Transactions
        icon="si-glyph:car-garage"
        title="sold cars"
        rows={soldCars}
      />
    </div>
  );
}
