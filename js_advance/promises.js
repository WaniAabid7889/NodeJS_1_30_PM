let myPromise = new Promise(function(resolve,reject){
    let user = {'id':101,'name':'shadan'};
    let success = true;
    console.log("we are learn promise");
    if(success){
        setTimeout(()=>{
            resolve(user);
        },2000);
    }else{
        reject('promise is reject');
    }
})

// console.log(myPromise);
myPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

