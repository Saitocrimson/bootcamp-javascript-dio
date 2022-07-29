class contaB{
  constructor(agencia,numero,tipo){
    this.agencia=agencia;
    this.numero=numero;
    this.tipo=tipo;
    this.saldo1=0;
    
  }


get saldo(){
  return this.saldo1;
}
set saldo(valor){
  this.saldo1=valor;
}
sacar(valor){
  if(valor>this.saldo1){
    return "operacao invalida";
  }
  else{this.saldo1 = this.saldo1 - valor;
    return this.saldo1;} 
}
depositar(valor) {
    this.saldo1=this.saldo1+ valor;
    return this.saldo1;
  
}
}

class contaC extends contaB{
  constructor(agencia,numero, crediton){
    super(agencia,numero);
    this.tipo='conta corrente';
    this.crediton=crediton;
    
  }
  get credito(){
    return this.crediton;
  }
  set credito(valor){
    this.crediton=valor;
  }
}

class contaP extends contaB{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'Poupanca';
  }
}

class contaU extends contaB{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'conta Universitaria';
  }
  sacar(valor) {
    if (valor <500) {
      this.saldo1 = this.saldo1 -valor;
      return this.saldo1;
    }
    else return "operacao invalida";
  }
}

