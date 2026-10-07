const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor())

let Interval;
const startChangingColor = function () {
  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!Interval) {
    Interval = setInterval(changeBGColor, 1000);
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChangingColor = function () {
  clearInterval(Interval);
  Interval = null;
};

document.querySelector("#stop").addEventListener("click", stopChangingColor);
