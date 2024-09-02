let pr = new Promise((resolve,reject)=>{
    let a = Math.random()
    if (a<0.5) {
        
        console.log("the random number is less than 0.5")
        resolve("yes its less congrats")
    } else {
        console.log("displaying word rejected after 2 sec")
        setTimeout(() => {
           
            reject("rejected")
        }, 2000);
        
    }

})


pr.then((x) =>{
    console.log(x)
}).catch((err)=>{
    console.log(err)
}


)