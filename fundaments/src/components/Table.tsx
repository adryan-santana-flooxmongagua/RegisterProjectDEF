import Client from "../core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clientes: Client[]
}

export default function Tabela(props: TableProps) {

    function renderHead() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }


    function renderData() {
        return props.clientes?.map((Client, i) => {

            return (
                <tr key={Client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{Client.id}</td>
                    <td className="text-left p-4">{Client.nome}</td>
                    <td className="text-left p-4">{Client.idade}</td>
                    {renderAction(Client)}
                </tr>
            )

        })
    }

    function renderAction(Client: Client) {
        return (
            <td>
                <button>{IconEdit}</button>
                <button>{IconTrash}</button>
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-500
                `}>
                {renderHead()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}