


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
            console.log(section.products)

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

            document.getElementById("dropdown-categories").innerHTML += `<li><button class="dropdown-item" href="#" onclick="dropdownSelector(${category})">${title}</button></li>`

            section.products.map(product => {
                let desc = product.description
                if (desc.length > maxDescriptionLength) {
                    desc = desc.substr(0, maxDescriptionLength) + desc.substr(maxDescriptionLength).split(" ")[0] + "..."
                }
                containerCards.innerHTML += `
                <div class="card tarjeta">
                    <img class="card-img-top foto-card" src="${product.thumbnail}" alt="${product.title}">
                    <div class="card-body">
                        <p class="card-text"><b>${product.title}</b> - ${product.brand}</p>
                        <p class="card-text">${desc}</p>
                    </div>      
                </div>
                `
            })
        })
        
        // const { products } = await response.json()
        // console.log(products)
        // 
        // products.map(product => {
        //     let desc = product.description
        //     if (desc.length > maxDescriptionLength) {
        //         desc = desc.substr(0, maxDescriptionLength) + desc.substr(maxDescriptionLength).split(" ")[0] + "..."
        //     }
        //     document.getElementById("cards-smartphones").innerHTML += `
        //     <div class="card tarjeta">
        //         <img class="card-img-top foto-card" src="${product.thumbnail}" alt="${product.title}">
        //         <div class="card-body">
        //             <p class="card-text"><b>${product.title}</b> - ${product.brand}</p>
        //             <p class="card-text">${desc}</p>
        //         </div>      
        //     </div>
        // `
        // })
    } catch (err) {
        console.log(err)
    }
}
test3()

const dropdownSelector = category => {
    document.getElementsByClassName("section-category").map(element => {
        console.log(element)
        // if(element.id != category) element.classList.add("d-none")
    })

}

/*
document.getElementsByClassName("section-category").map(section => {
        if (category != section.id) console.log(section.id)
    })
*/