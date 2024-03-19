function bonneReponse() {
  var bonnesReponses = document.querySelectorAll('.bonne-reponse:checked');
  return alert("Vous avez obtenu "+bonnesReponses.length+" bonne(s) reponse(s)");
}
let button=document.querySelector('button');
button.addEventListener("click",bonneReponse)