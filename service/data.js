"use strict"
export const orderDates = (date) => {
    // sort é um metodo para ordenar elementos num array
    date.sort((a, b) => {
        // função de parametro de ordenação faz uma comparação entre a data anterior e atual
        // aqui é feita uma formatação para o valor padrão de data, e assim fazer uma subtração
        const firstDate = dayjs(a.dateFormat, 'DD/MM/YYYY').format('YYYYMMDD');
        const secondDate = dayjs(b.dateFormat, 'DD/MM/YYYY').format('YYYYMMDD');
        return firstDate - secondDate;

        /* Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a. A função abaixo irá ordenar o array em ordem crescente:
 
         function compararNumeros(a, b) {
         return a - b;
         https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
         } */
    })
}