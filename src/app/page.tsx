import Image from "next/image";

import logo from "../assets/logo.jpeg";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Logo Ministério Anunciando Salvação"
          width={100}
          height={100}
          priority
        />
        <h1>Ministério Anunciando Salvação</h1>
      </header>
      <main className={styles.container}>
        <section>
          <h2>Site em construção</h2>
          <p>
            Somos uma igreja que entende, à luz da Bíblia, que <br />o amor, a
            graça e a salvação se estendem a todos.
          </p>
          <p>Em breve estaremos com um novo site repleto de novidades!</p>
        </section>
        <section>
          <h2>Venha nos fazer uma visita!</h2>
          <p className={styles.address}>
            <span>Endereço:</span> R. Sergipe, 440 - Piabetá, Magé - RJ
          </p>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3251306517777!2d-43.16148882460073!3d-22.61629937946067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a14adbc92875%3A0xaa2a8a0ad7d1a816!2zTWluaXN0w6lyaW8gQW51bmNpYW5kbyBTYWx2YcOnw6Nv!5e1!3m2!1spt-BR!2sbr!4v1750716476204!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <section>
          <h2>Quer contibuir com nosso ministério?</h2>
          <p>
            Se você deseja apoiar nossa missão, seguem abaixos as informações
            bancarias para doaçoes
          </p>
          <p>
            Toda ajuda e bem-vinda e é usada com transparencia para o avanço do
            Reino
          </p>
          <div className={styles.dadosBancarios}>
            <p>Banco: <span>403 - Cora SCFI</span></p>
            <p>Agencia: <span>0001</span></p>
            <p>Conta Corrente: <span>1512139-6</span></p>
            <p>PIX (CNPJ): <span>43.606.740/0001-89</span></p>
            <p>NOME: <span>IGREJA EVANGELICA MINISTERIO ANUNCIANDO SALVACAO</span></p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://www.instagram.com/mas.sede" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ministerioanunciandosalvacao"
              target="_blank"
            >
              facebook
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@mas.sederj" target="_blank">
              youTube
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
