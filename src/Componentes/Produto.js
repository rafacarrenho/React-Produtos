import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        setError("Aconteceu um erro");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (!produto) return null;
  return (
    <div className={`${styles.produto} animeLeft`}>
      <Head title={produto.nome} description="Confira nossos Produtos" />
      <div>
        {" "}
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt="" key={foto.src} />
        ))}
      </div>

      <div>
        <h1 className={styles.nome}>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </div>
  );
};

export default Produto;
