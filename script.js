/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

var x = 50;
var y = 50;
var speedX = 5;
var speedY = 5;
var ellipsBreedte = 80;
var ellipsHoogte = 80;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
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

  // teken een cirkel
  ellipse(x,y,ellipsBreedte,ellipsHoogte);

  // positie van bal updaten
  x = x + speedX;
  y = y + speedY;

  if (y >= 720 - (ellipsHoogte * 0.5) || y <= ellipsHoogte * 0.5) {
    speedY = speedY * -1;
  }

  if (x >= 1280 - (ellipsBreedte * 0.5) || x <= ellipsBreedte * 0.5) {
    speedX = speedX * -1;
  }

}