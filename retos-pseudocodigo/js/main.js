
function showResponse(word, elementId) {
    const responseDiv = document.getElementById(elementId);
    responseDiv.innerText = word;
}

/* EJERCICIO 1
Diseñar un programa que sume dos números leídos por pantalla y muestre el resultado por terminal */

function getTwoNumbersAddition() {

    let num1 = parseInt(prompt("write here the first number"));
    console.log(num1);
    let num2 = parseInt(prompt("write here the second number"));
    console.log(num2);
    const add = num1 + num2;
    showResponse(add, 'responseTwoNumbersAddition');
    console.log(add);
}
document.getElementById('onclick').addEventListener('click', function () {
    getTwoNumbersAddition();
});

/* EJERCICIO 2
Diseñar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números*/

function getGreatestNumber() {
    let num1 = parseInt(prompt("write here the first number"));
    console.log(num1);
    let num2 = parseInt(prompt("write here the second number"));
    console.log(num2);
    if (num1 > num2) {
        showResponse(`${num1} es mayor a ${num2}`, 'responseGreatestNumber');
        console.log(num1);
    } if (num2 > num1) {
        showResponse(`${num2} es mayor a ${num1}`, 'responseGreatestNumber');
        console.log(num2);
    }
    if (num1 === num2) {
        showResponse(`${num1} es igual a ${num2}`, 'responseGreatestNumber');
        console.log(num1, num2);
    }
}
document.getElementById('onclick').addEventListener('click', function () {
    getGreatestNumber();
});

/* EJERCICIO 3
Diseñar un programa que almacene 3 números en 3 variables A, B y C. El diagrama debe decidir cuál es el mayor y cuál es el menor*/

function getThreeVariables() {
    const var1 = {
        name: 'varA',
        number: parseInt(prompt("write here the first variable")),
    }

    const var2 = {
        name: 'varB',
        number: parseInt(prompt("write here the second variable"))
    }

    const var3 = {
        name: 'varC',
        number: parseInt(prompt("write here the third variable"))
    }
    console.log(var1);
    console.log(var2);
    console.log(var3);

    let variableList = [var1, var2, var3];
    mayorNumber = var1.number;
    minorNumber = var1.number;

    // obtener el mayor y el menor
    for (let index = 1; index < variableList.length; index++) {
        if (variableList[index].number > mayorNumber) {
            mayorNumber = variableList[index].number;
        }
        if (variableList[index].number < minorNumber) {
            minorNumber = variableList[index].number;
        }
    }

    const variableMayorList = variableList.filter(variable => variable.number === mayorNumber);
    let variableMayorNames = variableMayorList.map(item => item.name);
    const variableMinorList = variableList.filter(variable => variable.number === minorNumber);
    const variableMinorNames = variableMinorList.map(item => item.name);

    showResponse(`El mayor es: ${variableMayorNames} y su edad es ${mayorNumber}; el menor es: ${variableMinorNames} y su edad es ${minorNumber}`, 'responseThreeVariables');
}

document.getElementById('onclick').addEventListener('click', function () {
    getThreeVariables();
})

/*let varA = parseInt(prompt("write here the first number"));
console.log(varA);
let varB = parseInt(prompt("write here the second number"));
console.log(varB);
let varC = parseInt(prompt("write here the second number"));
console.log(varC);

//Para confirmar si son mayores con valores diferentes entre ellas
if (varA > varB && varA > varC) {
    showResponse(`La variable A = ${varA} es mayor que las variables B = ${varB} y C = ${varC}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
if (varB > varA && varB > varC) {
    showResponse(`La variable B = ${varB} es mayor que las variables A = ${varA} y C = ${varC}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
if (varC > varA && varC > varB) {
    showResponse(`La variable C = ${varC} es mayor que las variables A = ${varA} y B = ${varB}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
//Para confirmar si son menores con valores diferentes entre ellas
if (varA < varB && varA < varC) {
    showResponse(`La variable A = ${varA} es menor que las variables B = ${varB} y C = ${varC}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
if (varB < varA && varB < varC) {
    showResponse(`La variable B = ${varB} es menor que las variables A = ${varA} y C = ${varC}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
if (varC < varA && varC < varB) {
    showResponse(`La variable C = ${varC} es menor que las variables A = ${varA} y B = ${varB}`, 'responseThreeVariables');
    console.log(varA, varB, varC);
}
// /Para confirmar si son mayores o menores con valores iguales entre al menos una de ellas
if (varA === varB === varC) {
    showResponse(`Todas las variables son iguales, A = ${varA}, B = ${varB} y C = ${varC}`, 'responseThreeVariables');
}
if (varA === varB && varA !== varC) {
    if (varA > varC) {
        showResponse(`Las variables A = ${varA} y B = ${varB} son iguales y mayores que C = ${varC}`, 'responseThreeVariables');
    } if (varA < varC) {
        showResponse(`Las variables A = ${varA} y B = ${varB} son iguales y menores que C = ${varC}`, 'responseThreeVariables');
    }
}
if (varA === varC && varA !== varB) {
    if (varA > varB) {
        showResponse(`Las variables A = ${varA} y C = ${varC} son iguales y mayores que B = ${varB}`, 'responseThreeVariables');
    } if (varA < varB) {
        showResponse(`Las variables A = ${varA} y C = ${varC} son iguales y menores que B = ${varB}`, 'responseThreeVariables');
    }
}
if (varB === varC && varB !== varA) {
    if (varB > varA) {
        showResponse(`Las variables B = ${varB} y C = ${varC} son iguales y mayores que A = ${varA}`, 'responseThreeVariables');
    } if (varB < varA) {
        showResponse(`Las variables B = ${varB} y C = ${varC} son iguales y menores que A = ${varA}`, 'responseThreeVariables');
    }

}*/


/*EJERCICIO 4
Diseñar un programa que nos calcule la hipotenusa de un triángulo rectángulo, conocidos sus dos catetos*/

function getHipotenusa() {
    let cateto1 = parseInt(prompt("Escribe el valor del cateto 1"));
    console.log(cateto1);
    let cateto2 = parseInt(prompt("Escribe el valor del cateto 2"));
    console.log(cateto2);
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    const hipotenusaRounded = parseFloat(hipotenusa.toFixed(2));
    showResponse(`La hipotenusa del triangulo rectangulo es = ${hipotenusaRounded}`, 'responseHipotenusa');
    console.log(hipotenusaRounded);
}
document.getElementById('onclick').addEventListener('click', function () {
    getHipotenusa();
})

/*EJERCICIO 5
Diseñar un programa que sume 10 números leídos por teclado.*/

function get10Numbers() {
    let i = 0;
    let addition = 0;
    while (i < 10) {
        let number = parseInt(prompt("Escribe un numero"));
        if (!isNaN(number)) {
            console.log(number);
            addition += number;
            console.log(addition);
            i++
            showResponse(`La suma es = ${addition}`, 'response10Numbers');
        }
        if (i === 10) {
            showResponse(`La suma de los 10 numeros es = ${addition}`, 'response10Numbers');
            alert(`Ha llegado al limite de numeros`)
        }
    }
}
document.getElementById('onclick').addEventListener('click', function () {
    get10Numbers();
})

