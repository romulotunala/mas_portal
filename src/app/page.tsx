import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Image
          className={styles.logo}
          src="/logo.jpeg"
          alt="Logo Ministério Anunciando Salvação"
          width={100}
          height={100}
          priority
        />
        <h1>Ministério Anunciando Salvação</h1>
        <h2>Site em construção</h2>
        <p>
          Somos uma igreja que entende, à luz da Bíblia, <br /> 
          que o amor, a graça e a salvação se estendem a todos.
        </p>
        <p>Em breve estaremos com um novo site repleto de novidades!</p>
        <p className={styles.address}><span>Endereço:</span> Rua Projetada, 18 - Piabeta - Magé - RJ</p>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.socialLinks}>
          <li><a href="https://www.instagram.com/mas.sede" target="_blank">instagram</a></li>
          <li><a href="https://www.facebook.com/ministerioanunciandosalvacao" target="_blank">facebook</a></li>
          <li><a href="https://www.youtube.com/@mas.sederj" target="_blank">youTube</a></li>
        </ul>
      </footer>
    </>
  );
}
