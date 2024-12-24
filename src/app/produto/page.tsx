export default function Produto() {
  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col w-96">
        <h1 className="text-3xl mt-10 mb-5 font-semibold">Cadastre um Produto</h1>

        <label htmlFor="email">Nome</label>
        <input id="nome" type="text" placeholder="Nome do produto" className="text-black p-2 rounded-md" />

        <label htmlFor="" className="mt-2">Preço</label>
        <input type="text" placeholder="Preço do produto" className="text-black p-2 rounded-md" />

        <div className="flex justify-start mt-2">
          <button type="submit" className="bg-green-600 btn-padrao">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}