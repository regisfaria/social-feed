import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/regisfaria.png" alt="comment-avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Regis Faria</strong>

              <time
                title="6 of November at 14:35"
                dateTime="2022-09-06 14:35:00"
              >
                Around 1h ago
              </time>
            </div>

            <button title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Very nice!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
