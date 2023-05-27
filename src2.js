const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d02af4cd7msh6aa7ae6f9b93c67p1e8b94jsnbfa8f5f339cc',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
fetch(url,options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        // let tr = document.createElement('tr');


    })
    .catch(err => console.error(err));