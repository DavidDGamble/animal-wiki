window.onload = function() {
  eventHandler();
}

//--------------------------------------------------------


function eventHandler() {
  let form = document.querySelector('form')
  form.onchange = function(event) {
    console.log(document.getElementById('turtle').checked);
    event.preventDefault();
    check();
    
  }
}

function check() {
  if (document.getElementById('turtle').checked === true) {
    document.querySelector('div#turtle').removeAttribute('class');
  } else {
    document.querySelector('div#turtle').setAttribute('class', 'hidden');

  }
  if (document.getElementById('snake').checked === true) {
    document.querySelector('div#snake').removeAttribute('class');
  } else {
    document.querySelector('div#snake').setAttribute('class', 'hidden');
  }
  if (document.getElementById('dragonfly').checked === true) {
    document.querySelector('div#dragonfly').removeAttribute('class');
  } else {
    document.querySelector('div#dragonfly').setAttribute('class', 'hidden');
  }
}