import { useEffect, useState } from "react";
import Client from "../core/Client";
import ColecaoCliente from "../backend/db/CollectionClient";
import ClientRepo from "../core/ClientRepo";
import useTableorForm from "./useTableorForm";

export default function useClients(){

    const repo: ClientRepo = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTableorForm()



      const [cliente, setClient] = useState<Client>(Client.vazio());
      const [clientes, setClients] = useState<Client[]>([]);
    
      useEffect(obterTodos,[])
    
      function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClients(clientes)
            exibirTabela
        })
    }
     
      function clientSelected(cliente: Client) {
        setClient(cliente)
       exibirFormulario
      }
    
      function newClient() {
        setClient(Client.vazio())
       exibirFormulario
    }
    
      async function clientDeleted(cliente: Client) {
        await repo.excluir(cliente)
        obterTodos()
      }
    
      async function saveClient(cliente: Client) {
        await repo.salvar(cliente)
        obterTodos()
    }
    
    return {
        cliente,
        clientes,
        newClient,
        saveClient,
        clientDeleted,
        clientSelected,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}