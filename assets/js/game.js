
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Define all my variables 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10;
// check to see if the value of the playerHealth variable is greater than 0

var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["robocop", "deathdroid", "kyle"];

//start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // fight enemy if playerName is still alive
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  // start the enemy with health between 40 and 60
       // enemyHealth = Math.floor(math.random() * 21) + 40;
        enemyHealth = randomNum(40,60);
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! GAME OVER");
        break;
      }
    }
    //play again
    //startGame();
    //after loop ends, player is dead or doesn't want to play
    endGame();
  };

  //function to end the entire game
var endGame = function(){
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! you have a score of" + playerMoney+ ".");
    } else {
        window.alert("You've lost your robot in battle")
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if (playAgainConfirm){
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Bot Gladiators!");
    }
};

// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
  while (enemyHealth > 0 && playerHealth > 0) {
    //   Ask whether to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP");
    //if player chooses to skip, then nothing happens
    if (promptFight === "skip"|| promptFight==="SKIP" ){
        var confirmSkip = window.confirm("Are you sure you want to skip?");
        // If skip TRUE
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye");
            playerMoney = Math.max(0,playerMoney - 10);
            break;
        }
   } 
        // remove enemys health
       
   //generate random damage value based on player's attack powers
    var damage = randomNum(playerAttack - 3,playerAttack);
    
    enemyHealth = Math.max(0,enemyHealth - playerAttack);

    console.log(playerName + ' attacked ' + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points");


    //    Check Enemy's health

   if (enemyHealth <= 0){
       window.alert(enemyName + " has died!");

    //    award money for destroying enemy
        playerMoney = playerMoney + 20;
        break;
   } else {
       window.alert (enemyName + " has " + enemyHealth + " health points");
   }

   // remove players's health by subtracting the amount set in the enemyAttack variable
   var damage = randomNum(enemyAttack - 3, enemyAttack);
   playerHealth = Math.max(0,playerHealth - enemyAttack);
   console.log(
     enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
   );



    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
    // leave while() loop if player is dead
        break;
    } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
}
};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
  
    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'refill':
          if (playerMoney >= 7) {
              window.alert("Refilling players health by 20 for 7 dollars.");
              playerHealth = playerHealth + 20;
              playerMoney = playerMoney = 7;
          }
          else {
              window.alert("you don't have enough money");
          }
          break;
      case 'REFILL':
        if (playerMoney >= 7) {  
            window.alert("Refilling player's health by 20 for 7 dollars."); 
            playerHealth += 20; 
            playerMoney -= 7;   
        } else {    
            window.alert("you don't have enough money");    
        }  
        break;
      case 'upgrade':
      case 'UPGRADE':
          if (playerMoney>=7){
            window.alert("Upgrading player's attach by 6 or 7 dollars.");
      // increase attack and decrease money
            playerAttack += 6;
            playerMoney -= 7;
          } else {
              window.alert("you don't have enough money!");
          }
        break;
      case 'leave':
      case 'LEAVE':
        window.alert('Leaving the store.');
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
        shop();
        break;
    }
  };

  //function to generate a random numberic value
  var randomNum = function(min,max){
      var value = Math.floor(Math.random()*(max-min+1)+min);

      return value;
  };

startGame();


//Note the lack of quotations marks around playerName
//window.alert(playerName);
//console.log("this logs a string, good for leaving yourself a message");


 // Tony the Robot is ready for battle!
//console.log(playerName + " is ready for battle!");

// "Tony the Robot is ready for battle!"
//console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
//console.log("Your robot, " + playerName + ", has won!");