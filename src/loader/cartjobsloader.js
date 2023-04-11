import { getShoppingCart } from "../utilities/fakedb"

const cartJobsLoader = async() =>{
    const loadedJobs = await fetch('data.json')
    const jobs = await loadedJobs.json()
    console.log(jobs)

    // get data from local storage

    const storedcart = getShoppingCart()
    const savedcart = []
    console.log(storedcart)
    for(const id in storedcart){
        const addedJob = jobs.find(job => job.id === id)
        if(addedJob){
            const quantity = storedcart[id]
            addedJob.quantity = quantity
            savedcart.push(addedJob)
        }
    }
    // if need to return two things
    // return [products, storedcart]
    // another option
    // return{products,  cart: savedcart}

    return savedcart
}

export default cartJobsLoader