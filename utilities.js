function getElementValueFromButton(element){
    document.getElementsByClassName(element).addEventListener('click', function(e){
        console.log(e.innerText);
    })
}