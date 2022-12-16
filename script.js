/*L'utente clicca su un bottone che genererà una griglia di
 gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata 
si colora di azzurro ed emetto un messaggio in console con il 
numero della cella cliccata.*/


//seleziono il bottone e la griglia

const btn = document.getElementById("button")
const grid = document.getElementById("grid")
let validatore = true;
//quando clicco il bottone vengono generate le caselle

btn.addEventListener("click" , function(){

    //devo bloccare nel caso sia già presente una griglia
    if(validatore){
        addCells(100);
        validatore = false;
    }else{
        //devo svuotare la grid già esistente
        removeCells(100);
        validatore = true;
        
    }

    //eseguo cento volte la creazione di una singola cella


});


//creo due funzioni una per aggiungere le celle
function addCells (n){
    for(let i=1 ; i<=n ; i++){
        //creo la cella
        let cella = document.createElement("div");
        cella.classList.add("cell");
        //le metto dentro il numero
        cella.append(i)
        //la inserisco nella grglia
        grid.appendChild(cella)
        cella.addEventListener("click", function(){
            cella.classList.add("bg-blue")
            console.log(i)
        })
        
    }
}
//e una per toglierle

function removeCells (n){
    for (let i=0 ; i <= n ; i++){
        grid.removeChild(grid.firstChild);
    }
}


