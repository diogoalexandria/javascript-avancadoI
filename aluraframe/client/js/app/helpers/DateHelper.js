class DateHelper {

    dateToText(date) {
        return date.getDate() + '/' +
               (date.getMonth() + 1) + '/' +
               date.getFullYear();
    }
    
    textToDate(text) {
        console.log("Dentro do metodo textToDate:");
        console.log(text);
        return text.split('-')
        .map((item, index) => {
            if(index == 1){
                return item - 1;
            }
            return item;
        });
        //let dateParts = text.split('-')
        //return new Date(dateParts[0],dateParts[1],dateParts[2]);
    }
}