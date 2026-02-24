function login() {
  let mobile = document.getElementById("mobile").value;
  if (mobile.length < 10) {
    alert("Enter valid mobile number");
    return;
  }
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("mainApp").classList.remove("hidden");
}

function showBooking() {
  document.getElementById("bookingPage").classList.toggle("hidden");
}
