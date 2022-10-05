import styles from "./Avatar.module.css";

export function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      alt="avatar"
      src={src}
    />
  );
}
