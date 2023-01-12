let restCountries = new XMLHttpRequest()
let method = 'GET'
let api= 'https://restcountries.com/v3.1/all'
restCountries.open(method,api)
restCountries.send()

restCountries.onload = function()
{
    let data = JSON.parse(restCountries.response);
    //console.log(data);
    for(let i in data)
    {
        console.log(`---------List ${i}--------`);
        console.log(data[i]['name']['official']);
        console.log(data[i]['region']);
        console.log(data[i]['subregion']);
        console.log(data[i]['population']);
    }
}