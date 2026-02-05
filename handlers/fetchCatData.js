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


module.exports = {
    findCatDetails
}