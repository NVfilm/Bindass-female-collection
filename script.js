const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappMessage =
`Hello Bindass Female Collection,

Name: ${name}
Phone: ${phone}

Message:
${message}`;

  let whatsappURL =
`https://wa.me/918130548222?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");

});