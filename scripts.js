const cards = document.getElementById('cards')

function fetchAllPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(function (allPokemon){
     allPokemon.results.map(pokemon => fetchPokemon(pokemon))
    }
  )
}

function fetchPokemon(pokemon){
  let url = pokemon.url
  fetch(url)
  .then(response => response.json())
  .then( async function(pokeData){    
    const pokemon  = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('p')
    const type = document.createElement('p')
    const types = pokeData.types[0].type.name
    
    const nameAndTypeField = document.createElement('div')
    const imageField = document.createElement('div')

    const pokeSprites = pokeData.sprites.other.home.front_default
    
    image.setAttribute("src", pokeSprites)
    name.textContent = pokeData.name.toUpperCase()
    type.textContent = types.toLowerCase() 
    
    nameAndTypeField.appendChild(name)
    nameAndTypeField.appendChild(type)
    nameAndTypeField.classList.add('nameAndTypeField')
    imageField.classList.add('imageField')
    pokemon.appendChild(nameAndTypeField)
    imageField.appendChild(image)
    pokemon.appendChild(imageField)
    pokemon.classList.add("card")
    cards.appendChild(pokemon)
    
    if(types === "fire"){
      pokemon.style.background = "crimson";
    }
    if(types === "grass"){
      pokemon.style.background = "limegreen";
    }
    if(types === "bug"){
      pokemon.style.background = "lime";
    }
    if(types === "water"){
      pokemon.style.background = "aqua";
    }
    if(types === "normal"){
      pokemon.style.background = "beige";
    }
    if(types === "poison"){
      pokemon.style.background = "blueviolet";
    }
    if(types === "electric"){
      pokemon.style.background = "goldenrod";
    }
    if(types === "ghost"){
      pokemon.style.background = "darkslateblue";
    }
    if(types === "rock"){
      pokemon.style.background = "lightsteelblue";
    }
    if(types === "ice"){
      pokemon.style.background = "cyan";
    }
    if(types === "fairy"){
      pokemon.style.background = "plum";
    }
    if(types === "fighting"){
      pokemon.style.background = "moccasin";
    }
    if(types === "psychic"){
      pokemon.style.background = "purple";
    }
    if(types === "dragon"){
      pokemon.style.background = "turquoise";
    }
    if(types === "ground"){
      pokemon.style.background = "rosybrown";
    }
  })
}

const input = document.getElementById("search")
let timer 


function SearchBar(){

  const card =  document.querySelectorAll(".card")

  for(let i=0; i<card.length; i++){
    if(card[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
      card[i].classList.remove("hidden")
    }else{
      card[i].classList.add("hidden")
    }
  }
}

input.addEventListener("keyup", function(){
  clearTimeout(timer)
  timer = setTimeout(SearchBar, 1000)
})



SearchBar()
fetchAllPokemons()
