// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const randomNumber = Math.floor(Math.random() * 6)
if (randomNumber < 3) {
    console.log(randomNumber + ' lesser than 3')
} 
else if (randomNumber>3){
    console.log(randomNumber+ ' Greater than 3')
}

else{
    console.log(randomNumber+ ' equal to 3')
}