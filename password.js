//conditions for password: max length of 20 chars, min length of 10 chars, no white space
//contains at least 1 number and 1 letter
                           

let password = ("123pas sword123")

function containsNumber(password){
    return /\d/.test(password);
}
console.log("has number", containsNumber(password))

function containsLetter(password){
    return /[a-zA-Z]/.test(password)
}
console.log("has letter", containsLetter(password))

function containsWhitespace(password){
    return /\s/.test(password)
}
console.log("has space", containsWhitespace(password))

console.log("character length", password.length)

if(password.length>=10 
    && containsNumber(password) === true 
    && containsLetter(password) === true
    && password.length <=20
    && containsWhitespace(password) === false
   )
    {
    console.log("password accepted")
}
else{
    console.log("password failed")
}
