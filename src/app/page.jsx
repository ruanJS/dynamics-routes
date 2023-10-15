import Image from 'next/image'

export default function Home(){

  return(
    <div>
       <h1>Home</h1>

        <div>
          <figure>
            <Image src="/img/camisa-jordan.png" alt="Nuvem de palavras" width={500} height={460}/>
          </figure>
        </div>

    </div>
  )
}