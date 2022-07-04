import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>

        <main>
          <Post
            author="Régis Faria"
            content="Ohhh! This app is so nice \(-v-v-)/"
          />
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis veritatis esse non? Ducimus reiciendis facilis voluptatem nisi sequi omnis repellendus vel possimus. Earum odit eius suscipit excepturi deleniti iure!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
