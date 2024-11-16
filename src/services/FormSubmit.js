function formSubmit(event){
    event.preventDefault();

    const form = document.getElementsByTagName("form");
    console.log("Form submit ",  form.action)
    // form.submit();
}


export default formSubmit