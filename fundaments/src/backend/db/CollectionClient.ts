import firebase from "../config";
import Client from "../../core/Client";
import ClientRepo from "../../core/ClientRepo";

export default class ColecaoCliente implements ClientRepo {

    #conversor = {
        toFirestore(cliente: Client) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const dados = snapshot.data(options)
            return new Client(dados.nome, dados.idade, snapshot.id)
        }
    }
    
   async salvar(cliente: Client): Promise<Client> {
    if (cliente?.id) {
        await this.colecao().doc(cliente.id).set(cliente);
        return cliente;
    } else {
        const docRef = await this.colecao().add(cliente);
        const doc = await docRef.get();
        const dados = doc.data();
        
        return new Client(cliente.nome,cliente.idade, doc.id); // Retorna uma instância de Client
    }
}

    async excluir(cliente: Client): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Client[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}