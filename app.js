const cardArray = [
  {
    name: "Eren",
    img: "images/Eren.jpeg",
  },
  {
    name: "Light",
    img: "/images/light.jpeg",
  },
  {
    name: "mob",
    img: "/images/mob.jpeg",
  },
  {
    name: "mori",
    img: "/images/mori.jpeg",
  },
  {
    name: "musashi",
    img: "/images/musashi.jpeg",
  },
  {
    name: "saitama",
    img: "/images/saitama.jpeg",
  },
  {
    name: "shadow",
    img: "/images/shadow.jpeg",
  },
  {
    name: "thorfinn",
    img: "/images/thorfinn.jpeg",
  },
  {
    name: "Eren",
    img: "images/Eren.jpeg",
  },
  {
    name: "Light",
    img: "/images/light.jpeg",
  },
  {
    name: "mob",
    img: "/images/mob.jpeg",
  },
  {
    name: "mori",
    img: "/images/mori.jpeg",
  },
  {
    name: "musashi",
    img: "/images/musashi.jpeg",
  },
  {
    name: "saitama",
    img: "/images/saitama.jpeg",
  },
  {
    name: "shadow",
    img: "/images/shadow.jpeg",
  },
  {
    name: "thorfinn",
    img: "/images/thorfinn.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank1.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    // console.log(card, i);
    grid.append(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionId1 = cardsChosenIds[0];
  const optionId2 = cardsChosenIds[1];
  console.log("check for match");

  if (optionId1 === optionId2) {
    cards[optionId1].setAttribute("src", "images/blank1.png");
    cards[optionId2].setAttribute("src", "images/blank1.png");
    alert("You have clicked the same card!!");
  }

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match!");
    cards[optionId1].setAttribute("src", "images/download.png");
    cards[optionId2].setAttribute("src", "images/download.png");
    cards[optionId1].removeEventListener("click", flipcard);
    cards[optionId2].removeEventListener("click", flipcard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionId1].setAttribute("src", "images/blank1.png");
    cards[optionId2].setAttribute("src", "images/blank1.png");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent =
      "Congratulations, You have found every match!!!";
  }
}

function flipcard() {
  const cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenIds.push(cardID);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
