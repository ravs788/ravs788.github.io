let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');

    if(mySrc=='images/mybaseImage.jpg'){
        myImage.setAttribute('src','images/image2.jpg');
    } else {
        myImage.setAttribute('src','images/mybaseImage.jpg');
    }


}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'My Website is cool, ain\'t it, '+myName+" ?";
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'My Website is cool, ain\'t it '+storedName+" ?";
}

myButton.onclick = function(){
    setUserName();
}