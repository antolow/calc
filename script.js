let disp = document.querySelector("#display");
let keys = document.querySelectorAll('.key')
let keyboard = document.querySelector('.keyboard')
let result = document.querySelector('#result')
let reset = document.querySelector('#reset')
let exp = ''
// exp + btn.textContent

for (let key of keys) {
    key.addEventListener('click', function () {
        exp = exp + key.textContent
        disp.value = exp

    })


}

result.addEventListener('click', function () {
    exp = eval(disp.value);
    console.log(exp);
    disp.value = exp
})

reset.addEventListener('click', function () {
    disp.value = ""
    exp = ""
})

