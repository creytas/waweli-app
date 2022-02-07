import {
  TextField,
  InputBase,
  Paper,
  IconButton,
  Divider,
  Link,
  Button,
} from "@mui/material";
import carStyles from "../CarList/SelectCars.module.css";
import styles from "../layout.module.css";
import formStyles from "./Form.module.css";
import Input from "../Input";
import { Icon } from "@iconify/react";

export default function SigninForm() {
  return (
    <Paper component="form" className={formStyles.formContainer}>
      <span className={carStyles.paper}>
        <Input type="text" />
        <Icon icon="heroicons-outline:user" className={formStyles.inputIcon} />
      </span>
      <span className={carStyles.paper}>
        <Input type="password" />
        <Icon icon="akar-icons:eye-slashed" className={formStyles.inputIcon} />
      </span>
      <span className={formStyles.forgotLink}>
        <Link>Forgot Password ?</Link>
      </span>
      <span className={formStyles.buttonContainer}>
        <Button variant="contained" className={formStyles.button}>
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
