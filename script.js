function reset(){

    document.getElementById('billvalue').value = ""
    document.getElementById('npeople').value = ""
    
    var result = document.getElementById('resulttip')
    var total = document.getElementById('totaltip')

    result.innerText = `$ 0.00`
    total.innerText = `$ 0.00`
}

function custom(){
    ntip = window.prompt("Write a custom value in %: ")
    calc(ntip)
}

function calc(ntip){
    var fnbill = document.getElementById('billvalue')
    var fnpeople = document.getElementById('npeople')

    if(fnbill.value.length == "" || fnpeople.value.length == "" ){
        window.alert('Insert a value in bill or number of people')
    }
    else{
        var nbill = Number(fnbill.value)
        var npeople = Number(fnpeople.value)

        var tip = ((nbill*ntip)/100)/npeople
        tip = Number(tip.toFixed(2))

        var totaltip = ((tip*npeople)+nbill)/npeople
        totaltip = Number(totaltip.toFixed(2))

        var result = document.getElementById('resulttip')
        var total = document.getElementById('totaltip')

        value1 = `$${tip}`
        value2 = `$${totaltip}`

        result.innerText = `${value1}`
        total.innerText = `${value2}`
    }
}