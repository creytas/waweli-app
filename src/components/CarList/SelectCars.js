import { useForm } from "react-hook-form";
import CarList from "./CarList.js";
import { TextField, Paper, IconButton } from "@mui/material";
import NavBar from "../Navs/NavBar.jsx";
import { Icon } from "@iconify/react";
import { navBlackCarsItems } from "../layout";
import styles from "../layout.module.css";
import carStyles from "./SelectCars.module.css";
import formStyles from "../User/Form.module.css";

export default function SelectCars() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.rightContainer}>
      <header className={styles.header}>
        <Paper
          className={carStyles.paper}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className={formStyles.input}
            {...register("search")}
            placeholder="Toyota Corolla"
            type="search"
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
