import UserPage from "./UserPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import formStyles from "./Form.module.css";

export default function FormPage() {
  const title = "WELCOME TO WAWELI CARS";
  return (
    <UserPage className={formStyles.formTitle} title={title}>
      {/* <SigninForm /> */}
      <SignupForm />
    </UserPage>
  );
}
