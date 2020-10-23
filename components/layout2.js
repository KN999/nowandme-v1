import styles from './layout2.module.css'

export default function Layout2({ children }) {
    return <a href="/auth/register" className="w-full no-underline"><div className={styles.container}>{children}</div></a>
  }