import { useState } from "react";
import formSubmit from "../services/FormSubmit";

function DivButtons() {

    const [loading, setLoading] = useState(false)

    function validateForm() {
        const form = document.getElementById("afdForm");
        const isValid = form.reportValidity(); // Verifica a validade do formulário
        
        // Seleciona o elemento da mensagem de erro, ou cria um se não existir
        let errorMessage = document.getElementById("errorMessage");
        if (!errorMessage) {
            errorMessage = document.createElement("p");
            errorMessage.id = "errorMessage";
            errorMessage.style.color = "red";
            form.appendChild(errorMessage);
        }
    
        // Exibe a mensagem se o formulário não for válido
        if (!isValid) {
            errorMessage.textContent = "Por favor, preencha todos os campos obrigatórios antes de iniciar o download.";
        } else {
            errorMessage.textContent = ""; // Limpa a mensagem de erro se o formulário estiver válido
        }
    
        return isValid;
    }

    function defaultDownloadFunction(event){
        if (!validateForm()) {
            return;
        }

        const form = document.getElementById("afdForm");
        form.action = "https://afd-generator.onrender.com/download671";

        handleClick(event);
    }
    
    function newDownloadFunction(event){
        if (!validateForm()) {
            return;
        }

        const form = document.getElementById("afdForm");
        form.action = "https://afd-generator.onrender.com/download1510";

        handleClick(event);
    }

    function handleClick(event){
        setLoading(true)
        formSubmit(event);


        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }

    return (
        <div className="divbuttons">
            <button
                type="button"
                id="submitButton"
                onClick={defaultDownloadFunction}
                style={{display: loading? 'none' : 'block'}}
            >Download AFD Port. 671/21
            </button>

            <button
                type="button"
                id="newDownloadButton"
                onClick={newDownloadFunction}
                style={{display: loading? 'none' : 'block'}}
            >Download AFD Port. 1510
            </button>
            
            <button
                type="button"
                id="loading"
                disabled
                style={{
                    display: loading? 'block' : 'none',
                    cursor: 'no-drop',
                    width: '100%'
                }}
            >Aguarde o download
        </button>
        </div>
    )
}

export default DivButtons