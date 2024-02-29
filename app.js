const max = prompt("enter the max number");
const random= Math.floor(Math.random() * max)+1;
let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("YOU QUIT");
        break;

    }
    if(guess==random){
        console.log("Congrats!!You Won");
        break;
    }
    else if(guess<random){
        
       guess=prompt("Please try Again!!guess is smaller");
    }
    else{
        guess=prompt("Please try Again!!guess is larger");
    }
}
