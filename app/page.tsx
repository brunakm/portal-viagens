import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Explore o Mundo</h1>

      <p>
        Descubra destinos incríveis e encontre inspiração para sua próxima viagem.
      </p>

      <Link href="/destinos">
        Ver destinos
      </Link>
    </section>
  );
}