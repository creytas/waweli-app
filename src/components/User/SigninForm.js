import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
import { width } from "@mui/system";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={formStyles.formContainer}
    >
      <span className={errors.email ? carStyles.paperError : carStyles.paper}>
        <input
          name="email"
          className={formStyles.input}
          {...register("email")}
          placeholder="example@mymail.com"
          type="email"
          onError={errors.email ? true : false}
        />
        <Icon
          icon={errors.email ? "carbon:warning-alt" : "heroicons-outline:user"}
          className={errors.email ? formStyles.errorIcon : formStyles.inputIcon}
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.email?.message}
        </Typography>
      </span>
      <div
        style={{
          border: `0px solid blue`,
          position: `relative`,
          width: `80%`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `flex-start`,
          paddingBottom: `3%`,
        }}
      >
        <span
          className={errors.password ? carStyles.paperError : carStyles.paper}
          style={{ width: `100%` }}
        >
          <input
            name="password"
            className={formStyles.input}
            {...register("password")}
            placeholder="your password"
            type="password"
            onError={errors.password ? true : false}
          />

          <Icon
            icon={
              errors.password ? "carbon:warning-alt" : "akar-icons:eye-slashed"
            }
            className={
              errors.password ? formStyles.errorIcon : formStyles.inputIcon
            }
          />
        </span>
        <span style={{ width: `80%`, border: `0px solid blue` }}>
          <Typography className={formStyles.error}>
            {errors.password?.message}
          </Typography>
        </span>
        <span className={formStyles.forgotLink}>
          <Link>Forgot Password ?</Link>
        </span>
      </div>
      <span
        className={formStyles.buttonContainer}
        style={{ marginTop: "6.5%" }}
      >
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
      <span className={formStyles.redirectionLink}>
        If you don&apos;t have an account yet,
        <Link style={{ padding: `0% 1%`, border: `0px solid #fff` }}>
          SIGNUP
        </Link>
      </span>
    </Paper>
  );
}
