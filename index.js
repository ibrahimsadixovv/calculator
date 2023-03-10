const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const number = document.querySelector('.number')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const dlt = document.querySelector('.delete')

let result="";

one.addEventListener('click', ()=>{
    result= result + "1"
    number.textContent=result
})
two.addEventListener('click', ()=>{
    result= result +  "2"
    number.textContent=result
})

three.addEventListener('click', ()=>{
    result= result +  "3"
    number.textContent=result
})
four.addEventListener('click', ()=>{
    result= result +  "4"
    number.textContent=result
})
five.addEventListener('click', ()=>{
    result= result +  "5"
    number.textContent=result
})
six.addEventListener('click', ()=>{
    result= result +  "6"
    number.textContent=result
})
seven.addEventListener('click', ()=>{
    result= result +  "7"
    number.textContent=result
})
eight.addEventListener('click', ()=>{
    result= result +  "8"
    number.textContent=result
})
nine.addEventListener('click', ()=>{
    result= result +  "9"
    number.textContent=result
})
zero.addEventListener('click', ()=>{
    result= result +  "0"
    number.textContent=result
})

plus.addEventListener('click', ()=>{
    if (number.innerHTML.toString().split("").reverse().join("")[0] !== "+" && number.innerHTML.toString().split("").reverse().join("")[0] !== "-" && number.innerHTML.toString().split("").reverse().join("")[0] !== "*" && number.innerHTML.toString().split("").reverse().join("")[0] !== "/") {
        result = result + "+";
        number.textContent = result;
    }
    
}

)

minus.addEventListener('click', ()=>{
    if (number.innerHTML.toString().split("").reverse().join("")[0] !== "+" && number.innerHTML.toString().split("").reverse().join("")[0] !== "-" && number.innerHTML.toString().split("").reverse().join("")[0] !== "*" && number.innerHTML.toString().split("").reverse().join("")[0] !== "/") {
        result = result + "-";
        number.textContent = result;
    }
})


multiply.addEventListener('click', ()=>{
    if (number.innerHTML.toString().split("").reverse().join("")[0] !== "+" && number.innerHTML.toString().split("").reverse().join("")[0] !== "-" && number.innerHTML.toString().split("").reverse().join("")[0] !== "*" && number.innerHTML.toString().split("").reverse().join("")[0] !== "/") {
        result = result + "*";
        number.textContent = result;
    }
})


divide.addEventListener('click', ()=>{
    if (number.innerHTML.toString().split("").reverse().join("")[0] !== "+" && number.innerHTML.toString().split("").reverse().join("")[0] !== "-" && number.innerHTML.toString().split("").reverse().join("")[0] !== "*" && number.innerHTML.toString().split("").reverse().join("")[0] !== "/") {
        result = result + "/";
        number.textContent = result;
    }
})

dlt.addEventListener('click', ()=>{
    result=""
    number.textContent = result;

})