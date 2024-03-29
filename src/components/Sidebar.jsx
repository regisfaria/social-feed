import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1600627225432-82de96999068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/regisfaria.png" />

        <strong>Régis Faria</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="toBeAdded">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
