const button = document.getElementById("button-email");
button.addEventListener("click", function (event) {
  event.preventDefault();
  const id = document.getElementById("id").value;
  // console.log(id);
  const firstName = document.getElementById("firstName").value;
  // console.log(firstName);
  const lastName = document.getElementById("lastName").value;
  // console.log(lastName);
  if (!id || !firstName) {
    alert("Please fill out the required details!");
    return;
  } else {
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id}@idp.com`;
    localStorage.setItem("createdEmail", email);
    document.getElementById("user-form").reset();
    window.location.href = "result.html";
  }
});