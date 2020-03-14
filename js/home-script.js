
//////////////get the container\\\\\\\\\\\\\\\\\

var containerHomePage = document.getElementById('homeCont')

//////////////function runder the content of the home page\\\\\\\\\\\\\\\\\
 
function runderHomePage () {

var ourMessage = document.createElement('p');
containerHomePage.appendChild(ourMessage);
ourMessage.textContent = `Give Us a Forever Home
If you are looking for a new pet, please remember that their future health and happiness is in your hands.
They will look to you for love, care and attention every day for many years to come. Please be sure you can provide this.`; 
var imgMessage = document.createElement('img');
containerHomePage.appendChild(imgMessage)
imgMessage.setAttribute('src', `img/home/cat-title.png` );
imgMessage.setAttribute('alt',`cat title` );


}
runderHomePage();

