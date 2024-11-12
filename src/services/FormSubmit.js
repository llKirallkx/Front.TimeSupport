function formSubmit(event){
    event.preventDefault();

    const form = document.getElementById("afdForm");
    console.log("Form subtmit ",  form.action)
    // form.submit();
}


export default formSubmit