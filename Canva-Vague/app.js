let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const color = {
    h: 300,
    s: 50,
    l: 50
}

const vague = {
    y: canvas.height/2,
    nbCourbes: 0.01,
    amplitude: 300,
    frequence: 0.01

}

var incremente = vague.frequence


function animate(){

requestAnimationFrame(animate);
// ctx.fillStyle = 'rgba(0,0,0,0.01)';
ctx.fillRect(0,0, canvas.width, canvas.height)
ctx.beginPath();
ctx.moveTo(0, canvas.Height / 2);
for(var i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, vague.y + Math.sin(i * vague.nbCourbes + incremente)* vague.amplitude * Math.sin(incremente))
}
ctx.strokeStyle = `hsl(${Math.abs(color.h * Math.sin(incremente))}, ${color.s}%,${color.l}%)`
ctx.stroke();
incremente +=  vague.frequence;
}
animate();