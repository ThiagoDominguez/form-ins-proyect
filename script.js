function sendValues() {
  let form = document.forms["survey-form"];
  let formValues = " ";
  let nombre = form["name"];
  let email = form["email"];
  let number = form["number"];
  let menu = form["dropdown"];
  let inpRadio = form["user-pref"];
  // let inpCheck = form["req-dev"];
  let txtArea = form["text-area"];
  formValues = `${nombre.value}  | ${email.value}  |  ${number.value}  |  ${menu.value}  |  ${inpRadio.value}  |  ${txtArea.value}`;

  document.getElementById("values_form").innerHTML = formValues;
}
