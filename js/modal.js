const modal = document.getElementById('modal');
const btn = document.getElementById('modal-open');
const btnX = document.getElementsByClassName("modal__btn-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

btnX.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
 }
}