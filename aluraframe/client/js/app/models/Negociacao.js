//O nome do arquivo é em letra para indicar que é uma classe dentro de models
class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime);//programação defensiva.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get data(){
        return  new Date(this._data.getTime());//Programação defensiva.Se tentarem acessar o atributos do bjto vão apenas acessar a cópia
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}