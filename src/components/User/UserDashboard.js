import UserPage from "./UserPage";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import styles from "../layout.module.css";
import dashboardStyles from "./Form.module.css";
import { navBlackUserItems } from "../layout";
import NavBar from "../Navs/NavBar.jsx";
import TransactionList from "./transactionList";

export default function UserDashboard() {
  const userIdentity = "Randy Buhendwa";
  const title = (
    <>
      WELCOME BACK <span>{userIdentity.toUpperCase()}</span>
    </>
  );
  return (
    <UserPage className={dashboardStyles.dashboardTitle} title={title}>
      <header className={styles.header}>
        <NavBar
          navItems={navBlackUserItems}
          color="255, 255, 255"
          width="100%"
        />
      </header>
      <div className={dashboardStyles.list}>
        <TransactionList />
      </div>
    </UserPage>
  );
}
