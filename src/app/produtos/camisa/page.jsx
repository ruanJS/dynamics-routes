import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Camisa() {
    return (
        <div>
            <h1>Produto: Camisa</h1>
            <Image src="/camisa.jpg" alt="Camisa" width={290} height={300}/>
            
        </div>
    );
}