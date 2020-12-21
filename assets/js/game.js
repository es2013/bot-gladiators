
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }
var playerAttack = 10;

var enemyName="robocop"
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function() {
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
     
  };

fight();



//Note the lack of quotations marks around playerName
//window.alert(playerName);
//console.log("this logs a string, good for leaving yourself a message");


 // Tony the Robot is ready for battle!
//console.log(playerName + " is ready for battle!");

// "Tony the Robot is ready for battle!"
//console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
//console.log("Your robot, " + playerName + ", has won!");