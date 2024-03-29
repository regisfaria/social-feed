import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

/**
 *
 * @param props object
 * @param props.profileUrl string
 * @param props.author: string
 * @param props.role string
 * @param props.content string[]
 * @param props.embedded object
 * @param props.embedded.uri string(should be an url such as "https://<smth.here>.com")
 * @param props.embedded.text string
 * @param props.hashtags string[]
 * @param props.publishedAt Date
 * @returns Post component
 */
export function Post(props) {
  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'of' LLLL 'at' HH:mm",
    { locale: enUS }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.profileUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((content) => (
          <p>{content}</p>
        ))}

        {props.embedded && (
          <p>
            <a href={props.embedded.uri}>{props.embedded.text}</a>
          </p>
        )}

        {props.hashtags && (
          <p className={styles.hashtag}>
            {props.hashtags.map((hashtag) => (
              <a href="">{hashtag}</a>
            ))}
          </p>
        )}
      </div>

      <form className={styles.commentArea}>
        <strong>Leave your feedback:</strong>

        <textarea placeholder="Leave your comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
