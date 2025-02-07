const pubs = [
    { name: "Example Pub 1", address: "Budapest, Fő utca 1." },
    { name: "Example Pub 2", address: "Szeged, Kossuth utca 10." },
    { name: "Example Pub 3", address: "Debrecen, Petőfi tér 5." }
];

const pubList = document.getElementById("pub-list");

pubs.forEach(pub => {
    const li = document.createElement("li");
    li.textContent = `${pub.name} - ${pub.address}`;
    pubList.appendChild(li);
});
