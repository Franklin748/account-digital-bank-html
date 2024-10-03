import React, { useState } from "react";

export default function LadoDireito() {
  const [progress, setProgress] = useState(0);
  // Hook useState de progress para formar a barra de progresso 
  const [showPassword, setShowPassword] = useState(false);
  // Hook useState para ocultar/mostrar senha
  const [formData, setFormData] = useState({
  //Hook useState para deixar o formData armazena os valores dos campos do formulário.
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aceitaTermos: false,
  });
  const [showMessage, setShowMessage] = useState(false);
  //Hook useState para deixar o showMessage false para não exibir ate que o botão seja clicado

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    //const para disparar os eventos id, value, type, checked.
    const newValue = type === "checkbox" ? checked : value;
    //Define newValue como checked se o tipo do campo for “checkbox”, caso contrário,
  	//define newValue como value.

    setFormData((prevData) => ({
    //A função setFormData é chamada para atualizar o estado do formulário com o novo valor do
	  //campo que foi alterado. Para facilita a extração de múltiplas propriedades de e.target de um
	  //só vez. É verifica se o campo é um checkbox para usar checked em vez de value.
      ...prevData,
      [id]: newValue,
    }));

    updateProgress({ ...formData, [id]: newValue });
    //A função updateProgress provavelmente calcula a porcentagem de campos preenchidos e atualiza o
	  //estado da barra de progresso.
  };

  const updateProgress = (data) => {
    let filledFields = 0;
    if (data.nome) filledFields++;
    if (data.telefone) filledFields++;
    if (data.email) filledFields++;
    if (data.senha) filledFields++;

    setProgress((filledFields / 4) * 100);
    //const para selecionar os elementos é adicionar na barra de progressor fazendo com que vá de 25 á 25
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Alterna a visibilidade da senha
  };

  const getProgressLabel = () => {
    return progress === 100 ? "Sucesso!" : "Preencha os campos";
    // Retorna "Sucesso!" quando o progresso é 100%, caso contrário, "Preencha os campos"
  };

  const isAnyFieldFilled = () => {
    return (
      formData.nome ||
      formData.telefone ||
      formData.email ||
      formData.senha
    );
    // Verifica se algum campo do formulário foi preenchido
  };

  const handleSubmit = () => {
    if (formData.aceitaTermos) {
      setShowMessage(true);
      // Exibe a mensagem de sucesso quando os termos são aceitos
    }
  };

  return (
	//Para fazer com que apareça as funções, usei o {value} para adicionar os {progress, formData.X}.
	//Os {onChange} para adicionar o {handleChange}. Os {onClick} para adicionar os {togglePasswordVisibility, handleSubmit}.
	//Coloquei types é id nós inputs, e para chamar as funções de mensagem e senha chamei os
	//{showPassword, showMessage}. É para a base na estrutura usei o HTML fornecido e adaptei para o React.
    <div className="lado-direito">
      <main className="flex">
        <div className="flex flex-column">
          <div className="formulario flex flex-column">
            {isAnyFieldFilled() && (
              <div className="progresso">
                <label className={progress === 100 ? "completo" : ""}>{getProgressLabel()}</label>
                <progress value={progress} max="100"></progress>
              </div>
            )}
            <div className="flex flex-column">
              <label htmlFor="nome">Digite seu nome</label>
              <input type="text" id="nome" value={formData.nome} onChange={handleChange} />
            </div>
            <div className="flex flex-column">
              <label htmlFor="telefone">Digite seu telefone</label>
              <input type="text" id="telefone" value={formData.telefone} onChange={handleChange} />
            </div>
            <div className="flex flex-column">
              <label htmlFor="email">Digite seu e-mail</label>
              <input type="text" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-column">
              <label htmlFor="senha">Digite sua senha</label>
              <input type={showPassword ? "text" : "password"} id="senha" value={formData.senha} onChange={handleChange} />
              <button className="mostra-senha" onClick={togglePasswordVisibility}>
                {showPassword ? "Ocultar senha" : "Exibir senha"}
              </button>
            </div>
            <div className="flex termos">
              <input type="checkbox" id="aceitaTermos" checked={formData.aceitaTermos} onChange={handleChange} />
              <label htmlFor="aceitaTermos">
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta
              </label>
            </div>
            <div className="flex">
              <button className="botao" disabled={!formData.aceitaTermos} onClick={handleSubmit}>
                Aceite os termos
              </button>
            </div>
            {showMessage && (
              <p className="mensagem-sucesso">
                Obrigado {formData.nome}, por abrir sua conta! Você receberá no email: {formData.email}, detalhes sobre o recebimento do cartão.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

//EQUIPE:Franklin Vinicius Rodrigues Pereira - 37021748
//       Ruan Mendonça Nunes - 37021555