
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



//start a new game
var startGame = function() {
    //reset player stats
   playerInfo.reset();
    // fight enemy if playerInfo.name is still alive
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  // start the enemy with health between 40 and 60
       // enemy.health = Math.floor(math.random() * 21) + 40;
        pickedEnemyObj.health= randomNum(40,60);
  
        fight(pickedEnemyObj);
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! you have a score of " + playerInfo.money+ ".");
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
var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive 
  while (enemy.health > 0 && playerInfo.health > 0) {
    //   Ask whether to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP");
    //if player chooses to skip, then nothing happens
    if (promptFight === "skip"|| promptFight==="SKIP" ){
        var confirmSkip = window.confirm("Are you sure you want to skip?");
        // If skip TRUE
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye");
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            break;
        }
   } 
        // remove enemys health
       
   //generate random damage value based on player's attack powers
    var damage = randomNum(playerInfo.attack - 3,playerInfo.attack);
    
    enemy.health = Math.max(0,enemy.health - playerInfo.attack);

    console.log(playerInfo.name + ' attacked ' + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health points");


    //    Check Enemy's health

   if (enemy.health <= 0){
       window.alert(enemy.name + " has died!");

    //    award money for destroying enemy
        playerInfo.money = playerInfo.money + 20;
        break;
   } else {
       window.alert (enemy.name + " has " + enemy.health + " health points");
   }

   // remove players's health by subtracting the amount set in the enemy.attack variable
   var damage = randomNum(enemy.attack - 3, enemy.attack);
   playerInfo.health = Math.max(0,playerInfo.health - enemy.attack);
   console.log(
     enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
   );



    // check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
    // leave while() loop if player is dead
        break;
    } else {
    window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
        //   if (playerInfo.money >= 7) {
        //       window.alert("Refilling players health by 20 for 7 dollars.");
        //       playerInfo.health = playerInfo.health + 20;
        //       playerInfo.money = playerInfo.money = 7;
        //   }
        //   else {
        //       window.alert("you don't have enough money");
        //   }
        //   break;
      case 'REFILL':
        playerInfo.refillHealth(); 
        break;
      case 'upgrade':
      case 'UPGRADE':
         playerInfo.upgradeAttack();
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
  // replacing individual variables with a PlayerInfo object
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    money: 10,
    attack: 10,
    reset:function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, 
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("you don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money>= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -= 7;
        } else {
            window.alert("you don't have enough money!");
        }
    }
};
//create similar object array for enemybots
var enemyInfo = [
    {
        name: "robocop",
        attack: randomNum(10,14),
    },
    {
        name:"deathroid",
        attack:randomNum(10,14),
    },
    {
        name: "kyle",
        attack:randomNum(10,14)
    }
];

startGame();


//Note the lack of quotations marks around playerInfo.name
//window.alert(playerInfo.name);
//console.log("this logs a string, good for leaving yourself a message");


 // Tony the Robot is ready for battle!
//console.log(playerInfo.name + " is ready for battle!");

// "Tony the Robot is ready for battle!"
//console.log(playerInfo.name + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
//console.log("Your robot, " + playerInfo.name + ", has won!");