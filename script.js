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
const modalità = document.getElementById("selected")
//quando clicco il bottone vengono generate le caselle

btn.addEventListener("click" , function(){

    //devo bloccare nel caso sia già presente una griglia
    grid.innerHTML = "";
    let n = 100; 
    if (modalità.value == "medium"){
        n = 81; 
    }else if(modalità.value == "hard"){
        n = 49;
    };
    
    addCells(n);

    

    //eseguo cento volte la creazione di una singola cella


});


//creo una funzione una per aggiungere le celle
function addCells (n){
    let difficoltà = "cell"

    //creo la variabile per stabilire il livello di difficoltà
    if (n == 81){
        difficoltà = "cellMedium"
    }else if(n == 49){
        difficoltà = "cellHard"
    }
    for(let i=1 ; i<=n ; i++){
        //creo la cella
        //
        let cella = document.createElement("div");
        cella.classList.add(difficoltà);
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




