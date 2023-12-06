// Récupération du canvas et initialisation du contexte 2D
const canvas = document.getElementById('voteChart');
const ctx = canvas.getContext('2d');

// Configuration des données de vote
let voteData = {
  labels: ['Pomme', 'Banane', 'Orange'],
  datasets: [{
    label: 'Votes',
    data: [0, 0, 0],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }]
};

// Configuration du graphique
const chartConfig = {
  type: 'bar',
  data: voteData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

// Création du graphique initial
const voteChart = new Chart(ctx, chartConfig);

// Récupération des boutons de vote
const voteAppleBtn = document.getElementById('voteApple');
const voteBananaBtn = document.getElementById('voteBanana');
const voteOrangeBtn = document.getElementById('voteOrange');

// Configuration des événements de vote
voteAppleBtn.addEventListener('click', () => {
  voteData.datasets[0].data[0]++;
  voteChart.update();
});

voteBananaBtn.addEventListener('click', () => {
  voteData.datasets[0].data[1]++;
  voteChart.update();
});

voteOrangeBtn.addEventListener('click', () => {
  voteData.datasets[0].data[2]++;
  voteChart.update();
});
