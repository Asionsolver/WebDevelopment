const BASE_URL = "https://jsonplaceholder.typicode.com";

fetch(`${BASE_URL}/users/1`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        return Promise.resolve('Somethings')
    })
    .then(str =>{
        console.log(str);
        return Promise.resolve('Another Process')
    })
    .then(another=>{
        console.log(another)
    })
    .catch(error=>{
        console.log(error)
    })