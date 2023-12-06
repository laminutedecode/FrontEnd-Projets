$(document).ready(function() {
    let count = 0;
  
    $('.btn-ajouter').on('click', function() {
      count++;
      $(".panier .number").text(count);
    });
  });
  