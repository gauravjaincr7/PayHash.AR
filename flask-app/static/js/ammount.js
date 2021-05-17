document.getElementById("ether").addEventListener("change", myFunction);

function myFunction() {
    var x = document.getElementById("ether");
    console.log(x.value);
    var y = document.getElementById("s")
    y.innerHTML = x.value
  }

  submitme = document.getElementById("submitme");
  submitme.addEventListener(
    "click",
    function (ev) {
      console.log("form submitting");
  
      document.getElementById("myForm").submit();
      ev.preventDefault();
    },
    false
  );

  