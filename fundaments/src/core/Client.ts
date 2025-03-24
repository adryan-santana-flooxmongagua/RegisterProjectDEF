export default class Client {
    private _id: string;
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number, id: string = "") {
        this._nome = nome;
        this._idade = idade;
        this._id = id;
    }

    static vazio() {
        return new Client('', 0);
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }
}
