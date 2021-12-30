console.log('hellooo')

let button = document.querySelector('#submitButton')

// let button= document.querySelector('#heightButton')


async function getData (event) {
    event.preventDefault
    let textInput = document.querySelector('#inputBar').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${textInput}`



fetch(url)

    .then(res => {
        return res.json();
    })
    .then(res => {
        const pokemonHeader = document.querySelector('#pokemonName')
        pokemonHeader.innerText = res.name.toUpperCase()

        const pokePic = document.querySelector('#pokemonImg')
        pokePic.src = res.sprites.front_default

        const pokemonHeight = document.querySelector('#pokemonHeight')
        pokemonHeight.innerText= ('Height: ') + res.height

        const pokemonWeight = document.querySelector('#pokemonWeight')
        pokemonWeight.innerText = ('Weight: ') + res.weight

        // const pokemonWeight = document.querySelector('#pokemonWeight')
        // pokemonWeight.innerText = ('Weight: ') + res.weight

        
// to grab image, need to model after html src and then follow format

        



        console.log("success!", res)

    } )
    .catch(err => {
        console.log('error', err)

    })

}

button.addEventListener('click', getData)

    // two ways to write functions, bottom one is more modern and elegantly supposedly...
// function sayHello () {}

// const sayGoodbye = () => {}