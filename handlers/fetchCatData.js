async function findCatDetails(name) {
  const res = await fetch(`http://localhost:4000/cat/${name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const { cat } = await res.json();

  if (!cat) {
    throw Error("Cat not found");
  }

  return cat;
}

async function randomCat(){
    const res = await fetch("http://localhost:4000/get-cats",{
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })

    const {cats} = await res.json()
    if(!cats){
        throw Error("No Cats available")
    }
    const randomInt = Math.floor(Math.random() * cats.length)
    const cat = cats[randomInt]
    return cat;
}


module.exports = {
    findCatDetails,
    randomCat
}