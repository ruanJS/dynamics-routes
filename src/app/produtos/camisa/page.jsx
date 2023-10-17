import Image from "next/image";

export default function Camisa() {
  return (
    <div>
      <h1>Camisa Jordan</h1>
      <div>
        <h4>
          A camiseta Jordan tem jersey macio para conforto durante todo o dia,
          das quadras às ruas além do caimento padrão para uma maior sensação de
          conforto e descontração.
        </h4>
        <figure>
          <Image src="/img/camisa-jordan.png" alt="Camisa" width={290} height={300}/>
        </figure>
      </div>
    </div>
  );
}
