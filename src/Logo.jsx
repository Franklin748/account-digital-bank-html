import React from "react";
import imagen from "../public/imagen/logo.svg"

export default function Logo(){
    return(
      <div>
        <div class="logo">
			<a href="/">
			   <img src={imagen} alt="Logo"/>
			</a>
		</div>
      </div>
    )
}
//Import da imagem que está no plubic/imagen. Puxando para o src como um {} para JS
//Componente para a Logo, que será mandado para o componente LadoEsquerdo.
