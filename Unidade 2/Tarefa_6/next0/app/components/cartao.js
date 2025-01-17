export default function Cartao({ titulo, conteudo }) {
    return (
      <div style={{ border: "1px solid #4CAF50", padding: "20px", margin: "10px 0", borderRadius: "5px" }}>
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
      </div>
    );
  }