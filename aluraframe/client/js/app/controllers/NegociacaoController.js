class NegociacaoController {
    constructor() {
        
        let $ = document.querySelector.bind(document); //bind(document) faz com que o método querySelector pertecente ao document continue sendo apontado para o document mesmo sendo atribuida ao $.
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        
        let data = new Date(...this._inputData.value //spread operator (...) - Vai passar os elementos do array como parametro do construtor.
                                   .split('-')
                                   .map((item, indice) => { //Executa a  arrow função para cada item do array. 
                                    if(indice == 1){
                                        return item - 1;
                                    }
                                    return item;
                                   })

                                   //.map((item, indice) => item - indice % 2) // Quando a arrow function tem so uma linha de instrução pode ser executada assim.

                                   //.map(function(item, indice){ 
                                   //     if(indice == 1){
                                   //         return item - 1;
                                   //     }
                                   //     return item;
                                        //return item - indice % 2; //metodo alternativo ao if q eu não gostei.
                                   //})
                            );  
        //let data = new Date(this._inputData.value.split('-')); //Divide em um array a partir do divisor '-' e cria um objeto date q aceita arrays.
        //let data = new Date(this._inputData.value.replace(/-/, ',')); //Troca o hífen por virgulas pq o objeto date consegue criar uma data separa por vírgula.
        console.log(data)
        console.log(typeof(data));
        console.log(this._inputData.value);
        console.log(typeof(this._inputData.value));
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
            
    }
}