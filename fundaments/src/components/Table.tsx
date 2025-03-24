import Client from "../core/Client"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clientes: Client[]
    clientSelect?: (cliente: Client) => void
    clientDelete?: (cliente: Client) => void
}   

export default function Tabela(props: TableProps) {

    const exibirAcoes = props.clientDelete || props.clientSelect

    function renderHead() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { exibirAcoes ? <th className="p-4">Ações</th> : false}
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
                    {exibirAcoes ? renderAction(Client) : false}
                </tr>
            )

        })
    }

    function renderAction(Client: Client) {
        return (
            <td className="flex justify-center">

            {props.clientSelect ? (

                <button onClick={() => props.clientSelect?.(Client)} className="p-2 w-14 h-14 
                flex 
                justify-center 
                items-center
                rounded-full p-2 m-1
                hover:bg-purple-50
                ">{<IconEdit />}</button>

            ) : false}

            {props.clientDelete ? (

                <button onClick={() => props.clientDelete?.(Client)} className="p-2 w-14 h-14 
                flex 
                justify-center 
                items-center
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
                ">{<IconTrash />}</button>

            ) : false}

            </td>
        );
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