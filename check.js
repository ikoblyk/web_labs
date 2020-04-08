function Validate(form) {
  var x = document.getElementById("id-firstName").value;
  var y = document.getElementById("userPassword").value;
  var z = document.getElementById("id-lastName").value;
 

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Second name must be filled out");
    return false;
  }
  else if (y.length<10)  {
    alert("the password's length has to be at least 10");
    return false;
  }
  else if (y.length<10)  {
    alert("the password's length has to be at least 10");
    return false;
  }
  else if (!form.checkbox.checked)  {
    alert("you must agree to GoToNewYork's privacy policy!!!");
    return false;
  }

}
