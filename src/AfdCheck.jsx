import { useRef, useState } from 'react';
import HeaderComponent from './components/HeaderComponent.jsx'
import DataCheck from './components/DataCheck.jsx'

const AfdCheck = () => {


    const [loading, setLoading] = useState(false)
    const [datasRecieve, setRecieve] = useState(false)
    const fileInputRef = useRef(null);

    function handleClick(event){
        event.preventDefault();
        setLoading(true)
        sendFile();
    }

    function sendFile(){
        const file = fileInputRef.current.files[0];

        if (file) {
            console.log("iniciando download")
            const formData = new FormData();
            formData.append('file', file);
    
            fetch('https://afd-generator.onrender.com/afdCheck', {
                method: 'POST',
                body: formData
            })
            .then(response => console.log(response))
            .catch(error => {
                console.error('Erro ao enviar o arquivo:', error);
                document.getElementById('response').textContent = 'Erro ao enviar o arquivo. Tente novamente.';
            })
            .finally(() => {
                setLoading(false);
                setRecieve(true);
            });
            
        } else {
            setLoading(false);
            alert('Por favor, selecione um arquivo.');
        }

    }

    return (
        <>
            <HeaderComponent />
            <div className="container p-4 my-4 bg-dark-subtle rounded shadow">
            {loading ? (
                    <div id="response">Download iniciado</div>
                ) : datasRecieve? <DataCheck />  : (
                    <form id="uploadForm">
                        <h1>Upload de Arquivo</h1>
                        <p3>Faça o Upload do arquivo que deseja conferir inconsistências</p3><br/><br/>
                        <input
                         className="form-label"
                         type="file"
                         ref={fileInputRef}
                         name="file" accept=".txt" required /><br/>
                        <button className="btn btn-secondary" type="submit" onClick={handleClick}>Enviar</button>
                    </form>
                )}
            
            </div>
        </>
    );
};

export default AfdCheck;