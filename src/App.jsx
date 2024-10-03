import React from 'react';
import LadoEsquerdo from './LadoEsquerdo';
import LadoDireito from './LadoDireito';
//Imports dos dois lados
import './App.css';


function App() {
  return (
      //Chamando o conteúdo dos import LadoEsquerdo é LadoDireito
      //Class container para modificar certos conteúdos pelo css
    <div className="container">
      <LadoEsquerdo />
      <LadoDireito />
      
    </div>
  );
}

export default App;
