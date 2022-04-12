const input = document.querySelector("#searchForm")
input.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const searchTerm = input.elements.query.value;
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        makeImage(res.data)
        form.elements.query.value = '';
    } catch {
        console.log("ERROR!")
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
            // label.innerText = result.show.
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
    
}