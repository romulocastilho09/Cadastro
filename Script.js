let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");

document.getElementById('botao').onclick = () =>{
    if(nome.value.trim() == "" || email.value.trim() == "" ||(senha.value.trim() == "")){
        alert("Preencha o campo nome")
        return
    }
   
    if(!email.value.includes("@")){
           alert("Insira um email valido")
        return
    }

    if(senha.value.length < 8 ){
         alert("A senha deve conter pelo menos 8 caracteres")
         document.getElementById("regraTamanho").innerText = "🔴 Pelo menos 8 caracteres"
        return
    }else{
         document.getElementById("regraTamanho").innerText = "🟢 Pelo menos 8 caracteres"
    }

    let temMaiuscula = false;
    for (let i = 0; i < senha.value.length; i++) {
        let caracter = senha.value[i];
        if (caracter >= "A" && caracter <= "Z") {
            temMaiuscula = true;
            break;
        }
    }
    
    if(!temMaiuscula) {
        document.getElementById("regraMaiuscula").innerText = "🔴 Pelo menos 1 letra maiuscula"
    }else{
        document.getElementById("regraMaiuscula").innerText = "🟢 Pelo menos 1 letra maiuscula"
    }
}
