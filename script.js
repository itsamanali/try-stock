

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(response => response.json())
    .then(response => {

        let arr = console.log(response);
        let tbd = document.getElementById("TBD");
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            tr.innerHTML = ` <tr>
                <th scope="col">
                <img src="${response[i].image}"
                </th>
                <th scope="col">${response[i].name}</th>
                <th scope="col">${response[i].symbol.toUpperCase()}</th>
                <th scope="col">${response[i].ath.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</th>
                <th scope="col">${response[i].fully_diluted_valuation.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }</th>
                <th scope="col">${response[i].ath_change_percentage}</th>
                <th scope="col">${response[i].market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</th>
             </tr>`
    
             console.log(tr);
            
            tbd.appendChild(tr);
            console.log(tbd)
        }
       
        // document.getElementById("TBD").appendChild(tr);
        
        
    })
    .catch(err => console.error(err));




// try {
    // const response = await fetch(url, options);
    // const result = await response.text();
// console.log(result);
// } catch (error) {
// console.error(error);
// }
