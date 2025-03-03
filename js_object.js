let shadan = {
    id:"101",
    first_name : "Shandan",
    last_name : "Hussain",
    address : "Ajmer",
    fullName :function fullName(){
        return `${this.first_name} ${this.last_name}`;
    }
};

let arrayObj = [
    {
        id:"101",
        first_name : "Shandan",
        last_name : "Hussain",
        address : "Ajmer",
        fullName :function fullName(){
            return `${this.first_name} ${this.last_name}`;
        },
    },
    {
        id:"102",
        first_name : "Abid",
        last_name : "Hussain",
        address : "Ajmer",
        fullName :function fullName(){
            return `${this.first_name} ${this.last_name}`;
        },
    },
    {
        id:"103",
        first_name : "Anayat",
        last_name : "Hussain",
        address : "Ajmer",
        fullName :function fullName(){
            return `${this.first_name} ${this.last_name}`;
        },
    },
        
]

// console.log(shadan.fullName());
// console.log(arrayObj);
// console.log(arrayObj[1]);
// console.log(arrayObj[1].fullName());


// function user(){
//     console.log(arrayObj);
// }

// const user = ()=>{
//     console.log(arrayObj);
// }
// user();
// console.log(typeof user);

const greet = (name)=>{
    console.log('Hello Dear! Welcome to our course',name);
}
greet("Shandan");

