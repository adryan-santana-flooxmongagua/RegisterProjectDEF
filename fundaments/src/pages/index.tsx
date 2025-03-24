import { useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {
  const clientes = [
    new Client("Aedk", 34, "1"),
    new Client("lopez", 16, "3"),
    new Client("joao", 15, "4"),
  ];

  function clientSelected(cliente: Client) {
    console.log(cliente.nome);
  }

  function clientDeleted(cliente: Client) {
    console.log(cliente.nome);
  }

  function saveClient( cliente : Client){

    console.log(cliente)

  }

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

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
              onClick={() => setVisivel('form')}
              >Novo Cliente</Button>
            </div>
            <Table
              clientes={clientes}
              clientSelect={clientSelected}
              clientDelete={clientDeleted}
            />
          </>
        ) : (
          <Form cliente={clientes[2]}
          clientChange={saveClient}
          cancel={()=> setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  );
}
