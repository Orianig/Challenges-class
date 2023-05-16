/*function showResponse(word, elementId) {
    const responseDiv = document.getElementById(elementId);
    responseDiv.innerText = word;
}*/

//  With this i call all my containers (inside of square), my containers become an html collection (5 elements)
let containers = document.getElementsByClassName("container");
console.log(containers);// i can see the five containers in a html collection

//I change the html collection and now is an array
let arrayContainers = Array.from(containers);
console.log(arrayContainers); // i can have interactions now

//  I need to identify which elements are even and which are odd
arrayContainers.map((elementInArray, index) => {
    elementInArray.addEventListener("click", () => {
        console.log(index);
        console.log(elementInArray);
        if (index % 2 === 0) {
            elementInArray.classList.toggle("black");
            toggleText(elementInArray, "Soy de color negro");
            //showResponse('Soy de color negro', 'responseContainer');

        } else {
            elementInArray.classList.toggle("white");
            toggleText(elementInArray, "Soy de color blanco");
            // showResponse('Soy de color blanco', 'responseContainer');

        }
    });
});

const toggleText = (element, text) => {
    const isActive = element.classList.contains("white") || element.classList.contains("black");
    console.log(isActive);
    if (isActive) {
        element.innerHTML = `<p class='square-text'>${text}</p>`;
    } else {
        element.innerHTML = '';
    }
}


