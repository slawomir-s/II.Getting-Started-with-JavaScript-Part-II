// create function
function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "nieprawidlowe dane"
    } else {
        var value = a * h / 2;
        return value;
    }    
}

console.log(getTriangleArea(10,6));
console.log(getTriangleArea(10,15));
console.log(getTriangleArea(2,8));
console.log(getTriangleArea(3,9));

// array 
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek', 'Kuba'],
    allNames = femaleNames.concat(maleNames);

function table(newName) {
    if (allNames.indexOf(newName) === -1) {
        var x = allNames.push(newName);
        console.log(allNames);
        return 'dodalem osobe'
    } else {        
        return 'taka osoba juz istnieje'
    }    
}

table("Zenek");
console.log(table("Mariusz"));

// strings
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops',
    textCharsAfter = text.replace('Velociraptor', dinosaur.toUpperCase());

console.log(textCharsAfter.substr(0,text.length/2));

// loop
function drawTree(height) {
    for (var i = 0; i < height; i++) {
        var star = "";
        for (var j = 0; j <= i; j++) {
            star += "*";
        }    
    console.log(star)
    }
}

drawTree(5);

// iterating after DOM elements
var withButtonItemsClass = document.getElementsByClassName('button'),
    x = withButtonItemsClass.length;

    for (var i = 0; i < x; i++) {
        console.log(withButtonItemsClass[i].innerText);
}

// manipulation DOM after click

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item ' + list.children.length;
    list.appendChild(element);
});