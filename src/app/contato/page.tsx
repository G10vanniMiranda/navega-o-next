export default function Contato() {
    return(
    <div className="flex items-center justify-center">
        <form className="flex flex-col w-96">
            <h1 className="text-3xl mt-10 mb-5 font-semibold">Cadastre um Contato</h1>

            <label htmlFor="email">Nome</label>
            <input id="email" type="text" placeholder="Nome" className="text-black p-2 rounded-md" />
            
            <label htmlFor="" className="mt-2">Telefone</label>
            <input type="text" className="text-black p-2 rounded-md" placeholder="(62) 99999-9999" />

            <div className=" flex justify-start mt-2">
            <button type="submit" className="bg-green-600 btn-padrao">Cadastrar</button>
        </div>
    </form>
    </div>
    )
}