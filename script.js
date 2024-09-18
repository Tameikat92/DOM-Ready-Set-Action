




function main(){
const growMe = document.getElementById('grow-me');
growMe.classList.add('big');

const shrinkMe = document.getElementById('shrink-me');
shrinkMe.classList.remove('big');

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
    console.log(item.textContent);
})
const brokenLink = document.querySelector('.link'); // . link is the class name 
brokenLink.href = "https://www.example.com";
brokenLink.textContent = 'somewhere';

const hideMe= document.getElementById('hide-me');
   hideMe.style.display = 'none';

  const showMe = document.getElementById('show-me');
  showMe.style.display = 'block';

  //const name = document.getElementById('name').value;
 const usertName = document.getElementById('name').value;

   
   document.querySelector('h1').textContent = "Welcome " + usertName;

}






