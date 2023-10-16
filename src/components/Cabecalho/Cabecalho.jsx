import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header>
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
          <p>
            <Link href="/produtos/1">Produto - 1</Link> -
            <Link href="/produtos/2">Produto - 2</Link> -
            <Link href="/produtos/3">Produto - 3</Link> -
            <Link href="/produtos/4">Produto - 4</Link> -
            <Link href="/produtos/5">Produto - 5</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
