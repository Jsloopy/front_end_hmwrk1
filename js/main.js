let state = {
 
    data: [],
};


   


function doFetch() {
    

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(api => {
        state.data = api.rates;
    render()

    });
}
doFetch()

function createBar(){
let country = document.querySelector(".CurrencyChooser-select");
let searchTerm = country.value;
let chart = document.querySelector(".Chart");


let bar = document.createElement("div");
let par = document.createElement("p")
par.innerHTML = searchTerm + " = $" + state.data[searchTerm]
bar.appendChild(par)


bar.classList.add("bar");
bar.style.height = (1 / state.data[searchTerm])*100 + "%"
bar.style.width = "1fr";
chart.appendChild(bar);



}

function render() {
    countryrate=state.data
    console.log(countryrate)
    let div = document.querySelector('.CurrencyChooser-select');
    div.innerHTML = '';
    let countries = Object.keys(countryrate)
    for (let count of countries) {
        let item = document.createElement('option');
        item.textContent = count;
        console.log(count)
        div.appendChild(item);
    }
}


