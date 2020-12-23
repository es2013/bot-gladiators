
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

 // function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
  
    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore") || 0;
  
    // if player have more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
  
      alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
      alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
  
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
      startGame();
    } else {
      window.alert("Thank you for playing Bot Gladiators! Come back soon!");
    }
  };

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
  
    // randomly change turn order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
  
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
  
        var damage = randomNum(playerInfo.attack - 3, playerInfo.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
          playerInfo.name +
            " attacked " +
            enemy.name +
            ". " +
            enemy.name +
            " now has " +
            enemy.health +
            " health remaining."
        );
  
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
  
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
  
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // player gets attacked first
      } else {
        var damage = randomNum(enemy.attack - 3, enemy.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name +
            " attacked " +
            playerInfo.name +
            ". " +
            playerInfo.name +
            " now has " +
            playerInfo.health +
            " health remaining."
        );
  
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
    }
  };


// Start of Shop function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for "REFILL", 2 for "UPGRADE", or 3 to "LEAVE" to make a choice.'
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
  
    // use switch case to carry out action
    switch (shopOptionPrompt) {
    //   case 1:
        //   if (playerInfo.money >= 7) {
        //       window.alert("Refilling players health by 20 for 7 dollars.");
        //       playerInfo.health = playerInfo.health + 20;
        //       playerInfo.money = playerInfo.money = 7;
        //   }
        //   else {
        //       window.alert("you don't have enough money");
        //   }
        //   break;
      case 1:
        playerInfo.refillHealth(); 
        break;
      case 2:
         playerInfo.upgradeAttack();
        break;
      case 3:
        window.alert('Leaving the store.');
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
        shop();
        break;
    }
  };

   // function to set name
var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
      name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
  };

  //funtion to check if player wants to fight or skip
  var fightOrSkip = function(){
      var promptFight = window.prompt("Would you like to fight or skip this battle? Enter FIGHT or SKIP");
      if (promptFight ==="" || promptFight === null || !isNaN(promptFight)){
          window.alert("You didn't enter a valid choice. try again");
          return fightOrSkip(0);
      }
      //convert promptFight to all lowercase so we can check with less options
      promptFight = promptFight.toLowerCase();
      if (promptFight ==="skip") {
          var confirmSkip = window.confirm("Are you sure you want to skip?");

          if (confirmSkip){
              window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
              playerInfo.money = Math.max(0, playerInfo.money - 10);
              return true;
          }
        }
        return false;
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