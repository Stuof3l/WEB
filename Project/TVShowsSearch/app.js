const input = document.querySelector("#searchForm")
input.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const searchTerm = input.elements.query.value;
    try {
        const config = { params: { q: searchTerm } }
        const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
        makeImage(res.data)
        input.elements.query.value = '';
    } catch {
        alert("ERROR!");
    }
})
// input.addEventListener('submit',async (e)=>{
//     e.preventDefault();
//     const searchTerm = input.elements.query.value;
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
//     console.log(res.data);
// })
const makeImage = (shows)=> {
    for (let result of shows) {
        if (result.show.image) {
            // const newDiv = document.createElement("DIV");
            // const label = document.createElement("SPAN");
            // label.innerText = result.show.name;
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }

}