import handleClick from "../services/HandleClick"

function DownloadButtons() {
    return (
        <>
            <button
                type="button"
                id="submitButton"
                onClick={handleClick}
            >Download AFD Port. 671/21
            </button>

            <button
                type="button"
                id="newDownloadButton"
                onClick={handleClick}
            >Download AFD Port. 1510
            </button>


        </>
    )
}

export default DownloadButtons