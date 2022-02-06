import carStyles from "./SelectCars.module.css";
import Cars from "../Cards/Cars.jsx";

const cars = [
  {
    id: 1,
    carName: `Suzuki Swift`,
    carImage: `/images/suzuki_swift.png`,
    description: `This is the new 2020 Swift.
      Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `25 300`,
    rentalPrice: `15 475`,
  },
  {
    id: 2,
    carName: `Toyota Fortuner`,
    carImage: `/images/toyota_fortuner.png`,
    description: `This is the new 2020 Fortuner.
      Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `35 300`,
    rentalPrice: `25 475`,
  },
  {
    id: 3,
    carName: `VW Arteon`,
    carImage: `/images/vw_arteon.png`,
    description: `This is the new 2020 Arteon.
      Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `25 300`,
    rentalPrice: `15 475`,
  },
  {
    id: 4,
    carName: `Toyota Yaris iA`,
    carImage: `/images/toyota_yaris.png`,
    description: `This is the new 2020 Yaris.
      Sporty simplicity, that’s as practical as You are... `,
    buyingPrice: `25 300`,
    rentalPrice: `15 475`,
  },
];

export default function CarList({ state }) {
  return (
    <div className={carStyles.carList}>
      <Cars
        src={cars[0].carImage}
        carName={cars[0].carName}
        description={cars[0].description}
        buyingPrice={cars[0].buyingPrice}
        rentalPrice={cars[0].rentalPrice}
        key={cars[0].id}
      />
      <Cars
        src={cars[1].carImage}
        carName={cars[1].carName}
        description={cars[1].description}
        buyingPrice={cars[1].buyingPrice}
        rentalPrice={cars[1].rentalPrice}
        key={cars[1].id}
      />
      <Cars
        src={cars[2].carImage}
        carName={cars[2].carName}
        description={cars[2].description}
        buyingPrice={cars[2].buyingPrice}
        rentalPrice={cars[2].rentalPrice}
        key={cars[2].id}
      />
      <Cars
        src={cars[3].carImage}
        carName={cars[3].carName}
        description={cars[3].description}
        buyingPrice={cars[3].buyingPrice}
        rentalPrice={cars[3].rentalPrice}
        key={cars[3].id}
      />
    </div>
  );
}
