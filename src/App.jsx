import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./mocks/posts";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                profileUrl={post.author.profileUrl}
                author={post.author.name}
                role={post.author.role}
                content={post.content}
                embedded={post.embedded}
                hashtags={post.hashtags}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
