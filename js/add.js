import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input)=>{
        valida(input.target)

        const nome = document.querySelector("#formName");
        const mail = document.querySelector("#formEmail");
        const tema = document.querySelector("#formAsunto");


        const txt = document.querySelector("#mensagem");
        txt.addEventListener ("blur", function() {
            const text = txt;
            console.log(text.value)  
        
            if (nome.validity.valid && mail.validity.valid && (tema.validity.valid && txt.value != "")){         
                document.querySelector (".btn").classList.add("gris")
                document.querySelector (".btn").removeAttribute ("disabled")
            }else{
                document.querySelector (".btn").removeAttribute ("disabled")
                
            }

        });
        
    });

});




