document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:10000/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'adjusted-file.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.getElementById('response').textContent = 'Arquivo baixado com sucesso!';
        })
        .catch(error => {
            console.error('Erro ao enviar o arquivo:', error);
            document.getElementById('response').textContent = 'Erro ao enviar o arquivo. Tente novamente.';
        });
    } else {
        alert('Por favor, selecione um arquivo.');
    }
});
