let lista = document.getElementById("lista");
let word;
let buttonAsignar = document.getElementById("asignar");
let buttonEliminar = document.getElementById("eliminar");
// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

function stringSingle(word){
    return word;
}

function stringArray(myArray){
    let array2 = [''];
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i].length >= stringSingle(word).length){
            array2.push(myArray[i]);
        }
    }
    return array2.filter(Boolean);
}

buttonAsignar.addEventListener("click", e=>{
    word = document.getElementById("word").value;
    let array = stringArray(myArray);
    for(let i = 0; i < array.length; i++){
        addValues(array[i]);
    }
});

buttonEliminar.addEventListener("click", e=>{
    document.getElementById("word").value = "";
    lista.removeChild;
});

function addValues(value){    
    let optionA = document.createElement("p");
    optionA.innerHTML = value;
    lista.append(optionA);
}