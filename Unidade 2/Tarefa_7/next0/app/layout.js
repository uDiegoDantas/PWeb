export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
          <nav>
            <a href="/" style={{ marginRight: "15px" }}>Home</a>
            <a href="/rota1" style={{ marginRight: "15px" }}>Rota 1</a>
            <a href="/rota2" style={{ marginRight: "15px" }}>Rota 2</a>
            <a href="/rota3">Rota 3</a>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}