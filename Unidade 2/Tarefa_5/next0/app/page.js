// app/page.js

export default function Home() {
    return (
       <div>
          <h1>Bem-vindo à Home</h1>
          <p>Esta é a página inicial da aplicação.</p>
       </div>
    );
 }
 
 // Outras funções exportadas
 export function Header() {
    return <h2>Este é um componente de cabeçalho</h2>;
 }
 
 export function Footer() {
    return <footer>Este é um rodapé</footer>;
 }
 
 export function Info() {
    return <p>Este é um parágrafo informativo</p>;
 }
 