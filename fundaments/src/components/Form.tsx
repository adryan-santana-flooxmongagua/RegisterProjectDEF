import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    cliente: Client
    clientChange?: (cliente: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entry
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entry 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entry
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2"
                    onClick={() => props.clientChange?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}