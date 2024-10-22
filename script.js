function verificarIdade(){ 

const idade = document.getElementById
('idade').value;
const resultado = document.getElementById('resultado');

if(idade >= 18){
    resultado.textContent =  "voce e maior de idade.";
    }
    if(idade <= 17){
        resultado.textContent =  "volte ano que vem";
        }

}