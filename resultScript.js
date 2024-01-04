document.addEventListener("DOMContentLoaded", function () {
  const emailid = localStorage.getItem("createdEmail");
  document.getElementById("email").innerHTML = emailid;
});
