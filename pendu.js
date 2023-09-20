let data = [
            "abandonné",
            "abattoir",
            "abattu",
            "abeille",
            "abomination",
            "abordable",
            "abrasif",
            "abricot",
            "absence",
            "absent",
            "absolution",
            "absorbable",
            "absorbant",
            "absorber",
            "abstinence",
            "abstinent",
            "abstrait",
            "abstraitement",
            "absurde",
            "absurdement",
            "absurdité",
            "absurdités",
            "abuser de",
            "académie",
            "académique",
            "acceptant",
            "accessoires",
            "accident",
            "accidentel",
            "accord",
            "achevée",
            "acide",
            "acier",
            "acoustique",
            "acrobate",
            "acrobatie",
            "acrobatique",
            "acteur"
]

let playbutton = document.querySelector(".play")
let UnderGuess = ""
let baliseHistory = document.querySelector(".historyP")
let historia = "Historique: "
let reg = /^[a-zA-Zé]$/
let attempt=1
let alreadyUse = 0
let erreur = document.querySelector(".erreur")


function searchRandomWord(){
   let randomNumber = Math.floor((Math.random() * data.length))
   
   return randomWord = data[randomNumber];
}

function dataToUnder(randomWord){
    let UnderGuess1 = ""
    
    for (let i = 0; i < randomWord.length; i++) {
        UnderGuess1 += "_"
    }
    return UnderGuess = UnderGuess1
}

function ShowUnder(){
    let baliseDevine = document.querySelector(".devineP")
    baliseDevine.style.letterSpacing = "20px"
    baliseDevine.innerHTML = UnderGuess
}

function history(){
   indexstory = historia.indexOf(event.key.toLowerCase(), 11)
   let erreur = document.querySelector(".erreur")
   if (indexstory ==-1){
    erreur.style.visibility = "hidden"
    erreur.innerHTML = ""
    historia += event.key.toLowerCase()
    baliseHistory.innerHTML = historia
    return alreadyUse = 0
   }
   else{
    erreur.innerHTML = `Lettre ${event.key.toUpperCase()} déjà utilisée`
    erreur.style.visibility = "visible"
    erreur.id = "erreur"
    setTimeout(function anim (){erreur.id=""}, 500)
    return alreadyUse = 1
   }
}

function reset(){
    baliseHistory.innerHTML = "Historique: "
    historia = "Historique: "
}



playbutton.addEventListener("click", function() {
    event.preventDefault()
    reset()
    searchRandomWord()
    dataToUnder(randomWord)
    ShowUnder()
  }); 

document.addEventListener("keydown",function(event){
    if (reg.test(event.key) == true ) {
        caracKey = (event.key.toLowerCase())
        history()
        let pos = randomWord.indexOf(caracKey)
        let count = 0
        let ind = -1
        while (pos != -1) {
            count++;
            pos = randomWord.indexOf(caracKey, pos + 1);
        }
        if(count > 0){
            for (let i = 0; i < count; i++) {
                    console.log(i)
                    console.log("index:",ind,"i", i, "=", ind+i)
                    ind = randomWord.indexOf(caracKey, ind+1)
                    console.log("index: ",ind)
                    console.log(UnderGuess)
                    UnderGuess = UnderGuess.replaceAt(ind, caracKey)      
            }
        }
        else if (alreadyUse==0){
            attempt++
            document.getElementById(`rect${attempt}`).style.display = "block"
        }
        else{
            return
        }
        
        UnderGuess = UnderGuess.charAt(0).toUpperCase() + UnderGuess.slice(1)
        ShowUnder()
        console.log(randomWord)
        console.log(count)
        console.log(UnderGuess)
        console.log(UnderGuess.charAt(0).toUpperCase())
        console.log(UnderGuess.slice(1))
}   }   )
   
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}


 


// document.body.style.backgroundColor="red"