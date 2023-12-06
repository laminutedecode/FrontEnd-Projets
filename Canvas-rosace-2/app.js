    // Récupérer le canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Définir les variables de la rosace
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 150;
    var petalCount = 6;
    var petalLength = 50;
    var petalWidth = 20;
    var rotation = 0;

    // Dessiner la rosace
    function drawRosace() {
        // Effacer le canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dessiner chaque pétale
        for (var i = 0; i < petalCount; i++) {
            // Calculer l'angle du pétale
            var angle = i * (360 / petalCount) + rotation;

            // Calculer les coordonnées du début du pétale
            var startX = x + radius * Math.cos(angle * Math.PI / 180);
            var startY = y + radius * Math.sin(angle * Math.PI / 180);

            // Calculer les coordonnées du milieu du pétale
            var midX = x + (radius + petalLength / 2) * Math.cos(angle * Math.PI / 180);
            var midY = y + (radius + petalLength / 2) * Math.sin(angle * Math.PI / 180);

            // Calculer les coordonnées de la fin du pétale
            var endX = x + (radius + petalLength) * Math.cos(angle * Math.PI / 180);
            var endY = y + (radius + petalLength) * Math.sin(angle * Math.PI / 180);

            // Dessiner le pétale
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(midX, midY, endX, endY);
            ctx.quadraticCurveTo(midX, midY + petalWidth, startX, startY);
            ctx.closePath();
            ctx.fillStyle = "hsl(" + angle + ", 80%, 60%)";
            ctx.fill();
        }

        // Faire tourner la rosace
        rotation += 1;

        // Demander une nouvelle frame
        requestAnimationFrame(drawRosace);
    }

    // Lancer le dessin de la rosace
    drawRosace();