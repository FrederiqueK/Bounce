var ballen = [];

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

var x = 50; 
var y = 50; 
var speedX = 5; 
var speedY = 5; 



function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  for(var i = 0; i < bal.length; i++) {
  var randomX = random(50, 1230);
  var randomY = random(50, 670);
  var randomSpeedX = random(-5, 5);
  var randomSpeedY = random(-5, 5);
  }
}



/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(100, 100, 255);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');

 for(var i = 0; i < ballen.length; i++) {
ballen[i].show
ballen[i].update();

 }



}