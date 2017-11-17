var total = 0; //this will hold the running total for all the clicked gem's values
var gemRand = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    // Make our other variables global to the runtime of our application
    var firstGem; // between 1-12 for each gem
    var secondGem;
    var thirdGem;
    var fourthGem;
    var target; //total that player must match to win between   19-120

    // create a function that randomly chooses a value between 1 and 12 for a gem
    function gemNumber() {
        gemRand = (Math.floor(Math.random() * 12) + 1);
        return gemRand;
    };
    console.log("gemRand is a " + typeof gemRand);

    // randomly chooses a value between 19 and 120 for the target
    function targetRand() {
        target = (Math.floor(Math.random() * 102) + 19);
        console.log("target is : " + target);
        document.getElementById("target").innerHTML = target;
    }
    targetRand();

    function resetGame() {
        firstGem = gemNumber();
        secondGem = gemNumber();
        thirdGem = gemNumber();
        fourthGem = gemNumber();
        total = 0;
        document.getElementById("total").innerHTML = total;
        targetRand();
        console.log(target + total);
    }

    // Add an on click listener to the element that has the class "reset"
    $(".reset").on("click", function () {
        resetGame();
        console.log("Game has been reset");
        console.log("gemNumber1 is : " + firstGem);
        console.log("gemNumber2 is : " + secondGem);
        console.log("gemNumber3 is : " + thirdGem);
        console.log("gemNumber4 is : " + fourthGem);
    });

    //try swapping these out for resetGame();
    firstGem = gemNumber();
    secondGem = gemNumber();
    thirdGem = gemNumber();
    fourthGem = gemNumber();

    console.log("gemNumber1 is : " + firstGem);
    console.log("gemNumber2 is : " + secondGem);
    console.log("gemNumber3 is : " + thirdGem);
    console.log("gemNumber4 is : " + fourthGem);
    console.log("firstGem is " + firstGem);
    console.log("firstGem is a " + typeof firstGem);

    function changeToBlack() {
        document.getElementById("line1").style.color = "black";
    }

    function youLose() {
        resultYouLose =
            "<h3>You Lose!</h3>";
        document.getElementById("line1").innerHTML = resultYouLose;
        document.getElementById("line1").style.color = "red";
        resultBlank = "<p></p>";
        document.getElementById("line2").innerHTML = resultBlank;
        setTimeout(changeToBlack, 2500);
    }

    function youWin() {
        resultYouWin =
            "<h3>You Win!</h3>";
        document.getElementById("line1").innerHTML = resultYouWin;
        document.getElementById("line1").style.color = "rgb(30, 255, 0)";
        resultBlank = "<p></p>";
        document.getElementById("line2").innerHTML = resultBlank;
        setTimeout(changeToBlack, 2500);
    }

    // .style.color = "magenta";

    function winLose() {
        if (total === target) {
            wins = wins + 1;
            console.log("Wins : " + wins);
            resultHtml01 = wins;
            resultHtml02 = losses;
            document.getElementById("winResult").innerHTML = resultHtml01;
            document.getElementById("loseResult").innerHTML = resultHtml02;
            youWin();
            resetGame();
        }
        if (total > target) {
            losses = losses + 1;
            console.log("Losses: " + losses);
            resultHtml01 = wins;
            resultHtml02 = losses;
            total = 0;
            document.getElementById("winResult").innerHTML = resultHtml01;
            document.getElementById("loseResult").innerHTML = resultHtml02;
            document.getElementById("total").innerHTML = total;
            youLose();
            resetGame();
        }
    }

    $("#gem1").on("click", function () {
        total = total + firstGem;
        document.getElementById("total").innerHTML = total;
        winLose();
        console.log("total is: " + total);
    });

    $("#gem2").on("click", function () {
        total = total + secondGem;
        document.getElementById("total").innerHTML = total;
        console.log("total is: " + total);
        winLose();
    });

    $("#gem3").on("click", function () {
        total = total + thirdGem;
        console.log("total is: " + total);
        document.getElementById("total").innerHTML = total;
        winLose();
    });

    $("#gem4").on("click", function () {
        total = total + fourthGem;
        console.log("total is: " + total);
        document.getElementById("total").innerHTML = total;
        winLose();
    });

});


