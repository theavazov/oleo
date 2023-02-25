import Link from "next/link";
import styles from "./buttons.module.css";

type Props = {
  variant: "primary" | "secondary" | "third";
  children: React.ReactNode;
  icon: any;
  path?: string;
  isDownload?: boolean;
  customFunction?: Function;
};

type ButtonProps = {
  children: React.ReactNode;
  icon: any;
  path?: string;
  isDownload?: boolean;
  customFunction?: Function;
};

export function Button({
  variant,
  children,
  icon,
  path,
  isDownload,
  customFunction,
}: Props) {
  switch (variant) {
    case "primary":
      return (
        <Primary
          icon={icon}
          path={path}
          isDownload={isDownload}
          customFunction={customFunction}
        >
          {children}
        </Primary>
      );
    case "secondary":
      return (
        <Secondary
          icon={icon}
          path={path}
          isDownload={isDownload}
          customFunction={customFunction}
        >
          {children}
        </Secondary>
      );
    case "third":
      return (
        <Third
          icon={icon}
          path={path}
          isDownload={isDownload}
          customFunction={customFunction}
        >
          {children}
        </Third>
      );
    default:
      return (
        <Primary
          icon={icon}
          path={path}
          isDownload={isDownload}
          customFunction={customFunction}
        >
          {children}
        </Primary>
      );
  }
}

const Primary = ({
  children,
  icon,
  path,
  isDownload,
  customFunction,
}: ButtonProps) => {
  if (path) {
    if (isDownload) {
      return (
        <a
          href={`${path}`}
          className={`${styles.btn} ${styles.primary}`}
          download={path}
          aria-label={"download"}
          target={"_blank"}
          rel="noreferrer"
        >
          <span className={styles.icon}>{icon}</span>
          {children}
        </a>
      );
    } else
      return (
        <Link href={`${path}`} className={`${styles.btn} ${styles.primary}`}>
          <span className={styles.icon}>{icon}</span>
          {children}
        </Link>
      );
  } else {
    return (
      <button
        className={`${styles.btn} ${styles.primary}`}
        onClick={customFunction}
      >
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};

const Secondary = ({
  children,
  icon,
  path,
  isDownload,
  customFunction,
}: ButtonProps) => {
  if (path) {
    if (isDownload) {
      return (
        <a
          href={`${path}`}
          className={`${styles.btn} ${styles.secondary}`}
          download={path}
          aria-label={"download"}
          target={"_blank"}
          rel="noreferrer"
        >
          <span className={styles.icon}>{icon}</span>
          {children}
        </a>
      );
    } else
      return (
        <Link href={`${path}`} className={`${styles.btn} ${styles.secondary}`}>
          <span className={styles.icon}>{icon}</span>
          {children}
        </Link>
      );
  } else {
    return (
      <button
        className={`${styles.btn} ${styles.secondary}`}
        onClick={customFunction}
      >
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};

const Third = ({
  children,
  icon,
  path,
  isDownload,
  customFunction,
}: ButtonProps) => {
  if (path) {
    if (isDownload) {
      return (
        <a
          href={`${path}`}
          className={`${styles.btn} ${styles.third}`}
          download={path}
          aria-label={"download"}
          target={"_blank"}
          rel="noreferrer"
        >
          <span className={styles.icon}>{icon}</span>
          {children}
        </a>
      );
    } else
      return (
        <Link href={`${path}`} className={`${styles.btn} ${styles.third}`}>
          <span className={styles.icon}>{icon}</span>
          {children}
        </Link>
      );
  } else {
    return (
      <button
        className={`${styles.btn} ${styles.third}`}
        onClick={customFunction}
      >
        <span className={styles.icon}>{icon}</span>
        {children}
      </button>
    );
  }
};
