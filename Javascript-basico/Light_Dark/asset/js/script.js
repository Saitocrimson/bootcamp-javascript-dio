function clique()
{
console.log("cliquei");
classes();
textos();
}

function classes()
{
button.classList.toggle('Dark-mode');
h1.classList.toggle('Dark-mode');
body.classList.toggle('Dark-mode');
footer.classList.toggle('Dark-mode');
}

function textos()
{
if(button.classList.contains('Dark-mode'))
{
button.innerHTML = "Light-mode";
h1.innerHTML = "Dark-mode" + " on";
return;
}
button.innerHTML = "Dark-mode";
h1.innerHTML = "Light-mode" + " on";
}

const button = document.getElementById('mode-seletor');
const h1 = document.getElementById('page-title'); 
const body= document.getElementsByTagName('body')[0];
const footer= document.getElementsByTagName('footer')[0];
button.addEventListener('click',clique);


