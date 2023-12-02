var btn = document.querySelector(".click-me");
var img = document.querySelector(".img");

var count = 0;
btn.onclick = function () {
  count = count + 1;
  if (count > 7) {
    count = 1;
  }
  img.src = "images/" + count + ".jpg";
};
btn.onclick();
