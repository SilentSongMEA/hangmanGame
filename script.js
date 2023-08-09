const secretPhrases=["black","blue","red","green","withe","gray","france","german","iran","berezil"];

let randomItem= "";
let clicked= [];
let result= "";
let mistakes=0;
    function selectRandomItem() {
    randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
    document.getElementById("letters").addEventListener("click", buttonHandler);
    window.addEventListener("keydown",keyHandler);

    console.log(randomItem);
    
}
function setUnderScores(){
    let splitedWord=randomItem.split("");
    let mappedWord= splitedWord.map(Letter => (clicked.indexOf(Letter) >=0 ? Letter : "_"));
    result=mappedWord.join("");
    document.getElementById("clue").innerHTML=`<p>${result}</p>`;

}

function checkIfWon(){
    if(randomItem === result){
        document.getElementById("gameover").querySelector("P").style.display="block";
        document.getElementById("gameover").querySelector("p").innerHTML="Win Prfect";
        document.getElementById("image").querySelector("img").src="assets/winner.png";
    }
    else if(mistakes === 7){
        location.reload();
    }
}

function checkIflost(){
    if(mistakes === 6){
        document.getElementById("gameover").querySelector("P").style.display="block";
        document.getElementById("clue").innerHTML=`<p>Random word is: ${randomItem}</p>`;
        
    }
    else if(mistakes === 7){
        location.reload();
    }
}
function updateHangmanPicture(){
    const image=document.getElementById("image").querySelector("img");
    image.src=`assets/hangman${mistakes}.png`;

}
function letterHandler(Letter){
    Letter= Letter.toLowerCase();
    clicked.indexOf(Letter) === -1 ? clicked.push(Letter) : null;
    document.getElementById(Letter.toUpperCase()).className= "used";
    if(randomItem.indexOf(Letter) >=0){
        setUnderScores();
        checkIfWon();
    }
    else if(randomItem.indexOf(Letter) === -1){
        mistakes++;
        checkIflost();
        updateHangmanPicture();
    }
}


function buttonHandler(event){
    letterHandler(event.target.id);
}

function keyHandler(event){
    letterHandler(event.key);
}


selectRandomItem();
setUnderScores();