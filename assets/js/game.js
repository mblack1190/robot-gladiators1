var playerName = window.prompt("What is your robot's name?");
 console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
}
if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
}
else {
    window.alert("You've lost your robot in battle.");
}
}

var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

for(var i = 0; i < enemyNames.length; i++) {
   if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1))
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    startGame();
  } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
  }
}
};
//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
for(var i = 0; i <enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + "is at" + i + "index");
}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

     //if player chooses to skip
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
        }
     }
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining."
    );
    
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died!");
   
        //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy is dead
        break;
        } else {
            window.alert(enemyName + "still has" + enemyHealth + "health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
        break;
        }else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
        }
    }
}
endGame();