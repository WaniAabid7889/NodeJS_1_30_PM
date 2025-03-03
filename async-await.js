const allUser = async() =>{
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts');
    let result = await response.json();
    return result;
} 

let result = allUser();
result.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})




async function user(params) {
    return "user details";
}

let d = user();
d.then((res)=>{
    console.log(res);
})


// async function demo() {
//   let result = await allUser();   
//   console.log(result);
// }
// demo();








// result.then((data)=>{
//     console.log(data)
// })

// let result = allUser();
// console.log(result);
// result.then((data)=>{
//     data.json().then((d)=>{
//         console.log(d)
//     }).catch((err)=>{
//         console.log(err)
//      })
// }).catch((err)=>{
//     console.log(err);
// })