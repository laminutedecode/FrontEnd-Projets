let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
})


function distanceMilieuCercle(x1,y1,x2,y2) {

    var xDistance = x2 -x1;
    var yDistance = y2 -y1;
    // racine carre de x2-x1 au carre + y2 - y1 au carre

    return Math.sqrt(Math.pow(xDistance,2) + Math.
    pow(yDistance,2))
}

class Circle {
    constructor(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2* Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}
}
var circle1 = new Circle (300,300,100,'black');
var circle2 = new Circle (undefined, undefined, 30, 'red');
function animate(){
requestAnimationFrame(animate)
ctx.clearRect(0,0,canvas.width,canvas.height);

circle1.draw();

canvas.addEventListener('mousemove', function(e) {
    circle2.x = e.clientX;
    circle2.y = e.clientY;
})
circle2.draw();

if(distanceMilieuCercle(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius + circle2.radius) {
    circle1.color = 'red'
} else {
    circle1.color = 'black'
}
}


animate();