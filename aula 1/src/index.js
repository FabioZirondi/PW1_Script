function CalculaH(ca, co){
    return Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2));
}
function CalculaCa(co, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2));
}
function CalculaCo(ca, h){
    return Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2));
}

function CalculaPitagoras(h, ca, co){

if(h == 0 ){
    return CalculaH(ca, co);
}else if(ca == 0){
    return CalculaCa(co, h);
}else{
    return CalculaCo(ca,h);
    }
}

function recebePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log("Resultado: "+CalculaPitagoras(h, ca, co));
    document.getElementById("resposta").innerHTML=CalculaPitagoras(h, ca, co);
}
/*
console.log("Teste 1: "+CalculaPitagoras(0,21,20));
console.log("Teste 2: "+CalculaPitagoras(13,5,0));
console.log("Teste 3: "+CalculaPitagoras(10,0,6));
*/
