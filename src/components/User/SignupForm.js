import { useForm } from "react-hook-form";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
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

export default function SignupForm() {
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
          className={formStyles.input}
          {...register("email")}
          placeholder="example@mymail.com"
          type="email"
        />
        <Icon icon="feather:mail" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("password")}
          placeholder="set your password"
          type="password"
        />
        {/* <Input
          name="password"
          type="password"
          placeholder="set your password"
        /> */}
        <Icon icon="akar-icons:eye-slashed" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("passwordConfirmation")}
          placeholder="confirm your password"
          type="password"
        />
        {/* <Input
          type="password"
          name="passwordConfirmation"
          placeholder="confirm your password"
        /> */}
        <Icon icon="akar-icons:eye-slashed" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("firstName")}
          placeholder="John"
          type="text"
        />
        {/* <Input type="text" name="firstName" placeholder="John" /> */}
        <Icon icon="heroicons-outline:user" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("firstName")}
          placeholder="Doe"
          type="text"
        />
        {/* <Input type="text" name="lastName" placeholder="Doe" /> */}
        <Icon icon="heroicons-outline:user" className={formStyles.inputIcon} />
      </span>
      <span className={formStyles.radioGroup}>
        <span className={formStyles.radioGroupLabel}>Gender</span>
        <RadioGroup defaultValue="male" name="gender" row>
          <span className={formStyles.radioContainer}>
            <Radio className={formStyles.radio} value="male" color="default" />
            <span className={formStyles.radioLabel}>Male</span>
          </span>
          <span className={formStyles.radioContainer}>
            <Radio
              className={formStyles.radio}
              value="female"
              color="default"
            />
            <span className={formStyles.radioLabel}>Female</span>
          </span>
        </RadioGroup>
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("birthdate")}
          type="date"
        />
        {/* <Input type="date" name="birthdate" /> */}
        <Icon
          icon="ant-design:calendar-outlined"
          className={formStyles.inputIcon}
        />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("adress")}
          type="text"
          placeholder="set your place adress"
        />
        {/* <Input type="text" name="adress" placeholder="set your place adress" /> */}
        <Icon icon="ic:outline-place" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <input
          className={formStyles.input}
          {...register("phoneNumber")}
          type="tel"
          placeholder="+243 829 999 999"
        />
        {/* <Input type="tel" name="phoneNumber" placeholder="+243 829 999 999" /> */}
        <Icon icon="bi:phone" className={formStyles.inputIcon} />
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
        className={formStyles.forgotLink}
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
