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

  if (
    !Interval
  ) //Agar koi interval already running nhi hai tabhi naya interval create karo
  //Isse Start button ko baar-baar click karne par multiple intervals nhi banenge
  {
    Interval = setInterval(changeBGColor, 1000);
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChangingColor = function () {
  clearInterval(Interval);
  Interval = null;
  // yaha pe null Variable ko reset kar rahe hain
  // Taaki !Interval dobara true ho aur Start se naya interval create ho sake
};

document.querySelector("#stop").addEventListener("click", stopChangingColor);
