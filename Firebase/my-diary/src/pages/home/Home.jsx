import DiaryForm from './DiaryForm'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.cont}>
      {/* 일기작성 폼 */}
      <aside className={styles.side_menu}>
        <DiaryForm />
      </aside>
      <ul className={styles.content_list}>
        다이어리 리스트
      </ul>
    </main>
  )
}