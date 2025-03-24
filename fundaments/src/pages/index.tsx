import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
import Button from "../components/Button"

export default function Home() {

  const clientes = [
    new Client('Aedk', 34, "1"),
    new Client('lopez', 16, "3"),
    new Client('joao', 15, "4")
  ]

  function clientSelected(cliente:Client){

    console.log(cliente.nome)

  }
  
  function clientDeleted(cliente:Client){

    console.log(cliente.nome)

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className=" flex justify-end ">
          <Button cor="green" className="mb-4">Novo Cliente</Button>
        </div>
        
        <Table clientes={clientes}
        clientSelect={clientSelected}
        clientDelete={clientDeleted}

         />
          
      </Layout>
    </div>
  )
}
