import Image from "next/image";

export default function Bone() {
  return (
    <div>
        <h1>Boné</h1>
        <div>
            <h4>O 9FIFTY™ Original Fit vem com a aba em um formato quadrado e mais curto, a copa do boné vem um pouco mais reta e o cap é mais raso, sendo um modelo FIT que não cobre as orelhas e tem as linhas mais retas.</h4>
            <figure>
              <Image src="/img/bone-59fifty.png" alt="Boné" width={300} height={220}/>
            </figure>
        </div>
    </div>
  )
}