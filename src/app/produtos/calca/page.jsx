import Image from "next/image";

export default function Calca() {
  return (
    <div>
      <h1>Calça Nike</h1>
      <div>
        <h4>
          As calças Nike Sportswear Swoosh representam seu amor pelo logotipo
          que deu início a tudo. Os detalhes estampados e bordados conferem
          textura e estilo a estas versáteis calças joggers em french terry.
        </h4>
        <figure>
          <Image src="/img/calça-nike.png" alt="Calça" width={250} height={320}/>
        </figure>
      </div>
    </div>
  );
}
