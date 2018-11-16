let state = {
 
    data: [],
};


   


function doFetch() {
    

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(api => {
        // console.log(api.rates);
        state.data = api.rates;

        console.log( state.data)
    });
        
        // console.log("state:", state)
}

function createBar(){
let country = document.querySelector(".CurrencyChooser-select");
let searchTerm = country.value;
let chart = document.querySelector(".Chart");


let bar = document.createElement("div");
let par = document.createElement("p")
par.innerHTML = searchTerm + " = $" + state.data[searchTerm]
// console.log(state.data[searchTerm])
bar.appendChild(par)


bar.classList.add("bar");
bar.style.height = (1 / state.data[searchTerm])*100 + "%"
// console.log(bar.style.height)
bar.style.width = "1fr";
chart.appendChild(bar);


// let div = document.querySelector('.CurrencyChooser-select');
//     div.innerHTML = '';
//     for (let text of state.data) {
//         let item = document.createElement('option');
//         item.textContent = text;
//         console.log(text)
//         div.appendChild(item);
    
//     }
}

// function render() {
//     let div = document.querySelector('.CurrencyChooser-select');
//     div.innerHTML = '';
//     for (let text of state.data) {
//         let item = document.createElement('option');
//         item.textContent = text;
//         console.log(text)
//         div.appendChild(item);
//         render();
//     }
// }

// use api to template names for buttons/addnames to bars, exhcange rates and height of bar.