import DivButtons from "../components/DivButtons"

function submitForm(event){
    event.preventDefault();

    const form = document.getElementById("afdForm");
    console.log("Form subtmit")
    // form.submit();
}


function handleClick(event){
    DivButtons.setLoading(true)
    submitForm(event);


    setTimeout(() => {
        DivButtons.setLoading(false);
    }, 5000);
}

export default handleClick