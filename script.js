/*==boutton et menu apparition==*/
try {
const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
hamburgerButton.addEventListener("click", toggleNav)
function toggleNav(){
	hamburgerButton.classList.toggle("active")
	navigation.classList.toggle("active")
  }
}
catch { }

function sendEmail() {
    var yourMessage = document.getElementById("input_message").value;
    var subject = document.getElementById("input_subject").value;
    parent.location.href = "mailto:flouksac1@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}
