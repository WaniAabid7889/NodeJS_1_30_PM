

// let const var

// var num = 30;

// console.log(num);
// {
//     var c = 30;
//     console.log( typeof c);
//     num++;
// }
// c = "abid";
// console.log(num);
// console.log(typeof c);

// let num = 10;
// let user;
// console.log(num);
// {
//      let b = 20;
//      user = "abid";
//     console.log(typeof num);
//     num++;
//     num = "544";
//     console.log(typeof num);
// }
// console.log(num);
// console.log(user);
// // console.log(b);

// const  name = "abid";
// console.log(name);

// {
//     const name1 = "shadan";
//     console.log(name);
// }
// console.log(name1);

let arr=[
    1,
    2,
    3,
    4,
    5,
    [46,75,67,27],
    ['abid','shadan','faizan']
]; 

// console.log(typeof arr);
// console.log(typeof arr[0]);
// console.log(arr[1]);
// console.log(arr);

// arr.map((val,key)=>{
//      console.log([key,val]);
//     if(key==5){
//         arr[key].map((val)=>{
//             console.log(val);
//         })
//     }
// })

arr.forEach((val,key,[arr])=>{
    console.table({val,key});
})

let brr = ['1','2','3','4','5'];

console.table(brr);


// let filterArr = brr.filter((val)=>{
//     if(val%2!=0){
//         return val;
//     }
// })
// console.log(filterArr);


// let newArr = brr.forEach((val)=>{
//     if(val%2!=0){
//         console.log(val);
//         return val;
//     }
// })

// console.log(newArr);


// let mapArr = brr.map((val)=>{
//     if(val%2!=0){
//         return val;
//     }
// })
// console.log(mapArr);





let total = brr.map(Number).reduce((res, current) => res + current, 0);
console.log(total);