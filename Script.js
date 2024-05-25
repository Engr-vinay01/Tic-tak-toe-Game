let boxs= document.querySelectorAll(".cell");
let resetbtn = document.querySelector("#restartBtn");
let newbtn= document.querySelector(".new-button");
let msgDiv= document.querySelector(".msg-div");
let msg= document.querySelector("#msg");

let trunO=true;  //playerX, playerO

const winpatten=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];

const resetGame=()=>{
    trunO=true;
    enableBoxes();
    msgDiv.classList.add("hide");
}

boxs.forEach((cell)=>{
    cell.addEventListener(`click`, ()=>{
        console.log("button was click");

        if(trunO){
            cell.innerHTML="O"
            trunO=false;
            
        }
        else
        {
            cell.innerHTML="X"
            trunO=true;
        }
        cell.disabled=true;
        chekwinner();
    });

});

const disabledBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText= `Congragulation, Winner is ${winner}`
    msgDiv.classList.remove("hide"); 
    disabledBoxes();

}

const chekwinner=()=>{
        for(let patten of winpatten){
        let pos1=boxs[patten[0]].innerText;
        let pos2=boxs[patten[1]].innerText;
        let pos3=boxs[patten[2]].innerText;
    

        if(pos1!=""&& pos2!=" "&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            console.log("i am winner!",pos1);
            showWinner(pos1);
}
    }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


