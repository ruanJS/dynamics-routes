import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Home</h1>
      </div>

      <div className="cards-container">
        <div className="card">
          <a href="/produtos/bone">
            <Image
              src="/img/bone-59fifty.png"
              alt="Boné"
              width={300}
              height={220}
            />
            <figcaption>Boné 59Fifty</figcaption>
          </a>
        </div>

        <div className="card">
          <a href="/produtos/calca">
            <Image
              src="/img/calça-nike.png"
              alt="Calça"
              width={250}
              height={320}
            />
            <figcaption>Calça Nike</figcaption>
          </a>
        </div>

        <div className="card">
          <a href="/produtos/camisa">
            <Image
              src="/img/camisa-jordan.png"
              alt="Camisa"
              width={290}
              height={300}
            />
            <figcaption>Camisa Jordan</figcaption>
          </a>
        </div>

        <div className="card">
          <a href="/produtos/oculos">
            <Image
              src="/img/oculos-cartier.png"
              alt="Óculos"
              width={390}
              height={220}
            />
            <figcaption>Óculos Cartier</figcaption>
          </a>
        </div>

        <div className="card">
          <a href="/produtos/sapato">
            <Image
              src="/img/tenis-jordan.png"
              alt="Tênis"
              width={350}
              height={350}
            />
            <figcaption>Tênis Jordan</figcaption>
          </a>
        </div>
      </div>
    </>
  );
}
