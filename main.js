function test0() {
    fetch("http://localhost:3001/user")
    .then(response => console.log(response))
    .catch(err => console.log(err))
}
// http://www.omdbapi.com/?apikey=9141ea63
// http://www.omdbapi.com/?apikey=9141ea63&i=tt3896198
const test1 = async () => {
    try {
        const response = await fetch("http://localhost:3001/user")
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}