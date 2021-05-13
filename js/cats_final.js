// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un gatto, che è caratterizzato da:
// nome, età, colore e sesso.
// Tramite la funzione forEach, stampare in pagina
// tutti i gattini, ciascuno con il proprio colore e il
// proprio nome.

// var elvisLives = 5 > 4 ? "Yep" : "Nope";
// console.log(elvisLives);

const cats = [
  {
    name: "Garfield",
    age: 3.5,
    color: "#F59E36",
    gender: "male"
  },
  {
    name: "Pilou",
    age: 2.8,
    color: "#FED2C7",
    gender: "female"
  },
  {
    name: "Silvestro",
    age: 19,
    color: "#000000",
    gender: "male"
  },
  {
    name: "Milady",
    age: 17.6,
    color: "#B44EB0",
    gender: "female"
  },
  {
    name: "Tom",
    age: 5.1,
    color: "#919598",
    gender: "male"
  },
];
// <i class="fas fa-cat"></i>
// console.log(cats);

const container = document.getElementById('container');

cats.forEach(
  (element) => {
    container.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <h2>${element.name}</h2>
    </div>
    `;
  }
);

// milestone 2:
// dividere i gatti in due contenitori distinti in base
// al sesso e aggiungere a fianco di ogni gattino un
// fiocco colorato di rosa se femmina o di blu se
// maschio.
// Il colore del fiocco deve essere più tenue se il
// gatto è più giovane, più scuro se il gatto è più
// vecchio.

const pinkColorCode = "#FFC0CB";
const blueColorCode = "#0000FF";

const newCats = cats.map(
  (element) => {
    // console.log(element);
    // const name = element.name;
    // const age = element.age;
    // const color = element.color;
    // const gender = element.gender;
    const opacity = element.age * 5 / 100;

    // let ribbonColor;
    // if(element.gender == "male") {
    //   ribbonColor = blue;
    // } else {
    //   ribbonColor = pink;
    // }

    const newCat = {
      ...element,
      ribbon: {
        color: element.gender == "male" ? blueColorCode : pinkColorCode,
        opacity
      }
    };

    return newCat;
    // console.log(newCat);
  }
);

// console.log(newCats);

const femaleCats = newCats.filter(
  (element) => {
    // return CONDIZIONE
    return element.gender == "female";
  }
);
// console.log(femaleCats);

const maleCats = newCats.filter(
  (element) => {
    // return CONDIZIONE
    return element.gender == "male";
  }
);
// console.log(maleCats);

const maleContainer = document.getElementById('male');
const femaleContainer = document.getElementById('female');

femaleCats.forEach(
  (element) => {
    femaleContainer.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i>
      <h2>${element.name}</h2>
    </div>
    `;
  }
);

maleCats.forEach(
  (element) => {
    maleContainer.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i>
      <h2>${element.name}</h2>
    </div>
    `;
  }
);

// milestone 3:
// creare un nuovo array con prima tutti i gattini
// femmina e poi tutti i gattini maschio, inserendo
// solamente nome e colore e colore e opacità del
// fiocco per ogni gatto.

const orderedCats = [...femaleCats, ...maleCats];
// console.log(orderedCats);

const containerNew = document.getElementById('container-new');
orderedCats.forEach(
  (item) => {
    containerNew.innerHTML += `
    <div>
      <i class="fas fa-cat" style="color:${item.color}"></i>
      <i class="fas fa-ribbon" style="color: ${item.ribbon.color}; opacity: ${item.ribbon.opacity}"></i>
      <h2>${item.name}</h2>
    </div>
    `;
  }
);

const targetCats = orderedCats.map(
  (element) => {
    // const name = element.name;
    // const color = element.color;
    // const ribbon = element.ribbon;
    const {name, color, ribbon} = element;
    return {
      name,
      color,
      ribbon
    }
  }
);

console.log(targetCats);
