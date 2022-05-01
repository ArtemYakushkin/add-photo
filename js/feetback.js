const feedback = document.getElementById('feedback');
const btnFeed = document.getElementById('feedback-open');
const btnXFeed = document.getElementsByClassName("feedback__btn-close")[0];

btnFeed.onclick = function() {
  feedback.style.display = "block";
}

btnXFeed.onclick = function() {
  feedback.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == feedback) {
    feedback.style.display = "none";
 }
}