// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un gatto, che è caratterizzato da:
// nome, età, colore e sesso.
// Tramite la funzione forEach, stampare in pagina
// tutti i gattini, ciascuno con il proprio colore e il
// proprio nome.

// referenze
const cats = [
    {
       name: "Garfield",
       age: 3.8,
       color: "#F59E36",
       gender: "male"
    },
    {
        name: "Pilou",
        age: 2.9,
        color: "#E5B69A",
        gender: "female" 
     },
     {
        name: "Silvestro",
        age: 18.4,
        color: "#000000",
        gender: "male" 
     },
     {
        name: "Milady",
        age: 17.6,
        color: "#A1499F",
        gender: "female" 
     },
     {
        name: "Tom",
        age: 5.2,
        color: "#5C6B7E",
        gender: "male" 
     }
];
const container = document.getElementById("container");
const maleContainer = document.getElementById("male");
const femaleContainer = document.getElementById("female");
const containerNew = document.getElementById("container-new");
const pink = "#FFC0CB";
const blue = "#0000ff";

const newCats = cats.map(
    (element) => {

        // let ribbonColor = "";
        // if (element.gender == "male") {
        //     ribbonColor = blue;
        // } else {
        //     ribbonColor = pink;
        // }

        let ribbonColor = (element.gender == "male") ? blue : pink;

        const newCat = {
            ...element,
            ribbon: {
                color: ribbonColor,
                opacity: element.age * 5
            }
        };
        return newCat;
    }
);
console.log(newCats);

cats.forEach(
    (element) => {
        // console.log(element);
        container.innerHTML += `<div>
            <i class="fas fa-cat" style="color: ${element.color}"></i>
            <h2>${element.name}</h2>
        </div>`;
    }
);

/* <i class="fas fa-cat"></i> */

const maleCats = newCats.filter(
    (element) => {
        return element.gender == "male";
    }
);
maleCats.forEach(
    (element) => {
        // console.log(element);
        maleContainer.innerHTML += `<div>
            <i class="fas fa-cat" style="color: ${element.color}"></i>
            <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}%"></i>
            <h2>${element.name}</h2>
        </div>`;
    }
);
// console.log(maleCats);

const femaleCats = newCats.filter(
    (element) => {
        return element.gender == "female";
    }
);
femaleCats.forEach(
    (element) => {
        // console.log(element);
        femaleContainer.innerHTML += `<div>
            <i class="fas fa-cat" style="color: ${element.color}"></i>
            <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}%"></i>
            <h2>${element.name}</h2>
        </div>`;
    }
);
// console.log(femaleCats);

// milestone 2:
// dividere i gatti in due contenitori distinti in base
// al sesso e aggiungere a fianco di ogni gattino un
// fiocco colorato di rosa se femmina o di blu se
// maschio.
// Il colore del fiocco deve essere più tenue se il
// gatto è più giovane, più scuro se il gatto è più
// vecchio.

// milestone 3:
// creare un nuovo array con prima tutti i gattini
// femmina e poi tutti i gattini maschio, inserendo
// solamente nome e colore e colore e opacità del
// fiocco per ogni gatto.

// const orderedCats = [];

// for (var i = 0; i < femaleCats.length; i++) {
//     orderedCats.push(femaleCats[i]);
// }
// for (var i = 0; i < maleCats.length; i++) {
//     orderedCats.push(maleCats[i]);
// }

const orderedCats = [...femaleCats, ...maleCats];

// console.log(orderedCats);

const finalCats = orderedCats.map(
    (element) => {

        // const newElement = {
        //     name: element.name,
        //     color: element.color,
        //     ribbon: element.ribbon
        // };

        // destrutturazione
        // const { name, color, ribbon } = element;
        // const newElement = {
        //     name,
        //     color,
        //     ribbon
        // };

        // destrutturazione
        const { age, gender, ...newElement } = element;
        // console.log(age);
        // console.log(gender);
        // console.log(newElement);

        return newElement;
    }
);
console.log(finalCats);

finalCats.forEach(
    (element) => {
        const { name, color, ribbon } = element;

        containerNew.innerHTML += `<div>
            <i class="fas fa-cat" style="color: ${color}"></i>
            <i class="fas fa-ribbon" style="color: ${ribbon.color}; opacity: ${ribbon.opacity}%"></i>
            <h2>${name}</h2>
        </div>
        `;
    }
);