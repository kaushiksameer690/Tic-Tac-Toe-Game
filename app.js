let msgc=document.querySelector(".msg-container");
const boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
o=true;
const resetgame=()=>{
    o=true;
    bdx1();
    msgc.classList.add("hide");
    count=0;
    msg.innerText="";
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        console.log(count);
        if(o){
        box.innerText="O";
        o=false;
        }else{
        box.innerText="X";
        o=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const bdx=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const bdx1=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , The Winner is ${winner}`;
    msgc.classList.remove("hide");
    bdx();
}
const winops=[[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
const checkWinner = () =>{
    for(let ops of winops){
        let pos1val=boxes[ops[0]].innerText;
        let pos2val=boxes[ops[1]].innerText;
        let pos3val=boxes[ops[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(pos1val,"is the winner");
                showWinner(pos1val); 
            }
        }
    }if(count===9 && msg.innerText===""){
        msg.innerText="Game Was a Draw , Nobody Won";
        msgc.classList.remove("hide");
    }
    
};
newbtn.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);