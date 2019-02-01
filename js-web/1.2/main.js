var n1, n2, result;
function setValues() {
n1 = Number(document.getElementById("n1").value);
n2 = Number(document.getElementById("n2").value)
}

function sum() {
  setValues();
  result = n1 + n2;
  alert("Result is "+result);
}

function rest() {
  setValues();
  result = n1 - n2;
  alert("Result is "+result);
}

function multiply() {
  setValues();
  result = n1 *n2;
  alert("Result is "+result);
}

function divide() {
  setValues();
  result = n1 / n2;
  alert("Result is "+result);
}
