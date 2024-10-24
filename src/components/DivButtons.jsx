function DivButtons() {

    return (
        <div className="divbuttons">
            <button 
                type="submit"
                id="submitButton"
            >Download AFD Port. 671/21
            </button>
            
            <button 
                type="button"
                id="newDownloadButton"
            >Download AFD Port. 1510
            </button>
            
            <span
                id="loadingMessage"
                style="display: none;"
            >Aguarde enquanto processamos o seu documento...
            </span>
        </div>
    )
}

export default DivButtons