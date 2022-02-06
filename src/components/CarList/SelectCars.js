import CarList from "./CarList.js";
import { TextField, InputBase, Paper, IconButton } from "@mui/material";
import NavBar from "../Navs/NavBar.jsx";
import { Icon } from "@iconify/react";
import { navBlackCarsItems } from "../layout";
import styles from "../layout.module.css";
import carStyles from "./SelectCars.module.css";

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
      <CarList />
    </div>
  );
}
