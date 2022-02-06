import Cars from "../Cards/Cars.jsx";
import { TextField, InputBase, Paper, IconButton } from "@mui/material";
import NavBar from "../Navs/NavBar.jsx";
import { Icon } from "@iconify/react";
import { navBlackCarsItems } from "../layout";
import suzuki from "../../../public/images/suzuki_swift.png";
import styles from "../layout.module.css";
import carStyles from "./SelectCars.module.css";

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

export default function SelectCars() {
  return (
    <div className={styles.rightContainer}>
      <header className={styles.header}>
        <Paper className={carStyles.paper} component="form">
          <InputBase
            placeholder="Toyota Corola"
            className={carStyles.inputBase}
          />
          <IconButton
            type="submit"
            className={carStyles.iconButton}
            aria-label="search"
          >
            <Icon icon="akar-icons:search" />
          </IconButton>
        </Paper>
        <NavBar
          navItems={navBlackCarsItems}
          color="255, 255, 255"
          width="100%"
        />
      </header>
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
    </div>
  );
}
