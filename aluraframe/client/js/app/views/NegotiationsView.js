class NegotiationsViews extends View {

    template(negotiationsList) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead> 

                <tbody>
                    ${console.log(negotiationsList)}
                    ${negotiationsList.negotiations.map(element => //Vai na lista de negociações e chama o método get negociações e em cada elemento da lista de negociações monta a tr.
                         `
                            <tr>
                                <td>${DateHelper.dateToText(element.date)}</td>
                                <td>${element.quantity}</td>
                                <td>${element.value}</td>
                                <td>${element.volume}</td>
                            </tr>
                        `
                        ).join('') //.join uni o array de de strins em uma única string.
                    } 
                    </tbody> 

                    <tfoot>
                        <td colspan="3"></td>
                        <td>
                            ${negotiationsList.negotiations.reduce((total, element) => total += element.volume, 0.0) // O reduce recebe uma variável que acumula o total a ser retornado e a cada elemento ele executa a arrow function, deve ser passado também o valor inicial das interações.

                            //negotiationsList.negotiations.reduce(function(total, element){
                            //    return total += element.volume;
                            //}, 0.0)

                            //(function() {
                            //    let total = 0;
                            //    negotiationsList.negotiations.forEach(element => {
                            //        total += element.volume;
                            //        console.log(total);
                            //        return total;     
                            //    });
                            //})() //iife - immediately invoked function expression -> Declara e já chama a função
                                 //O $ estára recebendo apenas o valor retornado da função não a função em si, javascript permite passar a função a uma variável!
                        }</td>
                    </tfoot>
            </table>
        `
    }   
}


