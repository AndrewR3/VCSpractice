function fun() {
  var theClass = document.getElementById("theClass").value;
  var theTeacher = document.getElementById("theTeacher").value;
  var topic = document.getElementById("topic").value;
  var secret = document.getElementById("secret").value;
  var res = document.getElementById("res");

  res.style.display = "block";
  if (theClass == "" || theTeacher == "" || topic == "" || secret == "") {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Please fill in all the fields";

  }
  else if (secret.length < 3)
   {
    res.style.backgroundColor = "red";
    res.style.color = "white";
    res.innerHTML = "Password too short!";
  }

else  if (theClass == "Math" && theTeacher == "Smith" && topic == "Quadratics" && secret == "Quad"){

//alert("yeye it works!")
//window.open("https://www.google.com"); //New Tab
location.replace("pages/quadratic.html"); //Stupidly Replaces Tab
}

  else {
    res.style.backgroundColor = "green";
    res.style.color = "white";
    res.innerHTML = "Sorry, I do not recognize that information - Refresh the Page and Try Again!";
  }
}
