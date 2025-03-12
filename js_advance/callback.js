function Welcome(name){
    console.log("welcome to our college ",name);
   
}

function admission(name){
    console.log(name,"you are enrolled in MCA");
}


function student(name,callback1,callback2){
    console.log("student details");
    setTimeout(()=>{
        callback2(name);
    },2000);
    callback1(name);

}

student("shadan",Welcome,admission);

let date = new Date();
let hour = date.getHours();
let day = date.getDay();
let mints = date.getMinutes();
let month = date.getMonth();
let second = date.getSeconds();
let ms = date.getMilliseconds();
let currentTime = `${hour}: ${mints} : ${second}`;
setInterval(()=>{
    console.log(currentTime);
},1000);

