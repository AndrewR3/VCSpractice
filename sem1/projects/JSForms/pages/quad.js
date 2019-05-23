function fun(){
  var rootOne = document.getElementById("rootOne").value;
  var rootTwo = document.getElementById("rootTwo").value;
  var res = document.getElementById("res");

  res.style.display = "block";
    if(rootOne == "" || rootTwo == "" ) {
      res.style.backgroundColor = "red";
      res.style.color = "white";
      res.innerHTML = "Fill in all the boxes please!";
    } else if (rootOne == "-2" && rootTwo == "3") {
      alert("You got it right!");
      res.style.backgroundColor = "green";
      res.style.color = "white";
      res.innerHTML = "You're smart!";

    } else if (rootOne == "3" && rootTwo == "-2") {
      alert("Cool! You're right!");
      res.style.backgroundColor = "green";
      res.style.color = "white";
      res.innerHTML = "Nice!";

    } else {
      res.style.backgroundColor = "red";
      res.style.color = "white";
      res.innerHTML = "Nope! Try again!";
      location.replace("howtoQuad.html");
    }
}
