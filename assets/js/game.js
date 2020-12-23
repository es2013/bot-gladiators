
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
            playerMoney = playerMoney - 10;
            break;
        }
   } 
   // remove enemys health
   enemyHealth = enemyHealth - playerAttack;
   console.log(playerName + ' attacked ' + enemyHealth + ". " + enemyName + " now has " + enemyHealth + " health points");


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
   playerHealth = playerHealth - enemyAttack;
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

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
// if player is still alive, keep fighting
if (playerHealth > 0) {
  // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
  window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

  // pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];

  // reset enemyHealth before starting new fight
  // enemyHealth = 50;

  // use debugger to pause script from running and check what's going on at that moment in the code
  debugger;

  // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyName);
}
// if player isn't alive, stop the game
else {
  window.alert('You have lost your robot in battle! Game Over!');
}
}

// start new game function
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
  
        enemyHealth = 50;
  
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




//Note the lack of quotations marks around playerName
//window.alert(playerName);
//console.log("this logs a string, good for leaving yourself a message");


 // Tony the Robot is ready for battle!
//console.log(playerName + " is ready for battle!");

// "Tony the Robot is ready for battle!"
//console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
//console.log("Your robot, " + playerName + ", has won!");