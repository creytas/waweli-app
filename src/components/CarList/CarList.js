import carStyles from "./SelectCars.module.css";
import Cars from "../Cards/Cars.jsx";
import suzuki from "../../../public/images/suzuki_swift.png";

const cars = [
  {
    id: 1,
    carName: `Suzuki Swift`,
    carImage: `${suzuki}`,
    description: `This is the new 2020 Swift.
      Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `25 300`,
    rentalPrice: `15 475`,
  },
];

export default function CarList({ state }) {
  return (
    <div className={carStyles.carList}>
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={suzuki}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
    </div>
  );
}
