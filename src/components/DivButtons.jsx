import { useEffect, useState } from "react";
import LoadingButton from "./LoadingButton";
import DownloadButtons from "./DownloadButtons";

function DivButtons() {

    const [loading, setLoading] = useState(false)

    // Adicionar onclick nos botões
    // function submitForm(event){
    //     event.preventDefault();

    //     const form = document.getElementById("afdForm");
    //     console.log("Form subtmit")
    //     // form.submit();
    // }

    

    // function handleClick(event){
    //     setLoading(true)
    //     submitForm(event);


    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    // }

    return (
        <div className="divbuttons">
            {loading? 
            <LoadingButton />
            :
            <DownloadButtons />
            }
            
            
            {/* <span
                id="loadingMessage"
                style="display: none;"
            >Aguarde enquanto processamos o seu documento...
            </span> */}
        </div>
    )
}

export default DivButtons