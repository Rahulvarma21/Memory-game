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

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank1.png");
    card.setAttribute("data-id", i);
    console.log(card, i);
    grid.append(card);
  }
}
createBoard();
