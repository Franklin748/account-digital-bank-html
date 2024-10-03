import React from "react";
import Titulo from "./Titulo";
import Small from "./Small";
import Logo from "./Logo";
//Imports de Logo, Small, Titulo. Foram importados para simplificar a pasta LadoEsquerdo.

export default function LadoEsquerdo () {
  return(
  <div class="lado-esquerdo" >
    <main class="flex">
    <aside class="flex flex-column">
				<div class="flex flex-column">
          <Logo />
          <Titulo />
					<Small />
				</div>
			</aside>
      </main>
  </div>
  
    )
}