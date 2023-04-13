
// http://www.omdbapi.com/?apikey=9141ea63
// http://www.omdbapi.com/?apikey=9141ea63&i=tt3896198

const datos = [{
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    BoxOffice: "$389,813,101",
    Country: "United States",
    DVD: "22 Aug 2017",
    Director: "James Gunn",
    Genre: "Action, Adventure, Comedy",
    Language: "English",
    Metascore: "67",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg%22",
    Production: "N/A",
    Rated: "PG-13",
    Released: "05 May 2017",
    Response: "True",
    Runtime: "136 min",
    Title: "Guardians of the Galaxy Vol. 2",
    Type: "movie",
    Website: "N/A",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Year: "2017",
    imdbID: "tt3896198",
    imdbRating: "7.6",
    imdbVotes: "695,656",
},{
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    BoxOffice: "$389,813,101",
    Country: "United States",
    DVD: "22 Aug 2017",
    Director: "James Gunn",
    Genre: "Action, Adventure, Comedy",
    Language: "English",
    Metascore: "67",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg%22",
    Production: "N/A",
    Rated: "PG-13",
    Released: "05 May 2017",
    Response: "True",
    Runtime: "136 min",
    Title: "Guardians of the Galaxy Vol. 2",
    Type: "movie",
    Website: "N/A",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Year: "2017",
    imdbID: "tt3896198",
    imdbRating: "7.6",
    imdbVotes: "695,656",
},{
    Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
    Awards: "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    BoxOffice: "$389,813,101",
    Country: "United States",
    DVD: "22 Aug 2017",
    Director: "James Gunn",
    Genre: "Action, Adventure, Comedy",
    Language: "English",
    Metascore: "67",
    Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg%22",
    Production: "N/A",
    Rated: "PG-13",
    Released: "05 May 2017",
    Response: "True",
    Runtime: "136 min",
    Title: "Guardians of the Galaxy Vol. 2",
    Type: "movie",
    Website: "N/A",
    Writer: "James Gunn, Dan Abnett, Andy Lanning",
    Year: "2017",
    imdbID: "tt3896198",
    imdbRating: "7.6",
    imdbVotes: "695,656",
}]

const test1 = async () => {
    try {
        const response = await fetch("http://www.omdbapi.com/?apikey=9141ea63&i=tt3896198")
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

for (let peli of datos) {
    document.getElementById("cards-rating").innerHTML += `
    <div class="card tarjeta">
        <img class="card-img-top foto-card" src="${peli.Poster}" alt="${peli.Title}">
        <div class="card-body">
            <p class="card-text">${peli.Title}</p>
        </div>
    </div>
    `
}