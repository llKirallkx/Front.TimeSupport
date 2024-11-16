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

export default validateForm