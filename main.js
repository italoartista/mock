// 
let produtos = [
  {
    nome: "Smartphone",
    preco: 3200.0,
    descricao: "Um smartphone top de linha | 500gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "150g",
    },
    tags: ["tecnologia", "celular", "smartphone"],
  },
  {
    nome: "Notebook",
    preco: 4200.0,
    descricao: "Um notebook top de linha | 1tb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "1.5kg",
    },
    tags: ["tecnologia", "notebook"],
  },
  {
    nome: "Tablet",
    preco: 1200.0,
    descricao: "Um tablet top de linha | 250gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "500g",
    },
    tags: ["tecnologia", "tablet"],
  },
  {
    nome: "Smartwatch",
    preco: 800.0,
    descricao: "Um smartwatch top de linha | 32gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "50g",
    },
    tags: ["tecnologia", "smartwatch"],
  },
  {
    nome: "SmartTV",
    preco: 5200.0,
    descricao: "Uma smarttv top de linha | 4k",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "20kg",
    },
    tags: ["tecnologia", "smarttv"],
  },
    {
    nome: "Smartphone",
    preco: 3200.0,
    descricao: "Um smartphone top de linha | 500gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "150g",
    },
    tags: ["tecnologia", "celular", "smartphone"],
    },
    {
    nome: "Notebook",
    preco: 4200.0,
    descricao: "Um notebook top de linha | 1tb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "1.5kg",
    },
    tags: ["tecnologia", "notebook"],
    },
    {
    nome: "Tablet",
    preco: 1200.0,
    descricao: "Um tablet top de linha | 250gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "500g",
    },
    tags: ["tecnologia", "tablet"],
    },
    {
    nome: "Smartwatch",
    preco: 800.0,
    descricao: "Um smartwatch top de linha | 32gb",
    imagem: "https://via.placeholder.com/150",
    detalhes: {
      fabricante: "Fabricante",
      modelo: "Modelo",
      peso: "50g",
    },
    tags: ["tecnologia", "smartwatch"],
    }
];



// function componente(produto) {
//     const { nome, preco, descricao, detalhes: { fabricante, modelo, peso } } = produto;

//     return `
//     <div class="produto">
//         <h2>${nome}</h2>
//         <p>${preco}</p>
//         <p>${descricao}</p>
//         <p>${fabricante}</p>
//         <p>${modelo}</p>
//         <p>${peso}</p>
//     </div>
//     `
// }

produtos.forEach(produto => {
    const { nome, preco, descricao, imagem, detalhes: { fabricante, modelo, peso } } = produto;
    let template = `
    <div class="produto">
        <img src="${imagem}" alt="${nome}">
        <h2>${nome}</h2>
        <p>R$ ${preco}</p>
        <p>${descricao}</p>
        <p>${fabricante}</p>
        <p>${modelo}</p>
        <p>${peso}</p>
        <button>Comprar</button>
    </div>
    ` 
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = template;
    document.getElementById("container").appendChild(card);
}); 




// let produto = {
//   nome: "Smartphone",
//   preco: 3200.0,
//   descricao: "Um smartphone top de linha | 500gb",
//   detalhes: {
//     fabricante: "Fabricante",
//     modelo: "Modelo",
//     peso: "150g",
//   },
// };

// const {
//   detalhes: { fabricante, modelo, peso },
// } = produto;

// console.log(fabricante, modelo, peso);
// ES5
// let nome = produto.nome;
// let preco = produto.preco;
// let descricao = produto.descricao;
// let fabricante = produto.detalhes.fabricante;
// let modelo = produto.detalhes.modelo;
// let peso = produto.detalhes.peso;

// ES6

//let { nome, preco, descricao, detalhes: { fabricante, modelo, peso } } = produto;

// console.log(nome, preco, descricao, fabricante, modelo, peso)
