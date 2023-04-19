

var count = 0
const test3 = async () => {
    
    try {
        // 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
        //  https://dummyjson.com/products/categories
        // 'https://dummyjson.com/products/category/smartphones'
        // "total":100,"skip":0,"limit":30
        const response = await fetch("https://dummyjson.com/products/categories")
        const categories = await response.json()
        const maxDescriptionLength = 100
        categories.map(async category => {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            const section = await response.json()
            const container = document.createElement("section")
            document.getElementById("cards").appendChild(container)

            let title = (category.charAt(0).toUpperCase() + category.slice(1)).replace("-", " ")
            container.innerHTML = `<h1 class="category-title">${title}</h1>`
            container.setAttribute("id", `cards-${category}`)
            container.setAttribute("class", "section-category")

            const containerCards = document.createElement("div")
            container.appendChild(containerCards)
            containerCards.setAttribute("id", `cards-container-${category}`)
            containerCards.setAttribute("class", "section-container-category")

            document.getElementById("dropdown-categories").innerHTML += `<li><button class="dropdown-item" href="#" onclick="dropdownSelector('${category}')">${title}</button></li>`

            section.products.map(product => {
                let desc = product.description
                if (desc.length > maxDescriptionLength) {
                    desc = desc.substr(0, maxDescriptionLength) + desc.substr(maxDescriptionLength).split(" ")[0] + "..."
                }
                containerCards.innerHTML += `
                <div class="card tarjeta" id="tarjeta-${product.title}">
                    <img class="card-img-top foto-card" src="${product.thumbnail}" alt="${product.title}">
                    <div class="card-body">
                        <p class="card-text"><b>${product.title}</b> - ${product.brand}</p>
                        <p class="card-text">${desc}</p>
                    </div>      
                </div>
                `
            })
            const leerinput = document.getElementById("search-bar")
            leerinput.addEventListener("keyup", e => {
                section.products.map(product => {
                    if (!product.title.toUpperCase().includes(leerinput.value.toUpperCase())) document.getElementById(`tarjeta-${product.title}`).classList.add("d-none")
                    else document.getElementById(`tarjeta-${product.title}`).classList.remove("d-none")
                })
            })
        })
    } catch (err) {
        console.log(err)
    }
}
test3()

const dropdownSelector = category => {
    console.log(category)
    const sections = document.getElementsByClassName("section-category")
    for (let section of sections){
        if (section.id != `cards-${category}`) section.classList.add("d-none")
        else section.classList.remove("d-none")
    }
}
const resetFilter = () => {
    const sections = document.getElementsByClassName("section-category")
    for (let section of sections) section.classList.remove("d-none")
}