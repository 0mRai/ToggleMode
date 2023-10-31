var i = document.querySelector(".custom-control-label");
var j = document.querySelector(".custom-control-label");
var count = 0;
i.addEventListener("click", function a() {
  // document.body.style.backgroundColor = "black";
  // j.style.color="white";
  // count++;
  if (count % 2 !== 0) {
    document.body.style.backgroundColor = "white";
    j.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    j.style.color = "white";
  }
  count++;
});
