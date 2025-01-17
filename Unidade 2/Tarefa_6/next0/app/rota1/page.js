import Mensagem from "../components/mensagem";

export default function Rota1() {
  return (
    <div>
      <h1>Bem-vindo à Rota 1</h1>
      <Mensagem texto="Esta é uma mensagem para a Rota 1" autor="Autor Rota 1" />
    </div>
  );
}