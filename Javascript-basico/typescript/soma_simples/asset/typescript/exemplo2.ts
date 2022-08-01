let palavra: any;
palavra = "string";
palavra = 1;
palavra=true;

let palavra_um: string ="teste";
palavra_um = palavra;

let palavra_dois: string ="pratico";
palavra_dois = palavra;

function unir(frase1: string, frase2:string){
    console.log(frase1+frase2);
}

unir(palavra_um, palavra_dois);
unir("oi", " como vai?");