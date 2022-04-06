document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
    var i, tabcontent, tablinks;

    tabcontent= document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(kat).style.display = "flex";
  evt.currentTarget.className += " active";
}



/*
//Modal
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
*/


/*** MODAL NEU */
var modalBtns = document.getElementsByClassName("modalBtn");
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener("click", function() {
    var modalBox1 = this.nextElementSibling;
    modalBox1.classList.add('modalActive');
  });
}

var closeBtn = document.getElementsByClassName("close");
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    var modalBox = this.parentNode.parentNode;
    modalBox.classList.remove('modalActive');
  });
}