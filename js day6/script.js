async function doTask(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve("task 1 done")
            
        }, 2000);
    })
}

async function main() {
    
    
    console.log("hello")
    
    console.log("first task will be done soon ")
    console.log("preparing to print first task")
    let data = await doTask()
    console.log(data)
    console.log("first task printed")
    console.log("first task finished")
    console.log("end")
}

main()



