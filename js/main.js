function cliqueBotao() {
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigada por clicar</b>";
  //console.log(document.getElementById("agradecimento"));

  //alert("Obrigada por clicar");
}

function redirecionar() {
  window.open("https://www.udemy.com/");
  // window.location.href = "https://www.udemy.com/";
}

function trocar(elemento) {
  elemento.innerHTML = "<i> Fique em casa! </i>";
  //document.getElementById("mousemove").innerHTML = "<i> Fique em casa! </i>";
  // alert("trocar texto");
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui";
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("página carregada");
}

function change(elemento) {
  console.log(elemento.value);
}

/*function soma(n1, n2) {
  return n1 + n2;
}

function setReplace(frase, nome, novoNome) {
  return frase.replace(nome, novoNome);
}

alert(soma(5, 10));
alert(setReplace("Eu gosto de surfar", "surfar", "fotografar"));

let validar = 0;

function validaIdade(idade) {
  //let validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

let idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));*/

/*let dia = new Date();
alert(dia.getMonth() + 1);
alert(dia.getFullYear());*/

/*let count;

for (count = 0; count <= 5; count++) {
  console.log(count);
}
let count = 2;
while (count <= 5) {
  console.log(count);
  count++;
}
*/

/*let idade = prompt("Qual a sua idade?");

if (idade >= 18) {
  alert("Você é maior de idade!");
} else {
  alert("Você é menor de idade!");
} */

/*let nome = "Pri";
let hobby = "fotografar";
let n1 = 26;
let n2 = 10;
let frase = "Fique em casa e lave as mãos!";

let frutas = [
  { nome: "maçã", cor: "vermelha" },
  { nome: "banana", cor: "verde" },
  { nome: "morango", cor: "vermelha" }
];
console.log(frutas);

console.log(frutas[1].nome);*/

/*let fruta = { nome: "banana", cor: "amarela" };
console.log(fruta.cor);*/

// frutas.push("manga");

// frutas.pop();
// console.log(frutas);

// console.log(frutas.toString());
// console.log(frutas.join("|"));

//alert(nome + " gosta de " + hobby);
//alert(idade + idade2);
// console.log(nome);
// console.log(n1 - n2);
// console.log(frase.toUpperCase());

//console.log(frase.replace("Fique em", "Não saia de"));
