// Récupérer le canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Charger les images
var imgFond = new Image();
imgFond.src = "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";

var imgTerre = new Image();
imgTerre.src = "./src/terre.png";
imgTerre.id = "img-terre";

var imgSoleil = new Image();
imgSoleil.src = "./src/sun.png";
imgSoleil.id = "img-soleil";

var imgLune = new Image();
imgLune.src = "./src/lune.png";
imgLune.id = "img-lune";


// Variables de position et de vitesse
var xSoleil = canvas.width / 2;
var ySoleil = canvas.height / 2;
var xTerre = xSoleil + 150;
var yTerre = ySoleil;
var xLune = xTerre + 50;
var yLune = yTerre;
var angleTerre = 0;
var angleLune = 0;
var angleSoleil = 0;
var vitesseTerre = 0.006;
var vitesseLune = 0.008;
var vitesseSoleil = 0.002;

// Boucle de dessin
function dessiner() {
  // Effacer le canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner le fond
  context.drawImage(imgFond, 0, 0);

  // Mettre à jour l'angle du Soleil
  angleSoleil += vitesseSoleil;

  // Dessiner le Soleil
  context.save();
  context.translate(xSoleil, ySoleil);
  context.rotate(angleSoleil);
  context.drawImage(imgSoleil, -imgSoleil.width / 2, -imgSoleil.height / 2);
  context.restore();

  // Mettre à jour les positions de la Terre et de la Lune
  xTerre = xSoleil + 200 * Math.cos(angleTerre);
  yTerre = ySoleil + 200 * Math.sin(angleTerre);
  xLune = xTerre + 100 * Math.cos(angleLune);
  yLune = yTerre + 100 * Math.sin(angleLune);

  // Dessiner la Terre
  context.save();
  context.translate(xTerre, yTerre);
  context.rotate(angleTerre);
  context.drawImage(imgTerre, -imgTerre.width / 2, -imgTerre.height / 2);
  context.restore();

  // Dessiner la Lune
  context.save();
  context.translate(xLune, yLune);
  context.rotate(angleLune);
  context.drawImage(imgLune, -imgLune.width / 2, -imgLune.height / 2);
  context.restore();

  // Mettre à jour les angles
  angleTerre += vitesseTerre;
  angleLune += vitesseLune;

  // Demander une nouvelle frame
  requestAnimationFrame(dessiner);
}

        // Lancer la boucle de dessin
        dessiner();