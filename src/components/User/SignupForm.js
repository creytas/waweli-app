import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  Radio,
  RadioGroup,
  Paper,
  IconButton,
  Divider,
  Link,
  Button,
} from "@mui/material";
import carStyles from "../CarList/SelectCars.module.css";
import formStyles from "./Form.module.css";
import { Icon } from "@iconify/react";
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
  passwordConfirmation: yup.string().min(5).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  gender: yup.string().required(),
  birthdate: yup.date().required(),
  adress: yup.string().required(),
  phoneNumber: yup.string(),
});

export default function SignupForm() {
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
          className={formStyles.input}
          {...register("email")}
          placeholder="example@mymail.com"
          type="email"
        />
        <Icon
          icon="feather:mail"
          className={errors.email ? formStyles.errorIcon : formStyles.inputIcon}
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.email?.message}
        </Typography>
      </span>
      <span
        className={errors.password ? carStyles.paperError : carStyles.paper}
      >
        <input
          className={formStyles.input}
          {...register("password")}
          placeholder="set your password"
          type="password"
        />
        <Icon
          icon="akar-icons:eye-slashed"
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
      <span
        className={
          errors.passwordConfirmation ? carStyles.paperError : carStyles.paper
        }
      >
        <input
          className={formStyles.input}
          {...register("passwordConfirmation")}
          placeholder="confirm your password"
          type="password"
        />
        <Icon
          icon="akar-icons:eye-slashed"
          className={
            errors.passwordConfirmation
              ? formStyles.errorIcon
              : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.passwordConfirmation?.message}
        </Typography>
      </span>
      <span
        className={errors.firstName ? carStyles.paperError : carStyles.paper}
      >
        <input
          className={formStyles.input}
          {...register("firstName")}
          placeholder="John"
          type="text"
        />
        <Icon
          icon="heroicons-outline:user"
          className={
            errors.firstName ? formStyles.errorIcon : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.firstName?.message}
        </Typography>
      </span>
      <span
        className={errors.lastName ? carStyles.paperError : carStyles.paper}
      >
        <input
          className={formStyles.input}
          {...register("lastName")}
          placeholder="Doe"
          type="text"
        />
        <Icon
          icon="heroicons-outline:user"
          className={
            errors.lastName ? formStyles.errorIcon : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.lastName?.message}
        </Typography>
      </span>
      <span className={formStyles.radioGroup}>
        <span className={formStyles.radioGroupLabel}>Gender</span>
        <RadioGroup
          defaultValue="male"
          {...register("gender")}
          name="gender"
          row
        >
          <span className={formStyles.radioContainer}>
            <Radio
              className={formStyles.radio}
              value="male"
              {...register("gender")}
              color="default"
            />
            <span className={formStyles.radioLabel}>Male</span>
          </span>
          <span className={formStyles.radioContainer}>
            <Radio
              className={formStyles.radio}
              value="female"
              {...register("gender")}
              color="default"
            />
            <span className={formStyles.radioLabel}>Female</span>
          </span>
        </RadioGroup>
      </span>
      <span
        className={errors.birthdate ? carStyles.paperError : carStyles.paper}
      >
        <input
          className={formStyles.input}
          {...register("birthdate")}
          type="date"
        />
        <Icon
          icon="ant-design:calendar-outlined"
          className={
            errors.birthdate ? formStyles.errorIcon : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.birthdate?.message}
        </Typography>
      </span>
      <span className={errors.adress ? carStyles.paperError : carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("adress")}
          type="text"
          placeholder="set your place adress"
        />
        <Icon
          icon="ic:outline-place"
          className={
            errors.adress ? formStyles.errorIcon : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.adress?.message}
        </Typography>
      </span>
      <span
        className={errors.phoneNumber ? carStyles.paperError : carStyles.paper}
      >
        <input
          className={formStyles.input}
          {...register("phoneNumber")}
          type="tel"
          placeholder="+243 829 999 999"
        />
        <Icon
          icon="bi:phone"
          className={
            errors.phoneNumber ? formStyles.errorIcon : formStyles.inputIcon
          }
        />
      </span>
      <span style={{ width: `80%`, border: `0px solid blue` }}>
        <Typography className={formStyles.error}>
          {errors.phoneNumber?.message}
        </Typography>
      </span>
      <span className={formStyles.buttonContainer} style={{ marginTop: `5%` }}>
        <Button type="submit" variant="contained" className={formStyles.button}>
          submit
        </Button>
      </span>
      <span>
        <Divider className={formStyles.divider}>OR</Divider>
      </span>
      <span className={formStyles.buttonContainer}>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          className={formStyles.button}
        >
          <Icon icon="bi:google" fontSize="20px" />
        </Button>
      </span>
      <span
        className={formStyles.redirectionLink}
        style={{
          border: `0px solid #fff`,
          margin: `4% 0% 8% 0%`,
          justifyContent: `center`,
        }}
      >
        If you already have an account,
        <Link style={{ padding: `0% 1%`, border: `0px solid #fff` }}>
          SIGNIN
        </Link>
      </span>
    </Paper>
  );
}
