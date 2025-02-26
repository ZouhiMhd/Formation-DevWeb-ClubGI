
//Ecriture
const g = 2
const une_variable_plus_longue = "Ma super chaîne

let h = 2
h = "Je suis une chaîne maintenant !"


//Les types de variables

//Les nombres
const a = 2
const b = 3.4123
const c = -509
const d = 1/3

const a = 10_000

//Les chaines de carateres
const a = "Salut les gens"
const b = 'Re-Salut les gens'
const c = `Re-Salut les gens`

const a = "Ceci n'est pas problématique"
const b = 'Ceci n\'est pas problématique'

const name = 'John'
const phrase = `Je m'appele ${name}`
const paragraph = `Je suis 
sur plusieurs
lignes !!`

//Les booléens
const vrai = true
const je_suis_faux = false

//Les tableaux
const eleves = ['Jean', 'Marc', 'Marion']
const demo = [true, 10, 'Marc']
eleves[0] // Jean
eleves[2] // Marion
demo[1] // 10
demo[18] // undefined

//Les objets
const eleve = {
    clef: 'valeur',
    nom: 'Jean',
    age: 18,
    notes: [10, 4, 18] 
 }

 //Typage faible 
 const a = '1' 
 const b = 1
 a + b = '11'
 // b est converti en chaîne de caractère implicitement
 a * b = 1 
 // a est converti en nombre de manière implicite 
 "Salut" * 3 // NaN, Not a number
 // Attention aux opérations qui n'ont pas de sens :)
 "43" > 1000 // false, 1000 est converti en chaîne implicitement et il compare l'ordre alphabétique

//Portée d'une variable
let a = 3
if (true) {
    let a = 5 // On crée une nouvelle variable pour le "scope" courant
    console.log(a) // 5
}
console.log(a) // 3

//Les boucles

//while
let i = 0 
while (i < 3) {
    console.log("Je compte " + i)
    i = i + 1 // peut aussi s'écrire i++
}

do {
    console.log("Je compte " + i)
    i = i + 1 
} while (i < 3)

while (i < 3) {
    console.log("Je compte " + i)
    if (i === 1) {
        break
    }
    i++
}

//for
for (let i = 0; i < 3; i++) {
    console.log("Je compte " + i)
}
const students = ['Jean', 'Marc', 'Marie']
for (let i = 0; i < students.length; i++) {
    console.log(eleve[i]) // affichera alternativement : Jean, Marc, Marie
}
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property) // affichera alternativement : a, b, c
}

for (const i in students ) {
    console.log(i) // affichera alternativement : 0, 1, 2
}

for (const eleve of students) {
    console.log(eleve) // affichera alternativement : Jean, Marc, Marie
}

//Les fonctions

//De manière générale
function saluer (nom) {
    return "Salut " + nom
}
// On appelle ensuite notre fonction avec 
saluer('Marc') // Salut Marc

//Fonction stockée dans une variable
const saluer = function (nom) {
    return "Salut " + nom
}

saluer() //a une valeur undefined

//Préciser la valeur par défaut 
const demo2 = function (nom = 'John') {
    return "Salut " + nom
}
demo2() // nom aura la valeur "John" par défaut

//La fonction This

//Cas 1
function maFonction () {
    console.log(this)
}

maFonction.call(3) // this aura la valeur 3
maFonction.call(4) // thiis aura la valeur 4
//Cas 2 
const e = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };
  
console.log(e.func()) // '42'


//Fonctions fl
const hello = (name) => {
    console.log(`Bonjour ${name}`)
}

//Pas de valeur this 
const hello1 = () => {
    console.log(this)
}
hello() // this sera l'objet global (window dans le cas du navigateur)
hello.call(3) // this sera toujours l'objet global

//Sans accolades
const double2 = (n) => {
    return 2 * n
}
// On peut simplifier en retournant directement en retirant les accolades
const double3 = (n) => 2 * n
// Et on peut retirer les parenthèses
const double4 = n => 2 * n