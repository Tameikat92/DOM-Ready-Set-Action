




function main(){
const growMe = document.getElementById('grow-me');
growMe.classList.add('big');

const shrinkMe = document.getElementById('shrink-me')
shrinkMe.classList.remove('big');

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
    console.log(item.textContent);
})
const brokenLink = document.querySelector('broken-link');
brokenLink.href = "https://www.example.com"




}






