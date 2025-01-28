let game=[];
let user=[];
let level=0;
let idx = ["red","yellow","pink","orange"];
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
let boxContainer = document.querySelector(".box-container");
let start=false;
// let acceptingInput = false;

function levelUp(){
    level++;
    h4.innerHTML=`Round ${level}`;
    let body = document.querySelector("body");
    body.style.backgroundColor="green";
    setTimeout(()=>{
        body.style.background="white";
    },150);
}
function gameSwap(){
    // acceptingInput = false;
    let rand = Math.floor(Math.random()*4);
    let randBox = document.querySelector(`#${idx[rand]}`);
    console.log(`box is ${rand}`)
    randBox.style.backgroundColor="white";
    setTimeout(()=>{
        randBox.style.backgroundColor=`${idx[rand]}`;
        // acceptingInput = true; 
    },150);
    let color = rand;
    game.push(idx[rand]);
}
function wrongAns(){
    let body = document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(()=>{
        body.style.background="white";
    },150);
}
function displayResult(){
    h4.innerText=`Your score is ${level-1}!!!!`; 
}
function userSwap(btn,i){
    btn.style.background="green";
    setTimeout(()=>{
        btn.style.background=btn.getAttribute("id");
    },150);
}
document.querySelector(".wrapper").addEventListener("dblclick",(e)=>{
    if(!start){
    start=true;
    boxContainer.classList.add("active");
    console.log(`Hey, you konow about inspect tool good, but then also you have to crack the coded form of hint`);
    levelUp();
    setTimeout(gameSwap,1000);
    let btns = document.querySelectorAll(".box");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        // if (!acceptingInput) return;
        let id=btn.getAttribute("id");
        let i=user.length;
        user.push(id);
        if(i<game.length){
            if(user[i] != game[i]){
                displayResult();
                wrongAns();
                // start = false; // Reset the game
                // game = [];
                // user = [];
                // level = 0;
                return;
            }
            else{
                userSwap(btn,i);
            }
            if(i+1 === game.length){
                levelUp();
                user=[];
                setTimeout(gameSwap,300);
            }
        }
    });
});
    }
});




