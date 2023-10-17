import Image from "next/image";

export default function Oculos() {
  return (
    <div>
      <h1>Óculos Cartier</h1>
      <div>
        <h4>
          Óculos de sol em metal com acabamento dourado liso, formato aviador,
          ponte dupla, lentes espelhadas douradas, cabeças de pantera com
          acabamento dourado e manchas em laca preta, ponteiras em acetato
          preto, hastes com assinatura Cartier.
        </h4>
        <figure>
          <Image src="/img/oculos-cartier.png" alt="Óculos" width={500} height={340}/>
        </figure>
      </div>
    </div>
  );
}
