const readlineSync = require("readline-sync");
const userName = readlineSync.question("Input the Username: ");
const password = readlineSync.question("Input the password: ");
const profilPicture = readlineSync.question("Input the profil picture: ");
count=0;
if (userName === "elenwe") {
} else if (password === "poker21") {
} else if (profilPicture === "yes") {
} 
while(true){
email = readlineSync.question("Input the email: ");
if(email ==="elenwe97@hotmail.com"){
    break;    
}
if (count<10){
    console.log("Incorect Try again")   
}
}
console.log("User name:",userName, ",", "Password:",password,",","Has Photo:", profilPicture, ",","Email:", email);