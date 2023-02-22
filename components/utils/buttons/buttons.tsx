import Link from "next/link";
import styles from "./buttons.module.css";

type Props = {
  variant: "primary" | "secondary" | "third";
  children: React.ReactNode;
  icon: any;
  path?: string;
};

type ButtonProps = {
  children: React.ReactNode;
  icon: any;
  path?: string;
};

export function Button({ variant, children, icon, path }: Props) {
  switch (variant) {
    case "primary":
      return (
        <Primary icon={icon} path={path}>
          {children}
        </Primary>
      );
    case "secondary":
      return (
        <Secondary icon={icon} path={path}>
          {children}
        </Secondary>
      );
    case "third":
      return (
        <Third icon={icon} path={path}>
          {children}
        </Third>
      );
    default:
      return (
        <Primary icon={icon} path={path}>
          {children}
        </Primary>
      );
  }
}

const Primary = ({ children, icon, path }: ButtonProps) => {
  if (path) {
    return (
      <Link href={`${path}`} className={`${styles.btn} ${styles.primary}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${styles.btn} ${styles.primary}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};

const Secondary = ({ children, icon, path }: ButtonProps) => {
  if (path) {
    return (
      <Link href={`${path}`} className={`${styles.btn} ${styles.secondary}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${styles.btn} ${styles.secondary}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};

const Third = ({ children, icon, path }: ButtonProps) => {
  if (path) {
    return (
      <Link href={`${path}`} className={`${styles.btn} ${styles.third}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${styles.btn} ${styles.third}`}>
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};
