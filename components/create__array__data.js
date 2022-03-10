"use strict"

export const newArrayData = (data) => {
    /* a const newArrayData deixa um meio termo, se não tiver nenhum valor salvo no 
    local storage chamado tarefas serão atribuido os valores de tarefasAtualizadas,
    e quando tiver algo será criado um novo array  */
    const arrayData = JSON.parse(localStorage.getItem('monthYear')) || [] 

    const dataYm = data
    
    

    const dataUpdate = [...arrayData, dataYm] /* isso adiciona o conteudo de
     dados dentro do array mesAno */ 
    const filterData = [ ...new Set( dataUpdate ) ];

    localStorage.setItem('monthYear', JSON.stringify(filterData))
}