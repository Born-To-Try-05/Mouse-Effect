const container = document.querySelector(".container");

for (let i = 0; i < 320; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.onmouseenter = function (e) {
    let currentColor = setColor();
    e.target.style.background = `${currentColor}`;
    e.target.style.boxShadow = `0 0 10px ${currentColor}, 0 0 100px ${currentColor}`;
  };
  square.onmouseleave = function (e) {
    e.target.style.background = "#1d1d1d";
    e.target.style.boxShadow = "0 0 2px #000";
  };
}

function setColor() {
  const charColor = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += charColor[Math.floor(Math.random() * charColor.length)];
  }
  return color;
}
