function fun(){
  var nobG = document.getElementById("NG").value;
  var res = document.getElementById("res");

  res.style.display = "block";
    if(nobG == "") {
      res.style.backgroundColor = "red";
      res.style.color = "white";
      res.innerHTML = "Please input an answer";
    } else if (nobG == "Noble Gases") {
      alert("You got it right!");
      res.style.backgroundColor = "green";
      res.style.color = "white";
      res.innerHTML = "You're smart!";

    } else {
      res.style.backgroundColor = "red";
      res.style.color = "white";
      res.innerHTML = "Nope! Try again!";
    }
}
