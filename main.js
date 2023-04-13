
// http://www.omdbapi.com/?apikey=9141ea63
// http://www.omdbapi.com/?apikey=9141ea63&i=tt3896198
const test1 = async () => {
    try {
        const response = await fetch("http://www.omdbapi.com/?apikey=9141ea63&i=tt3896198")
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}