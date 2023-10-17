import Image from "next/image";

export default function Sapato() {
  return (
    <div>
      <h1>Sapato Air Jordan</h1>
      <div>
        <h4>
          O tênis Air Jordan foi produzido para o ex-jogador de basquete do Hall
          of Fame Michael Jordan durante seu tempo com o Chicago Bulls no final
          de 1984 e lançado ao público em 1º de abril de 1985.
        </h4>
        <figure>
          <Image src="/img/tenis-jordan.png" alt="Sapato" width={350} height={340}/>
        </figure>
      </div>
    </div>
  );
}
