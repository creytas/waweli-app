import styles from "../layout.module.css";

export default function UserPage({ children, className, title }) {
  return (
    <div className={styles.rightContainer}>
      <h2 className={className}>{title}</h2>
      {children}
    </div>
  );
}
