import { useForm } from "react-hook-form";
import {
  Paper,
  Alert,
  Typography,
  TextField,
  IconButton,
  Divider,
  Link,
  Button,
} from "@mui/material";
import carStyles from "../CarList/SelectCars.module.css";
import formStyles from "./Form.module.css";
import { Icon } from "@iconify/react";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={formStyles.formContainer}
    >
      <span className={carStyles.paper}>
        <input
          name="email"
          className={formStyles.input}
          {...register("email")}
          placeholder="example@mymail.com"
          type="email"
          onError={errors.name ? true : false}
        />
        <Alert severity="error">{errors.name?.message}</Alert>
        <Icon icon="heroicons-outline:user" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          name="password"
          className={formStyles.input}
          {...register("password")}
          placeholder="your password"
          type="password"
        />

        <Icon icon="akar-icons:eye-slashed" className={formStyles.inputIcon} />
      </span>
      <Alert severity="error"></Alert>
      <span className={formStyles.forgotLink}>
        <Link>Forgot Password ?</Link>
      </span>
      <span className={formStyles.buttonContainer}>
        <Button type="submit" variant="contained" className={formStyles.button}>
          log in
        </Button>
      </span>
      <span>
        <Divider className={formStyles.divider}>OR</Divider>
      </span>
      <span className={formStyles.buttonContainer}>
        <Button variant="contained" className={formStyles.button}>
          <Icon icon="bi:google" fontSize="20px" />
        </Button>
      </span>
      <span className={formStyles.forgotLink}>
        If you don&apos;t have an account yet,
        <Link style={{ padding: `0% 1%`, border: `0px solid #fff` }}>
          SIGNUP
        </Link>
      </span>
    </Paper>
  );
}
