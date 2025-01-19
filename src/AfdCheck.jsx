import { useRef, useState } from 'react';
import HeaderComponent from './components/HeaderComponent.jsx'
import DataCheck from './components/DataCheck.jsx'

const AfdCheck = () => {

    const [loading, setLoading] = useState(false)
    const [datasRecieve, setRecieve] = useState(false)
    const [responseData, setResponseData] = useState(null);
    const fileInputRef = useRef(null);

    function handleClick(event){
        event.preventDefault();
        setLoading(true)
        sendFile();
    }

    function sendFile(){
        const file = fileInputRef.current.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('file', file);
    
            fetch('http://localhost:10000/afdCheck', {
            // fetch('https://afd-generator.onrender.com/afdCheck', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResponseData(data);
                setRecieve(true);
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

    }

    return (
        <>
            <HeaderComponent />
            <div className="container p-4 my-4 bg-dark-subtle rounded shadow">
            {loading ? (
                    <div id="response">Avaliando Arquivo...</div>
                ) : datasRecieve? <DataCheck data={responseData} />  : (
                    <form id="uploadForm">
                        <h1>Upload de Arquivo</h1>
                        <p>Faça o Upload do arquivo que deseja conferir inconsistências</p><br/><br/>
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