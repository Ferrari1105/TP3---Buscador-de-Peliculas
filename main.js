
function test() {
    document.getElementById("test").innerHTML = "hola"
    fetch("http://localhost:3001/user")
    .then(response => console.log(response.json()))
    .catch(err => console.log(err))
}
const test2 = async () => {
    try {
        document.getElementById("test").innerHTML = "hola"
        const response = await fetch("http://localhost:3001/user")
        console.log(response.json())
    } catch (err) {
        console.log(err)
    }
}