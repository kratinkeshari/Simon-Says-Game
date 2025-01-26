let game=[];
let user=[];
let level=0;
let idx = ["red","yellow","pink","orange"];
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
let start=false;
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
    let rand = Math.floor(Math.random()*4);
    let randBox = document.querySelector(`#${idx[rand]}`);
    console.log(`box is ${rand}`)
    randBox.style.backgroundColor="white";
    setTimeout(()=>{
        randBox.style.backgroundColor=`${idx[rand]}`;
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
    h4.innerText=`Your score is <b>${level-1}</b> !!!!`; 
}
function userSwap(btn,i){
    btn.style.background="green";
    setTimeout(()=>{
        btn.style.background=btn.getAttribute("id");
    },150);
}
document.querySelector("body").addEventListener("keypress",()=>{
    if(!start){
    start=true;
    console.log(`Hey, you konow about inspect tool good, but then also you have to crack the coded form of hint`);
    levelUp();
    setTimeout(gameSwap,500);
    }
});
let btns = document.querySelectorAll(".box");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let id=btn.getAttribute("id");
        let i=user.length;
        user.push(id);
        if(i<game.length){
            if(user[i] != game[i]){
                displayResult();
                wrongAns();
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



