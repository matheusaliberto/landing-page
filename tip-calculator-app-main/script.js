function calc(ntip){
    var fnbill = document.getElementById('billvalue')
    var fnpeople = document.getElementById('npeople')

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