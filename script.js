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
const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click',function(){
    let display = document.getElementById('display');
        display.value = display.value.toString().slice(0,-1);
})
const result = document.getElementById('result');
result.addEventListener('click',function(){
    let display = document.getElementById('display');
    display.value = eval(display.value);
})