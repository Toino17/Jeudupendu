let data = [
            "abandonner",
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



playbutton.addEventListener("click", function() {
    event.preventDefault()
    searchRandomWord()
    dataToUnder(randomWord)
    ShowUnder()
  }); 

document.addEventListener("keydown",function(event){
    let index = randomWord.indexOf(event.key)
    if(index !==-1){
        document.body.style.backgroundColor="red"
        randomWord.replace()
    }
    else{
        alert("pas de lettre")
    }
    console.log(event)
    console.log(index)
})

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement
        + this.substr(index + replacement.length);
}

newRandomWord

// document.body.style.backgroundColor="red"