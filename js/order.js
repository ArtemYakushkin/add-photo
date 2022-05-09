const order = document.getElementById('order');
const btnOrder = document.getElementById('order-open');
const btnXorder = document.getElementsByClassName("order__btn-close")[0];

btnOrder.onclick = function() {
  order.style.display = "block";
}

btnXorder.onclick = function() {
  order.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == order) {
    order.style.display = "none";
 }
}