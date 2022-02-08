import React from "react";
import FormPage from "./FormPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import formStyles from "./Form.module.css";

export default function UserPage() {
  const formTitle = "WELCOME TO WAWELI CARS";
  return (
    <FormPage className={formStyles.formTitle} title={formTitle}>
      {/* <SigninForm /> */}
      <SignupForm />
    </FormPage>
  );
}
