// const apresentacao = ["Olá", "eu", "sou", "a", "Sarah"];
// const [saudacao, pronome] = apresentacao;
// console.log(saudacao); // "Olá"
// console.log(pronome); // "eu"



// const [, , , nome, ] = ["Olá", "eu", "sou", "a", "Sarah"];
// console.log(nome); // "Sarah"

const [primeiro, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // 1
console.log(resto); // [2, 3, 4, 5]

//const [a, b, c, d, e, f] = [1, 2, 3, 4, 5];

let a = 'oi'
let b = 'olá'

console.log(a, b)

let c = a
a = b
b = c

console.log([b,a] = [a,b])

console.log(a, b)
