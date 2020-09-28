import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>contato@rcarrenho.com.br</li>
          <li>(19) 99398 6988</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
