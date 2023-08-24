import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/">BOTOFOOD</Link>
        </div>
        <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categries</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://botostart.ir" target="_blank">Botostart</a>
        Next.js course | BotoFood project &copy;
      </footer>
    </div>
  )
}

export default Layout
