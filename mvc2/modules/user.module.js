async function getUser(){
    //always return promise
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();
    return result;
} 
async function getUserById(id) {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();
   return result.find(item => item.id == id)
}
module.exports ={ getUser , getUserById}