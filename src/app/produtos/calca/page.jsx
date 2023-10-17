import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  return (
    <div>
        <h1>Calça</h1>
        <div>
            <p>As calças Nike Sportswear Swoosh representam seu amor pelo logotipo que deu início a tudo. Os detalhes estampados e bordados conferem textura e estilo a estas versáteis calças joggers em french terry.</p>
            <figure>
              <Image src="/img/calça-nike.png" alt="Calça" width={250} height={320}/>
            </figure>
        </div>
    </div>
  )
}
