export default function Mensagem({ texto, autor }) {
    return (
      <div style={{ padding: "10px", border: "1px solid #ddd", margin: "10px 0" }}>
        <p>{texto}</p>
        <p style={{ fontStyle: "italic", color: "gray" }}>- {autor}</p>
      </div>
    );
  }