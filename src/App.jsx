import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import { postData } from './mocks/posts'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            profileUrl="https://github.com/regisfaria.png"
            author="Régis Faria"
            role="Developer"
            content={postData.first.content}
            embedded={postData.first.embedded}
            hashtags={postData.first.hashtags}
          />
          <Post
            profileUrl="https://xesque.rocketseat.dev/users/avatar/profile-7a16c64f-e5c4-418f-8530-089d830e9ade-1628641872955.jpg"
            author="John Doe"
            role="Project manager"
            content={postData.second.content}
            embedded={postData.second.embedded}
            hashtags={postData.second.hashtags}
          />
        </main>
      </div>
    </div>
  )
}

export default App
