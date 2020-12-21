
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }

var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["robocop", "deathdroid", "kyle"];

// for (var i = 0; i <enemyNames.length; i++){
//     console.log(enemyNames[i]);
// }
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
//   }

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
  while(enemyHealth > 0) {
    
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'");
    if (promptFight ==="fight"|| promptFight ==="FIGHT"){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
  
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked "+ enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // check enemys health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
        } else{
            window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        }
        //check players health
        if(playerHealth <=0){
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        window.alert(playerName + " has chosen to skip the fight");
        //if yes, leave fight
        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight");
            playerMoney = playerMoney -2;
        } else {
            fight();
        }
    } else { 
        window.alert("You need to choose a valid option. Try again!");
    }
     
  }
}
for(var i = 0; i<enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(enemyNames[i]);
}




//Note the lack of quotations marks around playerName
//window.alert(playerName);
//console.log("this logs a string, good for leaving yourself a message");


 // Tony the Robot is ready for battle!
//console.log(playerName + " is ready for battle!");

// "Tony the Robot is ready for battle!"
//console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
//console.log("Your robot, " + playerName + ", has won!");