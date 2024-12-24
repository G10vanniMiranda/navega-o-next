import React from "react";

export default function Contato() {
    return (
      <form className="flex flex-col items-center">
        <h1>Cadastre um Produto</h1>

        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" placeholder="nome do produto" className="text-black" />
        
        <label htmlFor="">Preço</label>
        <input type="text" placeholder="preço do produto" />
  
        <button type="submit" className="bg-blue-600 rounded px-2">Cadastrar</button>
      </form>
    );
}