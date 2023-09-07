// 1 Suppression de la class 'red' et ajoute de la class 'blue'

let changeReds = document.querySelectorAll('.red');
for (let i = 0; i < changeReds.length; i++) {
    changeReds[i].classList.remove('red');
    changeReds[i].classList.add('blue');
}
// 2 Mettre en italic tous les refrains
let refrain = document.getElementsByClassName('refrain');

for (let i = 0; i < refrain.length; i++) { 
    
    const essay = refrain[i];
    essay.classList.add('italic')
    
 };

// 3 diminuer la couleur blue en #6495ED
let blue = document.getElementsByClassName("blue");
for (let i = 0; i < blue.length; i++) { 
    
    const essay = blue[i];
    essay.setAttribute("style","background-color: #6495ED")
    
 }

// 4
let espace = document.getElementsByClassName("blue");
for (let i = 0; i < espace.length; i++) { 
    
    const essay = espace[i]; 
    essay.setAttribute("style","background-color: #6495ED ;margin:10px")
    
 }