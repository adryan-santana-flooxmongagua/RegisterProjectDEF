import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {

  const clientes = [
    new Client('Aedk', 34, "1"),
    new Client('lopez', 16, "3"),
    new Client('joao', 15, "4")
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Table clientes={clientes}></Table>
      </Layout>
    </div>
  )
}
