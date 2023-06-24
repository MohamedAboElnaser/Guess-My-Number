'use strict';
// variable declaration

//game status info
let generatedNumber=Math.trunc((Math.random()*20))+1;
let score=20;
let highScore=0;

let message=document.querySelector('.message');
const check_btn=document.querySelector('.check');
const again_btn=document.querySelector('.again');


const displayMessage=function(text){
    message.textContent=text;
};

//display the generated number just for testing
// document.querySelector('.number').textContent=generatedNumber;


check_btn.addEventListener('click',function(){
    let guessValue=Number(document.querySelector('.guess').value);
     //the user do not enter any number 
    if(!guessValue)
        displayMessage("The Input Field Is Empty!!! 😶");
    // the user win The game
    else if(guessValue===generatedNumber){
        document.querySelector('.number').textContent=generatedNumber;
        document.body.style.backgroundColor='green';
        displayMessage("🎊🎊 Great !,You Win the game 🎊🎊");
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
        
        document.querySelector('input').disabled=true;
    }
    //wrong input so we check if the input is high , low or he losed
    else{
        // the user lose the game and can not play till he reload the page
        if(score===1){
            displayMessage(`😑😑 You Lose The Game...Reload the page.`);
            again_btn.disabled=true;
            document.querySelector('.score').textContent=0;
        } 
            
        // the user enter worng number but not lose yet
        else{
            score--;
            document.querySelector('.score').textContent=score;
            displayMessage(guessValue>generatedNumber?'⬆️ Too Hight..':'⬇️ Too low..');
        }
    }
});

/**
 * when the user click the again btn
 * ->reset the page color
 * ->shwo ? mark 
 * ->active the input field if it is not from the previous stage
 * ->set the score to 20 and update it in the Dom
 * ->rest the message to "start Gussing"
 */
again_btn.addEventListener('click',function(){
    document.body.style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('input').disabled=false;
    document.querySelector('input').value='';
    score=20;
    document.querySelector('.score').textContent=score;
    displayMessage("Start Guessing...");
});