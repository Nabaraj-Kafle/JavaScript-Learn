let a = [2,56,23,6,99]   // let an array  

for (let index = 0; index < a.length; index++) {   //for loop
    const element = a[index];
    
    console.log(element)
}

a.forEach(element => {           //forEach loop 
    console.log(element)
    
});



let obj = {     
    a:1,
    b:2
}
for (const key in obj) {            // forin loop
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}

for (const element of a) {      // forofloop
    console.log(element)
    
}