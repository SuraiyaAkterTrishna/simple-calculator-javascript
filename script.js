const digits = document.getElementsByClassName('digit');
for (const digit of digits) {
    digit.addEventListener('click', function(e){
        let display = document.getElementById('display');
        display.value += e.target.value;
    })
}
const allClear = document.getElementById('ac');
allClear.addEventListener('click',function(){
    let display = document.getElementById('display');
        display.value = '';
})