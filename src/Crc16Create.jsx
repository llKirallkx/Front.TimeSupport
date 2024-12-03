import { useRef, useState } from 'react';
import HeaderComponent from './components/HeaderComponent.jsx'


function Crc16Create() {


    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null);

    function sendDownload() {

        const file = fileInputRef.current.files[0];
        console.log("teste");

        if (file) {
            console.log("iniciando download")
            const formData = new FormData();
            formData.append('file', file);
    
            fetch('https://afd-generator.onrender.com/upload', {
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
            })
            .finally(() => {
                setLoading(false);
            });
            
        } else {
            setLoading(false);
            alert('Por favor, selecione um arquivo.');
        }
    };

    function handleClick(event){
        event.preventDefault();
        setLoading(true)
        sendDownload();
    }
    
    return (
        <>
            <HeaderComponent />
            <div className="container p-4 my-4 bg-dark-subtle rounded shadow">
                {loading ? (
                    <div id="response">Download iniciado</div>
                ) : (
                    <form id="uploadForm">
                        <h1>Upload de Arquivo</h1>
                        <input className="form-label" type="file" ref={fileInputRef} name="file" accept=".txt" required /><br/>
                        <button className="btn btn-secondary" type="submit" onClick={handleClick}>Enviar</button>
                    </form>
                )}
            </div>
        </>
    );
  }
  
  export default Crc16Create
  