let  score = JSON.parse(localStorage.getItem('score'))
      || {
          wins:0,
          losses:0,
          ties:0
     };
      updateScoreElement();
      /*if (!score){
          score = {
               wins:0,
               losses:0, 
               ties:0
          };
      }*/
     function playGame(playerMove){

     const computedMove = pickComputerMove();

     let result = ''; 
     if(playerMove ===  'scissors'){
          if(computedMove === 'rock'){
               result = 'You lose';
          }
          else if(computedMove === 'paper'){
               result = 'You Win';
          }
          else if(computedMove === 'scissors'){
               result = 'Tie';
          }
     }

     else if (playerMove==='paper'){
          if(computedMove === 'rock'){
               result = 'You Win';
          }
          else if(computedMove === 'paper'){
               result = 'Tie';
          }
          else if(computedMove === 'scissors'){
               result = 'You lose';
          }
     }

     else if(playerMove==='rock'){
          if(computedMove === 'rock'){
               result = 'Tie';
          }
          else if(computedMove === 'paper'){
               result = 'You lose';
          }
          else if(computedMove === 'scissors'){
               result = 'You Win';
          }
     }

     if(result === 'You Win'){
          score.wins += 1;
     }
     else if (result === 'You lose'){
          score.losses +=1;
     }
     else if(result === 'Tie'){
          score.ties +=1;
     }
     
     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();

     document.querySelector('.js-result').innerHTML = result;

     document.querySelector('.js-moves').innerHTML = `
      You 
          <img src="images/${playerMove}-emoji.png"
          class="move-button1"/>
          Computer choose 
          <img src="images/${computedMove}-emoji.png"
          class="move-button1"/>`;

     }

     function updateScoreElement(){

        document.querySelector('.js-score')
        .innerHTML =`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
     }

     function pickComputerMove(){
     const randomNumber=Math.random();
     
     let computedMove = '';
     if(randomNumber >=0 && randomNumber<1/3){  
          computedMove = 'rock';
     }
     else if(randomNumber >=1/3 && randomNumber<2/3){
          computedMove = 'paper';
     }
     else if(randomNumber >=2/3 && randomNumber<2){
          computedMove = 'scissors';

     }
     return computedMove;
     }
