//Ajout d'une action qui se déclenche au clic suivie de l'activation de la fonction
document.addEventListener('submit', function button() {
  //Déclaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var birthDate = document.getElementById('birthDate').value;
  var result = (shoeSize * 2 + 5) * 50 - birthDate + 1769;
  if(isNaN(shoeSize) || isNaN(birthDate)) {
    alert('erreur... caractères non valides.');
  } else {
    alert(result);
  }
});
