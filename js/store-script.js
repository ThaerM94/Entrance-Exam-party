///////////////Array contains the animals names\\\\\\\\\\\\\\

var animals = ['cat', 'dog', 'hamester'];


///////////////Animal constructor\\\\\\\\\\\\\\

function AnimalsImg(name) {
    this.name = name,
        this.imgPath = `../img/store/${name}.png`,
        AnimalsImg.all.push(this)
}

AnimalsImg.all = [];


///////////////instantiate animal objects\\\\\\\\\\\\\\

for (var i = 0; i < animals.length; i++) {
    new AnimalsImg(animals[i])
}


//////////////get the container\\\\\\\\\\\\\\\\\

var containerStorePage = document.getElementById('petsImgs')

////////////function runder the pets img inside the store\\\\\\\\\\\\\\\\\

function runderHomePage() {

    for (var x = 0; x < animals.length; x++) {
        var imgMessage = document.createElement('img');
        containerStorePage.appendChild(imgMessage)
        imgMessage.setAttribute('src', AnimalsImg.all[x].imgPath);
        imgMessage.setAttribute('alt', AnimalsImg.all[x].name);
        imgMessage.setAttribute('title', AnimalsImg.all[x].name);
        var addPet = document.createElement('button');
        containerStorePage.appendChild(addPet);
        addPet.textContent = 'add to cart';
        addPet.setAttribute('id', AnimalsImg.all[x].name)
    }

}

runderHomePage();

////////////adding an event listener to the objects\\\\\\\\\\\\\\\\\

containerStorePage.addEventListener('click', addToCart);

var chosenPet = [];

function addToCart(event) {

    if (event.target.id != 'petsImgs') {

        for (var j = 0; j < animals.length; j++)

            if (event.target.id == AnimalsImg.all[j].name) {

                if (!chosenPet.includes(AnimalsImg.all[j])) {

                    chosenPet.push(AnimalsImg.all[j]);
                    updatePetStore();


                }

            }


    }
}

////////////adding objects to the local storage\\\\\\\\\\\\\\\\\


function updatePetStore() {
    var setChosenPet = JSON.stringify(chosenPet);
    localStorage.removeItem('setPet', setChosenPet)
    localStorage.setItem('setPet', setChosenPet)
}


var containerCart = document.getElementById('petscart')

////////////function runder the chosen pets\\\\\\\\\\\\\\\\\

function runderCart() {
    
    for (var x = 0; x < animals.length; x++) {

        var imgCart = document.createElement('img');
        containerCart.appendChild(imgCart)
        imgCart.setAttribute('src', chosenPet[x].imgPath);
        imgCart.setAttribute('alt', chosenPet[x].name);
        imgCart.setAttribute('title', chosenPet[x].name);
        var namePet = document.createElement('span');
        containerCart.appendChild(namePet);
        namePet.textContent = chosenPet[x].name;
        
    }

}

////////////getting objects from the local storage\\\\\\\\\\\\\\\\\

function getPet (){

var getmyPet = localStorage.getItem('setPet');

if(getmyPet){

    chosenPet = JSON.parse(getmyPet);
    
    runderCart();

}

}
getPet();




