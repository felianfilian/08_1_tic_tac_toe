let gameOver = false;

let fields = [];

let currentShape = "circle";

let player1Panel = document.getElementById("player-1");
let player2Panel = document.getElementById("player-2");

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    fields[id] = currentShape;

    if (currentShape == "cross") {
      currentShape = "circle";
      player1Panel.classList.remove("player-inactive");
      player2Panel.classList.add("player-inactive");
    } else {
      currentShape = "cross";
      player2Panel.classList.remove("player-inactive");
      player1Panel.classList.add("player-inactive");
    }

    draw();
    checkForWin();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("d-none");
    }
    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("d-none");
    }
  }
}

function checkForWin() {
  let winner;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-0").style.transform = "scaleX(1)";
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("line-1").style.transform = "scaleX(1)";
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("line-2").style.transform = "scaleX(1)";
  }
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-3").style.transform = "scaleX(1)";
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("line-4").style.transform = "scaleX(1)";
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-5").style.transform = "scaleX(1)";
  }
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("line-6").style.transform =
      "rotate(-45deg) scaleX(1.2)";
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("line-7").style.transform =
      "rotate(45deg) scaleX(1.2)";
  }

  if (winner) {
    console.log("WINNER: " + winner);
    setTimeout(function () {
      document.getElementById("game-over-img").classList.remove("d-none");
      document.getElementById("restart-btn").classList.remove("d-none");
      document.getElementById("main-menu-btn").classList.remove("d-none");
    }, 1300);
    gameOver = true;
  }
}

function restart() {
  gameOver = false;
  fields = [];
  document.getElementById("game-over-img").classList.add("d-none");
  document.getElementById("restart-btn").classList.add("d-none");
  document.getElementById("main-menu-btn").classList.add("d-none");

  // reset lines
  for (let i = 0; i < 6; i++) {
    document.getElementById("line-" + i).style.transform = "scaleX(0)";
  }
  document.getElementById("line-6").style.transform =
    "rotate(-45deg) scaleX(0)";
  document.getElementById("line-7").style.transform = "rotate(45deg) scaleX(0)";

  for (let i = 0; i < 9; i++) {
    document.getElementById("circle-" + i).classList.add("d-none");
    document.getElementById("cross-" + i).classList.add("d-none");
  }
}
