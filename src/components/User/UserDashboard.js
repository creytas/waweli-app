import UserPage from "./UserPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import dashboardStyles from "./Form.module.css";

export default function UserDashboard() {
  const userIdentity = "Randy Buhendwa";
  const title = (
    <>
      WELCOME BACK <span>{userIdentity.toUpperCase()}</span>
    </>
  );
  return (
    <UserPage className={dashboardStyles.dashboardTitle} title={title}>
      {/* <SigninForm /> */}
      <SignupForm />
    </UserPage>
  );
}
