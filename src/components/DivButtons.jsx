import { useState } from "react";
import formSubmit from "../services/FormSubmit";

function DivButtons() {

    const [loading, setLoading] = useState(false)

    function defaultDownloadFunction(event){
        const form = document.getElementById("afdForm");
        form.action = "https://afd-generator.onrender.com/download671";

        handleClick(event);
    }
    
    function newDownloadFunction(event){
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