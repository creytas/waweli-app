import styles from "../layout.module.css";

export default function UserPage({ children, className, title }) {
  return (
    <div
      className={styles.rightContainer}
      style={{
        overflowY: `scroll`,
        scrollbarWidth: `none`,
        msOverflowStyle: `none`,
      }}
    >
      <h2 className={className}>{title}</h2>
      {children}
    </div>
  );
}
