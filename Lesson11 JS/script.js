const input = document.querySelector('#input')
const coverBtn = document.querySelector('#coverBtn')
const select = document.querySelector('#currency')
const span = document.querySelector('#res')
const curr = document.querySelector("#currency-2")
const Obj = {
    Gbp: '£',
    Usd: '$',
    Euro: '€'
}
const handleworkaboutvalute= () => {
    if (select.value === curr.value){
        return alert('Not correct')
    }else{
        fetch(`https://api.exchangerate.host/latest?base=${select.value}&symbols=${curr.value}&amount=${input.value}`)
            .then(response => response.json())
            .then(data => {
                span.innerHTML = `${input.value} = ${Object.values(data.rates)} ${Object.keys(data.rates)}`
            })
    }
    }
coverBtn.addEventListener('click', (e) => {
    handleworkaboutvalute()
})
