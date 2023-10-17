import Link from "next/link";

export default function Cabecalho() {
  return (

    <div className="cabecalho">
      <header>
        <h2>Lojinha da FiapTech</h2>
        <nav>
          <p>
            <Link href="/produtos/bone">Boné</Link>
          </p>
          <p>
            <Link href="/produtos/calca">Calça</Link>
          </p>
          <p>
            <Link href="/produtos/camisa">Camisa</Link>
          </p>
          <p>
            <Link href="/produtos/oculos">Óculos</Link>
          </p>
          <p>
            <Link href="/produtos/sapato">Sapato</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
