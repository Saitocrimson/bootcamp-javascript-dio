function idade(anos){
  return `Daqui a ${anos}, ${this.nome} tera ${
this.idade+anos
  } de vida`;
}
const pessoa={
  nome:'maria',
  idade:4000,
  
}
const pessoa2 = {
  nome: 'banaba',
  idade: 9,

}
const animal = {
  nome: 'cafe',
  idade: 1,
  raca:'rnd',

}

console.log(idade.call(pessoa,50));
console.log(idade.apply(animal,[7]))
