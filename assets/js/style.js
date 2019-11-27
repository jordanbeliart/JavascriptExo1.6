//Ajout d'une action qui se déclenche au clic suivie de l'activation de la fonction
document.addEventListener('submit', function button() {
  //Déclaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var birthDate = document.getElementById('birthDate').value;
  var result = (shoeSize * 2 + 5) * 50;
  alert(result);
});
