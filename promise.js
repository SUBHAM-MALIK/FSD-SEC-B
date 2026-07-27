const mypromise =new Promise((resolve,reject)=>{
    let age =19;
    if (age >= 18){
        resolve("can vote");
    }else{
        reject("Not eligible for vote");
    }
})
console.log(mypromise);
mypromise
  .then((msg)=>console.log(msg))
  .catch((msg)=>console.log(msg));

const resolvePromise = ()=>{
    const msg =mypromise
    console.log(msg);
}  
resolvePromise();

