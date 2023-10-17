import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="footer">
      <p>
        <Link href="/produtos/1">Produto - 1</Link> - 
        <Link href="/produtos/2">Produto - 2</Link> - 
        <Link href="/produtos/3">Produto - 3</Link> - 
        <Link href="/produtos/4">Produto - 4</Link> - 
        <Link href="/produtos/5">Produto - 5</Link> - 
      </p>
      <p>&copy;Todos os direitos reservados para FiapTech⚡ - 2023</p>
    </footer>
  );
}
