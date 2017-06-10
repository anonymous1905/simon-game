function SimonGame(){
this.colors = ['red','green', 'blue', 'yellow '];
this.sequence = [];

this.userClickCount = 0;

this.round = 1;
}

SimonGame.prototype.startGame = function (){
console.log ('Starting the game...');
this.addColor();

this.showSequence();

};

//Chooses one of the 4 colors at random and adds it to the sequence
SimonGame.prototype.addColor = function () {
  var randomIndex = Math.floor(Math.random() * 4);

  this.sequence.push (this.colors [randomIndex] );
};

SimonGame.prototype.showSequence = function () {
var ourSequence = this.sequence;
var i = 0;

$('#buttons-container').addClass('blocked');

var intervalId = setInterval(function(){
  if (i >= ourSequence.length) {
    clearInterval (intervalId);
    $('#buttons-container').removeClass('blocked');

    return;
  }

  $("#"+ ourSequence[i]).addClass("lighton");


//after 700 ms
  setTimeout (function () {

    $('button').removeClass('lighton');

  }, 700);
  i+=1;

}, 1250);

};

SimonGame.prototype.nextRound = function (){
  this.addColor();
  this.showSequence();
  $('#counter').html(this.round);
  this.userClickCount =  0;

  this.round += 1;
};

  SimonGame.prototype.gameOver = function () {
    this.sequence = [];
    this.userClickCount = 0;
    this.round = 1;
    $('#counter').html(0);

    this.startGame ();

  };
