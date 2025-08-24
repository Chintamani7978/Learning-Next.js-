// src/app/about/page.js
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>This is the About page</h1>
      <ul className={styles.list}>
        <li className={styles.item}>We are building a Next.js application.</li>
        <li className={styles.item}>This page is styled with a fresh, modern theme.</li>
        <li className={styles.item}>It uses CSS Modules for easy, scoped styling.</li>
      </ul>
      <p className={styles.paragraph}>
        Next.js makes file-based routing and component styling super efficient. Try customizing this page further!
      </p>
      <button className={styles.button}>Click me</button>
    </div>
  );
}
