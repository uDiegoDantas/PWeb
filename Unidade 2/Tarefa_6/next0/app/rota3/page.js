import Mensagem from "../components/mensagem";
import Cartao from "../components/cartao";

export default function Rota3() {
  return (
    <div>
      <h1>Bem-vindo à Rota 3</h1>
      <Mensagem texto="Mensagem para a Rota 3" autor="Autor Rota 3" />
      <Cartao titulo="Cartão da Rota 3" conteudo="Conteúdo especial para a Rota 3." />
    </div>
  );
}