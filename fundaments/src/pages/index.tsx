import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";

import useClientes from "../hooks/useClientes";


export default function Home() {

  const {
    cliente,
    clientes,
    newClient,
    saveClient,
    clientSelected,
    clientDeleted,
    tabelaVisivel,
    exibirTabela
  } = useClientes()


  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
          cancel={exibirTabela} />
        )}
      </Layout>
    </div>
  );
}
