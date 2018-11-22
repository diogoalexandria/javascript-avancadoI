class NegotiationController {
    constructor() {
        
        let $ = document.querySelector.bind(document); //bind(document) faz com que o método querySelector pertecente ao document continue sendo apontado para o document mesmo sendo atribuida ao $.
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
    }

    add(event){
        event.preventDefault();       
        // Antes da classe DateHelper
        // let data = new Date(...this._inputData.value //spread operator (...) - Vai passar os elementos do array como parametro do construtor.
        //                            .split('-')
        //                            .map((item, indice) => { //Executa a  arrow função para cada item do array. 
        //                             if(indice == 1){
        //                                 return item - 1;
        //                             }
        //                             return item;
        //                            })

                                   //.map((item, indice) => item - indice % 2) // Quando a arrow function tem so uma linha de instrução pode ser executada assim.

                                   //.map(function(item, indice){ 
                                   //     if(indice == 1){
                                   //         return item - 1;
                                   //     }
                                   //     return item;
                                        //return item - indice % 2; //metodo alternativo ao if q eu não gostei.
                                   //})
        //                    );  
        //let data = new Date(this._inputData.value.split('-')); //Divide em um array a partir do divisor '-' e cria um objeto date q aceita arrays.
        //let data = new Date(this._inputData.value.replace(/-/, ',')); //Troca o hífen por virgulas pq o objeto date consegue criar uma data separa por vírgula.

        //Depois da classe DateHelper.
        // let dateHelper = new DateHelper();
        // let date = dateHelper.textToDate(this._inputDate.value);
        
        // console.log("Valor do atributo data: " + this._inputDate.value);
        // console.log("Tipo do atributo data: " + typeof(this._inputDate.value));
        // console.log("Valor do atributo quantidade: " + this._inputQuantity.value);
        // console.log("Valor do atributo valor: " + this._inputValue.value);
        // console.log("Variavel date: " + date);
        // console.log(date);
        // console.log("Tipo da variavel date: " + typeof(date));        
        
        let negotiation = new Negotiation(
            // date,
            this._inputQuantity.value,
            this._inputValue.value
        );
        console.log(date);
        console.log(negotiation.date);
     
        console.log(negotiation);
        console.log(dateHelper.dateToText(negotiation.date));
    }
}