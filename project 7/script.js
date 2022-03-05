let multiple = document.querySelector("#multiple");
let devide = document.querySelector("#devide");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let equal = document.querySelector("#equal");
let dot = document.querySelector("#dot");
let deletee = document.querySelector("#delete");

let numbers = document.querySelectorAll('.numbers');

let clear = document.querySelector("#clear");
let clearHistory = document.querySelector('#clearHistory')

let previusNumber = document.querySelector('.previusNumber')
let previusNumberVar = ''
let previusNumberSeparated = ''

let curentNumber = document.querySelector('.curentNumber')
let curentNumberVar = ''
let curentNumberSeparated = ''
let curentNumberVarHolder = ''

let result = ''
let sign = document.querySelector('.sign')
let mathSign = document.querySelectorAll('.mathSign')
let mathSignCalculation = ''

let history1 = document.querySelector(".history1");
let history1Arr = []
let history1Var = ''

let history2 = document.querySelector(".history2");
let history2Arr = []
let history2Var = ''




// zmiana moda
function advanced() {
    document.querySelector(".calculatorBox").classList.toggle("advanced");
    document.querySelector(".calculatorBox").classList.toggle("standard");

}

/* usuwa animacje przy ladowaniu strony */
setTimeout(function(){
    document.body.className="";
},500);







function buttonOperateFunction (){
    if (curentNumberVar.length < 10) {
        curentNumberSeparated = ''
        if (curentNumberVar.length === 0 & this.textContent === '.') {
            curentNumberVar += '0'
        } 
        if (this.textContent === '.' & curentNumberVar.includes('.')) {
            return
        } 
        curentNumberVar += this.textContent
        curentNumberSeparatedFunction()
        curentNumber.innerHTML = curentNumberSeparated
        
    }
}

function curentNumberSeparatedFunction() {
    let result
    
    if(curentNumberVar.includes('.')){
        result = curentNumberVar.indexOf('.')
    } else {
        result = curentNumberVar.length
    }
    
    switch(result) {
        case 1:
        case 2:
        case 3:
            curentNumberSeparated = curentNumberVar
        break
        case 4:
            let a = curentNumberVar
            let Lenght4 = a.slice(0,1) + ' ' + a.slice(1)
            curentNumberSeparated = Lenght4
        break
        case 5:
            let b = curentNumberVar
            let Lenght5 = b.slice(0,2) + ' ' + b.slice(2)
            curentNumberSeparated = Lenght5
        break
        case 6:
            let c = curentNumberVar
            let Lenght6 = c.slice(0,3) + ' ' + c.slice(3)
            curentNumberSeparated = Lenght6
        break
        case 7:
            let d = curentNumberVar
            let Lenght7 = d.slice(0,1) + ' ' + d.slice(1,4) + ' ' + d.slice(4)
            curentNumberSeparated = Lenght7
        break
        case 8:
            let e = curentNumberVar
            let Lenght8 = e.slice(0,2) + ' ' + e.slice(2,5) + ' ' + e.slice(5)
            curentNumberSeparated = Lenght8
        break
        case 9:
            let f = curentNumberVar
            let Lenght9 = f.slice(0,3) + ' ' + f.slice(3,6) + ' ' + f.slice(6)
            curentNumberSeparated = Lenght9
        break
        case 10:
            let g = curentNumberVar
            let Lenght10 = g.slice(0,1) + ' ' + g.slice(1,4) + ' ' + g.slice(4,7) + ' ' + g.slice(7)
            curentNumberSeparated = Lenght10
        break
    }
}

function clearFunction (){
    curentNumberVar = ''
    curentNumber.innerHTML = curentNumberVar
    sign.innerHTML = ''
    previusNumberVar = ''
    previusNumber.innerHTML = ''
}

function mathSignFunction() {
    if (curentNumberVar.length === 0 & previusNumberVar.length === 0 & history1Var === '') {
        previusNumberVar = 0
        previusNumberSeparated = 0
        previusNumber.innerHTML = previusNumberVar
        sign.innerHTML = this.textContent;
        mathSignCalculation = this.textContent
        curentNumber.innerHTML = ''
        console.log('1')
        return
    } else if (previusNumberVar.length !== 0 & curentNumberVar.length === 0 & history1Var !== '') {
        sign.innerHTML = this.textContent;
        mathSignCalculation = this.textContent
        console.log('2')
        return
    } else if (curentNumberVar.length === 0 & history1Var !== '') {
        previusNumberVar = curentNumberVarHolder
        console.log('3')
    } else  {
        previusNumberVar = curentNumberVar
        console.log('4')
    }

    previusNumberSeparated = curentNumberSeparated
    curentNumberSeparated = ''
    curentNumberVar = ''

    curentNumber.innerHTML = curentNumberVar
    previusNumber.innerHTML = previusNumberSeparated
    
    sign.innerHTML = this.textContent;
    mathSignCalculation = this.textContent
}

function deleteeFunction() {
    if(curentNumberVar.length !== 0) {
        let curentNumberVar2 = curentNumberVar.slice(0, -1)
        curentNumberVar = curentNumberVar2
        curentNumber.innerHTML = curentNumberVar
        return
    } else if (curentNumberVar.length === 0) {
        sign.innerHTML = ''
        curentNumberVar = previusNumberVar
        curentNumber.innerHTML = curentNumberVar
        previusNumberVar = ''
        previusNumber.innerHTML = ''
        mathSignCalculation = ''
        console.log(curentNumberVar)
        console.log(previusNumberVar)
        return
    }
}


function equalFunction() {
    if(previusNumberVar === '' & curentNumberVar === '') return;
    else if (sign !== "" & curentNumberVar === '') {
        curentNumberVar = previusNumberVar
        curentNumberSeparated = previusNumberSeparated
        
        curentNumber.innerHTML = curentNumberSeparated
    }
    let a = Number(curentNumberVar)
    let b = Number(previusNumberVar)

    switch(mathSignCalculation) {
        case '+':
            result = a + b;
        break

        case '-':
            result = b - a;
        break

        case '/':
            result = b / a;
        break

        case '*':
            result = a * b;
        break
    }

    result = String(result)

    if(previusNumberVar.length !== 0) {
        historyFunction()
    }

    curentNumberVar = result
    curentNumberSeparatedFunction()
    
    curentNumber.innerHTML = curentNumberSeparated
    previusNumberVar = ''
    previusNumber.innerHTML = previusNumberVar
    sign.innerHTML = ''
    curentNumberVarHolder = curentNumberVar
    curentNumberVar = ''
}

function historyFunction() {
    history2.innerHTML = ''
    history2.innerHTML = history1Var
    history1.innerHTML = ''
    history1Var = ''
    history1Arr = []

    history1Arr.push(previusNumberSeparated)
    history1Arr.push(mathSignCalculation)
    history1Arr.push(curentNumberSeparated)
    history1Arr.push('=')
    
    curentNumberVar = result
    curentNumberSeparatedFunction()
    
    history1Arr.push(curentNumberSeparated)
    curentNumberVar = ''
    history1Var = history1Arr.join(' ')
    
    history1.innerHTML = history1Var   
}

function clearHistoryFunction() {
    history1Arr = []
    history1Var = ''
    history1.innerHTML = ''
    history2Arr = []
    history2Var = ''
    history2.innerHTML = ''
}


//nasłuch

numbers.forEach((button) => button.addEventListener('click', buttonOperateFunction))

clear.addEventListener('click', clearFunction)

mathSign.forEach((button) => button.addEventListener('click', mathSignFunction))

deletee.addEventListener('click', deleteeFunction)

equal.addEventListener('click', equalFunction)

clearHistory.addEventListener('click', clearHistoryFunction)