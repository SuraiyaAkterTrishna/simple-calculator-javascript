const digits = document.getElementsByClassName('digit');
for (const digit of digits) {
    digit.addEventListener('click', function(e){
        console.log(e.target.value);
    })
}