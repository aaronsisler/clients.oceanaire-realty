import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <main>
      <Link href={"/things"}>
        <a className={styles.hyperlink}>Things</a>
      </Link>
      <Link className={styles.link} href={"/things"}>
        <a className={styles.hyperlink}>Things</a>
      </Link>
    </main>
  );
}
