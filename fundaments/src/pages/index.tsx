import { useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {
  const [cliente, setClient] = useState<Client>(Client.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");


  const clientes = [
    new Client("Aedk", 34, "1"),
    new Client("lopez", 16, "3"),
    new Client("joao", 15, "4"),
  ];

  function clientSelected(cliente: Client) {
    setClient(cliente)
    setVisivel('form')
  }

  function newClient() {
    setClient(Client.vazio())
    setVisivel('form')
}

  function clientDeleted(cliente: Client) {
    console.log(cliente.nome);
  }

  function saveClient( cliente : Client){   
    setVisivel('tabela')

  }


  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4"
              onClick={newClient}
              >Novo Cliente</Button>
            </div>
            <Table
              clientes={clientes}
              clientSelect={clientSelected}
              clientDelete={clientDeleted}
            />
          </>
        ) : (
          <Form cliente={cliente}
          clientChange={saveClient}
          cancel={()=> setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  );
}
