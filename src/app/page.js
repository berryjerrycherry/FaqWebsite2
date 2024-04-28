import Image from "next/image";
import Icon from './Icon.jpg';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
            <h1 className={styles.dawnText}>Dawn</h1>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className={styles.center}>
</div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            User Manual <span>-&gt;</span>
          </h2>
          <p>Find in-depth information on the installation of Dawn.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Minimum Specs <span>-&gt;</span>
          </h2>
          <p>Check if your system can run the application</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            How to play <span>-&gt;</span>
          </h2>
          <p>Explore how to play the game, as well as tips.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            FAQ & Contact <span>-&gt;</span>
          </h2>
          <p>
            Look for common questions, and find ways to reach out to us.
          </p>
        </a>
      </div>
    </main>
  );
}
