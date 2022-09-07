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
 * @returns Post component
 */
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.profileUrl} alt="author" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time title="6 of November at 14:35" dateTime="2022-09-06 14:35:00">
          Published in 1h
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
    </article>
  );
}
