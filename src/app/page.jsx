import Image from 'next/image'

export default function Home(){

  return(
    <div>
       <h1>Home</h1>
      <a href='/produtos/bone'>
          <Image src="/img/bone-59fifty.png" alt="Boné" width={300} height={220}/>
          <figcaption>Boné 59Fifty</figcaption>
      </a>
      <a href='/produtos/calca'>
          <Image src="/img/calça-nike.png" alt="Calça" width={250} height={320}/>
          <figcaption>Calça Nike</figcaption>
      </a>
      <a href='/produtos/camisa'>
          <Image src="/img/camisa-jordan.png" alt="Boné" width={290} height={300}/>
          <figcaption>Camisa Jordan</figcaption>
      </a>
      <a href='/produtos/oculos'>
          <Image src="/img/oculos-cartier.png" alt="Óculos" width={390} height={220}/>
          <figcaption>Óculos Cartier</figcaption>
      </a>
      <a href='/produtos/sapato'>
          <Image src="/img/tenis-jordan.png" alt="sapato" width={350} height={460}/>
          <figcaption>Tênis Jordan</figcaption>
      </a>
    </div>
  )
}