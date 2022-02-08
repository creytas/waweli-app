import React from "react";
import UserPage from "./UserPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import formStyles from "./Form.module.css";

export default function FormPage() {
  const formTitle = "WELCOME TO WAWELI CARS";
  return (
    <UserPage className={formStyles.formTitle} title={formTitle}>
      {/* <SigninForm /> */}
      <SignupForm />
    </UserPage>
  );
}
