function verificarIdade(){ 

    const dataNascimento = document.getElementById
    ('dataNascimento').value;
    const nascimento = new Date
    (dataNascimento);

    const hoje = new Date();
    const idade = hoje.getFullYear -
    nascimento.getFullYear();

    const mes = hoje.getMonth()
     - nascimento.getMonth();
    
    if(mes < 0 || (mes === 0 && hoje.getDate() <
nascimento.getDate())){
     idade--;
}
    const resultado = document.getElementById
    ('resultado');
    
    if(idade < 18){
        resultado.textContent =  "voce e menor de idade";

        } else if (idade ===18) {  
           resultado.textContent =  "voce tem 18 anos";
        }else if (idade > 18 && idade <60) {  
            resultado.textContent =  "voce e maipr de idade e nao tem 60 anos ainda";
    }
    else {  
        resultado.textContent =  "voce tem 60 anos ou mais";
    }
}