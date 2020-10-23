import styles from './content.module.css'

export default function Content({ children }) {
    return (<div className={styles.container}><p className="px-1 py-2 my-2 flex">{children}</p></div>);
  }