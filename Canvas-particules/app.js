class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx, canvas) {
    this.draw(ctx);

    // Détection de collision avec les bords du canvas
    if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
      this.velocity.y = -this.velocity.y;
    }

    // Mise à jour de la position en fonction de la vélocité
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Création d'un tableau de particules
const particles = [];

for (let i = 0; i < 100; i++) {
  const radius = Math.random() * 20 + 5;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  const velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  };

  particles.push(new Particle(x, y, radius, color, velocity));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update(ctx, canvas);
  });
}

animate();

// Réinitialisation de la taille du canvas en cas de redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
