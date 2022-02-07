import React from "react";
import FormPage from "./FormPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default function UserPage() {
  return (
    <FormPage>
      {/* <SigninForm /> */}
      <SignupForm />
    </FormPage>
  );
}
