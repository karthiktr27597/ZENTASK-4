let restCountries = new XMLHttpRequest()
let method ='GET'
let api= 'https://restcountries.com/v3.1/all'
restCountries.open(method,api)
restCountries.send()
restCountries.onload= function()
{
    let data= JSON.parse(restCountries.response);
    //let data1 = JSON.parse(data);
    //console.log(data);
    for(let i in data)
    {
        //console.log(i);
        console.log(data[i]['flags']['png']);
      
    }
}