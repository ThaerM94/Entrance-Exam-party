//////////user name constructor\\\\\\\\\\

function UserName (firstName , LastName){
    this.firstName = firstName,
    this.LastName = LastName
    UserName.all.push(this)
}

UserName.all =[];


/////////////////event listener to store users\\\\\\\\\\\\\\\\\\

var myForm = document.getElementById('contactInfo');

myForm.addEventListener('submit',newUser);

function newUser (event){

event.preventDefault();

var firstNameUser = event.target.Fname.value;

var lastNameUser = event.target.Lname.value;

new UserName (firstNameUser,lastNameUser);

uplodeUser();


}

////////////////////////////////uplode to the local storage\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function uplodeUser (){
var User = JSON.stringify(UserName.all)
localStorage.setItem('user', User)

}