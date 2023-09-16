document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
  });
});

function openModal(){
  let modal= document.querySelector('#modal-window');
  modal.classList.add("showModal");
}

function closeM(){
    let m= document.querySelector('#modal-window');
  m.classList.remove("showModal");
}

document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}

const cardItems = document.querySelectorAll('.main-card');
const modalHeader = document.querySelector('.modalHeader-js');
const modalCardPrice = document.querySelector('.amount');
const modalCardDesp = document.querySelector('.desp');
const modalImage = document.querySelector('.modal-image-wrapper');
const modalMap = document.querySelector('.modal-gmap');

cardItems.forEach((cardItem) => {
  cardItem.addEventListener('click', function () {
    const cardHeader = cardItem.querySelector('.cardText-js');
    const cardPrice = cardItem.querySelector('.card-price');
    const cardDesp = cardItem.querySelector('.modal-info-desp');
    const cardImg = cardItem.querySelector('.card-image-wrapper');
    const cardGmap = cardItem.querySelector('.gmap');

    modalHeader.innerText = cardHeader.innerText;
    modalCardPrice.innerText = cardPrice.innerText;
    modalCardDesp.innerText = cardDesp.innerText;
    modalImage.innerHTML = cardImg.innerHTML;
    modalMap.innerHTML = cardGmap.innerHTML;

  });
});

window.onkeydown = function (event) {
  if(event.keyCode == 27) {
    closeM();
  }
}

var modal =  document.querySelector('#modal-window');
window.onclick = function (event) {
  if(event.target == modal) {
    closeM();
  }
}




$(document).ready(function() {

  var guestAmount = $('#guestNo');

  $('#cnt-up').click(function() {
    guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
  });
  $('#cnt-down').click(function() {
    guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
  });

  $('.btn').click(function() {

    var $btn = $('.btn');

    $btn.toggleClass('booked');
    $('.diamond').toggleClass('windup');
    $('form').slideToggle(300);
    $('.linkbox').toggle(200);

    if ($btn.text() === "BOOK NOW") {
      $btn.text("BOOKED!");
    } else {
      $btn.text("BOOK NOW");
    }
  });
});