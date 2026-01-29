document.addEventListener("DOMContentLoaded",async(e)=>{
    e.preventDefault()
    const main = document.querySelector("main")
    const res = await fetch("http://localhost:4000/get-cats",{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })

    const data = await res.json()

    if(data.err){
        main.innerHTML +=`
        <h2>${data.err.message}</h2>`
    }
    if(data.cats){
        data.cats.forEach(cat => {
            main.innerHTML += `
            <a href="/cat/${cat.name}">
            <img src=${cat.img} alt="A cat picture where the cat shows gis tongue in a silly way">
            <h1>${cat.name}</h1>
            </a>
            `
        });
    }
})