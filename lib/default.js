// ------------------------------------------------
// Copyright © Microsoft Corporation. All rights reserved
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//-------------------------------------------------
var losepost1 = 0
var losestreak1 = 0
var loselongest1 = 0


var winpost1 = 0
var winstreak1 = 0
var winlongest1 = 0

var compare = function (choice1) {
    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
 
    var choice2 = computerChoice
    youWin = "COMPUTER: " + choice2.toUpperCase() + " YOU WIN!!!";
    youLose = "COMPUTER: " + choice2.toUpperCase() + " YOU LOSE!!!";

    if (choice1 === choice2) {
        return "TIE! PLEASE PICK AGAIN!";

    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            winpost1++
            winstreak1++
            losestreak1 = 0
            return youWin;
        }
        else {
            losepost1++
            losestreak1++
            winstreak1 = 0
            return youLose;
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            winpost1++
            winstreak1++
            losestreak1 = 0
            return youWin;
        }
        else {
            losepost1++
            losestreak1++
            winstreak1 = 0
            return youLose;
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            losepost1++
            losestreak1++
            winstreak1 = 0
            return youLose;
        }
        else {
            winpost1++
            winstreak1++
            losestreak1 = 0
            return youWin;
        }
    }
    else {
        winpost1++
        winstreak1++
        losestreak1 = 0
        return youWin;
    }
  
 }

function myRockFunction() {
    var result = compare("rock");
  

    document.getElementById("demo").innerHTML = "You: Rock".toUpperCase();
    document.getElementById("result").innerHTML = result;

    if (winstreak1 > winlongest1) {
        winlongest1 = winstreak1
    }

    if (losestreak1 > loselongest1) {
        loselongest1 = losestreak1
    }

    if ((winstreak1 != 0) && ((winstreak1 % 3) === 0)) {
        document.getElementById("freebtn").disabled = false;
    }

    document.getElementById("winpost1").innerHTML = winpost1;
    document.getElementById("winstreak1").innerHTML = winstreak1;
   
    document.getElementById("winlongest1").innerHTML = winlongest1;
    document.getElementById("losepost1").innerHTML = losepost1;
    document.getElementById("losestreak1").innerHTML = losestreak1;
    document.getElementById("loselongest1").innerHTML = loselongest1;
    if (result === youWin) {
       document.getElementById('result').style.color = 'green'
    }
    else if (result === youLose) {
        document.getElementById('result').style.color = 'red'
    }
    else {
        document.getElementById('result').style.color = 'black'
    }
}
function myPaperFunction() {
    var result = compare("paper");

    document.getElementById("demo").innerHTML = "You: Paper".toUpperCase();
    document.getElementById("result").innerHTML = result;

    if (winstreak1 > winlongest1) {
        winlongest1 = winstreak1
    }

    if (losestreak1 > loselongest1) {
        loselongest1 = losestreak1
    }

    if ((winstreak1 != 0) && ((winstreak1 % 3) === 0)) {
        document.getElementById("freebtn").disabled = false;
    }
    document.getElementById("winpost1").innerHTML = winpost1;
    document.getElementById("winstreak1").innerHTML = winstreak1;
    document.getElementById("winlongest1").innerHTML = winlongest1;
    document.getElementById("losepost1").innerHTML = losepost1;
    document.getElementById("losestreak1").innerHTML = losestreak1;
    document.getElementById("loselongest1").innerHTML = loselongest1;
    if (result === youWin) {
        document.getElementById('result').style.color = 'green'
    }
    else if (result === youLose) {
        document.getElementById('result').style.color = 'red'
    }
    else {
        document.getElementById('result').style.color = 'black'
    }
}
function myScissorsFunction() {

    var result = compare("scissors");

    document.getElementById("demo").innerHTML = "You: Scissors".toUpperCase();
    document.getElementById("result").innerHTML = result;

    if (winstreak1 > winlongest1) {
        winlongest1 = winstreak1
    }

    if (losestreak1 > loselongest1) {
        loselongest1 = losestreak1
    }

    if ((winstreak1 != 0) && ((winstreak1 % 3) === 0)) {
        document.getElementById("freebtn").disabled = false;
    }
    document.getElementById("winpost1").innerHTML = winpost1;
    document.getElementById("winstreak1").innerHTML = winstreak1;
    document.getElementById("winlongest1").innerHTML = winlongest1;
    document.getElementById("losepost1").innerHTML = losepost1;
    document.getElementById("losestreak1").innerHTML = losestreak1;
    document.getElementById("loselongest1").innerHTML = loselongest1;
    if (result === youWin) {
        document.getElementById('result').style.color = 'green'
    }
    else if (result === youLose) {
        document.getElementById('result').style.color = 'red'
    }
    else {
        document.getElementById('result').style.color = 'black'
    }
}
function myFreeFunction() {
    var result = compare("free");

    document.getElementById("demo").innerHTML = "You: Scissors".toUpperCase();
    document.getElementById("result").innerHTML = result;

    if (winstreak1 > winlongest1) {
        winlongest1 = winstreak1
    }

    if (losestreak1 > loselongest1) {
        loselongest1 = losestreak1
    }
    document.getElementById("freebtn").disabled = true;
   
    document.getElementById("winpost1").innerHTML = winpost1;
    document.getElementById("winstreak1").innerHTML = winstreak1;
    document.getElementById("winlongest1").innerHTML = winlongest1;
    document.getElementById("losepost1").innerHTML = losepost1;
    document.getElementById("losestreak1").innerHTML = losestreak1;
    document.getElementById("loselongest1").innerHTML = loselongest1;
    if (result === youWin) {
        document.getElementById('result').style.color = 'green'
    }
    else if (result === youLose) {
        document.getElementById('result').style.color = 'red'
    }
    else {
        document.getElementById('result').style.color = 'black'
    }
}