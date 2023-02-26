import styles from "./shell.module.css";

export function Shell({ background }: { background: string }) {
  return (
    <div className={styles.shell} style={{ color: background }}>
      <p>Приглашаем к сотрудничеству</p>
    </div>
  );
}
