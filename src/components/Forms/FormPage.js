import styles from "../layout.module.css";
import formStyles from "./Form.module.css";

export default function FormPage({ children }) {
  return (
    <div
      className={styles.rightContainer}
      style={{
        overflowY: `scroll`,
        scrollbarWidth: `none`,
        msOverflowStyle: `none`,
      }}
    >
      <h2 className={formStyles.formTitle}>WELCOME TO WAWELI CARS</h2>
      {children}
    </div>
  );
}
