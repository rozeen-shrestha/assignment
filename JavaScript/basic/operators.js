// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"

const randomNumber = Math.floor(Math.random() * 6)
console.log(randomNumber)

if (randomNumber < 3) {
    console.log('lesser than 3')
} else {
    console.log('Greater than 3')
}