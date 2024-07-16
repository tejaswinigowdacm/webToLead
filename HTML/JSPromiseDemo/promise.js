//generate promise
function generatePromise(message){
    return new Promise((resolve,reject) =>{
        if(!message){
            reject("Message is empty");
        }else
        setTimeout(()=>{
            console.log(message);
            resolve();
        },1000);
    });
}
//calling with reject function
/*generatePromise().then(()=>{
    console.log("promise resolved successfully");
}).catch(()=>{
    console.log("promise rejected");
});*/

//how to call promise
generatePromise("1st call").then(()=>{
    console.log("1st promise resloved successfully");
    generatePromise().then(()=>{
        console.log("2nd promise resolved succesfully");
    }).catch((error)=>{  // catch is use to handel reject function in promise
        console.log("promise rejected",error);
    })
});

// using ASYNC and AWAIT keywords instead of promise
/*async function AsyncgeneratePromise(){
    await generatePromise("Async 1st call");
    await generatePromise();
}*/
// we can also use try catch for easy debugging or error handling
async function AsyncgeneratePromise(){
   try{
    let gnp = await generatePromise("Async 1st call");
    await generatePromise();
   } catch(error){
        console.log(error);
   }
}
AsyncgeneratePromise();

// promise all demo
function resolveTimeout(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(message),delay);
    })
}
function rejectTimeout(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject(message),delay);
    });
}
async function loadfunc(){
    let promise1 = resolveTimeout("Promise1 message resolve promise",1000);
    //let promise2 = resolveTimeout("Promise2 message reject promise", 5000);
   let promise2 = rejectTimeout("Promise2 message reject promise", 5000);
    //let allpromise =Promise.all([promise1,promise2]); 
    // .all will return only rejected promise if one of the promise is rejected
   // let allpromise = Promise.any([promise1,promise2]);
    // .any will return only resolve/success promise even if one of the promise is rejected 
    let allpromise = Promise.race([promise1,promise2]);
    // .race will return the 1st promise which ever is first resloved or rejected.

    try{
        let lists = await allpromise;
        console.log(lists);
    }catch(error){
        console.log(error);
    }
}
loadfunc();