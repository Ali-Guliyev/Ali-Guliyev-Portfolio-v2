<!-- <script setup>
// * Utility Functions
const removeLastEl = (string) => {
  let newStr = "";
  for (let i = 0; i < string.length - 1; i++) {
    newStr += string[i];
  }
  return newStr;
};

const randomIntNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomArrItem = (arr) => {
  return arr[randomIntNumber(0, arr.length - 1)];
};

const randomFloatNumber = (min, max) => {
  return Math.random() * (max + 1 - min) + min;
};

// * Greeting typing animation
const greetingSentence = "Welcome to my portfolio website.";
const greetingTypingArea = document.querySelector(
  ".greetingContainer .typingArea"
);

let greetingTypingTime = 100;

for (let i = 0; i < greetingSentence.length; i++) {
  setTimeout(() => {
    greetingTypingArea.textContent += greetingSentence[i];
  }, greetingTypingTime);
  greetingTypingTime += 100;
}

// * Website background circles
const circleContainer = document.querySelector(".circle-container");
const circleAmount = 30;
const colorsArr = [
  "#5bd228",
  "#5db139",
  "#2b760a",
  "#63bc3d",
  "#3e642e",
  "#378914",
  "#31651b",
];

circleContainer.style.height = "400vh";

const createCircles = () => {
  for (let i = 0; i < circleAmount; i++) {
    let newEl = document.createElement("div");
    newEl.classList.add("circle");
    newEl.style.backgroundColor = randomArrItem(colorsArr);
    let size = randomIntNumber(50, 100) + "px";
    newEl.style.width = size;
    newEl.style.height = size;
    newEl.style.top =
      randomIntNumber(
        10,
        parseInt(circleContainer.style.height.split("vh")[0]) - 10
      ) + "vh";
    newEl.style.left = randomIntNumber(100, window.innerWidth - 100) + "px";
    circleContainer.appendChild(newEl);
  }
};

createCircles();

// const animate = () => {
//   requestAnimationFrame(animate);
//   const speed = 0.5;

//   circleContainer.childNodes.forEach((circle) => {
//     circle.style.top = parseInt(circle.style.top.split("px")[0]) + speed + "px";

//     console.log(circle.style.top);
//   });
// };

// animate();

// * Header typing animation
const skillsWords = [
  "creating websites",
  "making games",
  "solving hard algorithmic questions.",
];

const typingArea = document.querySelector("header .typingArea");
const cursor = document.querySelector("header .cursor");
const addingTime = 100;
const typedWordsAmount = 1000;
let typingTime = addingTime;

typingTime += 1000;

for (let j = 0; j < typedWordsAmount; j++) {
  skillsWords.forEach((word, index) => {
    // Writing letters
    for (let i = 0; i < word.length; i++) {
      setTimeout(() => {
        typingArea.textContent += word[i];
      }, typingTime);
      typingTime += addingTime;
    }

    typingTime += 2000;

    // Removing letters
    for (let i = word.length; i > 0; i--) {
      setTimeout(() => {
        typingArea.textContent = removeLastEl(typingArea.textContent);
      }, typingTime);
      typingTime += addingTime;
    }
  });
}

// * Header Terminal Hacking Animation
const terminalTypingArea = document.querySelector(".terminal .typing-area");
const digitAmount = 30;
const rowsAmount = 20;

// Generate ROWS
for (let i = 0; i < rowsAmount; i++) {
  let rowEl = document.createElement("div");
  rowEl.classList.add("row");

  // Generate DIGITS
  for (let j = 0; j < digitAmount; j++) {
    rowEl.innerHTML += `<span>${randomArrItem([0, 1])}</span>`;
  }

  terminalTypingArea.appendChild(rowEl);
}

// * Terminal hacking animation
const terminalRows = document.querySelectorAll(".terminal .row");

let counterArr = [];
let addingTimeArr = [];

for (let i = 0; i < rowsAmount; i++) {
  counterArr.push(randomFloatNumber(0, 5));
}

terminalRows.forEach((row, rowIndex) => {
  row.childNodes.forEach((digit) => {
    counterArr[rowIndex] += 0.1;

    digit.style.animation = `fade-out 1s ease-in-out ${counterArr[rowIndex]}s infinite`;

    setTimeout(() => {
      digit.style.opacity = "1";
    }, counterArr[rowIndex] * 1000);
  });
});

// * Burger Menu and Navigation Bar animation
const burger = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav .links a");

const toggleNav = () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  links.forEach((link, linkIndex) => {
    if (nav.classList.contains("active")) {
      link.style.animation = `slide-in 0.8s ease-in-out ${
        linkIndex / 7
      }s forwards`;
    } else {
      link.style.animation = "";
    }
  });
};

burger.addEventListener("click", toggleNav);
document
  .querySelector("nav .clickingArea")
  .addEventListener("click", toggleNav);

// * Element fade-in animation when scrolling
const textContainer = document.querySelector(".container .left");
textContainer.style.animation = "fade-in-and-move 0.8s ease forwards";
</script> -->

<template>
  <div class="greetingContainer">
    <p>
      <span class="typingArea"> </span>
      <span class="cursor">|</span>
    </p>
  </div>

  <div class="circle-container"></div>

  <div class="burger-menu">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>

  <nav>
    <div class="clickingArea"></div>

    <div class="links">
      <a href="#home">Home</a>
      <a href="#about">About me</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <header id="home">
    <div class="container">
      <div class="left">
        <h1>Ali Guliyev</h1>
        <p>
          I love <span class="typingArea"></span>
          <span class="cursor"></span>
        </p>
      </div>

      <div class="right terminal">
        <div class="top">
          <div class="buttons">
            <div class="red"></div>
            <div class="yellow"></div>
            <div class="green"></div>
          </div>
        </div>
        <div class="typing-area"></div>
      </div>
    </div>
  </header>

  <section id="about">
    <h1 class="title">About me</h1>
  </section>

  <section id="work">
    <h1 class="title">My Work</h1>
  </section>
</template>

<style lang="scss">
.title {
  color: red;
}
</style>

<style lang="scss">
$green: rgb(15, 169, 15);

@mixin flex($justify: center, $align: center, $direction: row) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
  flex-direction: $direction;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Courier New", Courier, monospace;
  background: linear-gradient(
    to right,
    black,
    rgb(4, 19, 4),
    rgb(9, 69, 9),
    rgb(16, 168, 16)
  );
  color: $green;
}

section,
header {
  min-height: 100vh;
}

section {
  padding: 30px;

  .title {
    font-size: 25px;
    text-align: center;
  }
}

.circle-container {
  width: 100%;
  height: 400vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  .circle {
    border-radius: 50%;
    position: absolute;
    opacity: 0.7;
    background-color: #31651b;
  }
}

.burger-menu {
  z-index: 98;
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #073c07;
  border-radius: 50%;
  transition: all 0.15s ease;
  @include flex(center, center, column);

  &:hover {
    background: rgba(9, 63, 9, 0.6);
  }

  div {
    transition: all 0.25s ease;
    margin: 3px;
    width: 23px;
    height: 2.3px;
    background-color: $green;
  }
}

.burger-menu.active {
  .line-1 {
    transform: translate(1px, 8px) rotate(45deg);
    width: 25px;
  }

  .line-2 {
    opacity: 0;
  }

  .line-3 {
    transform: translate(1px, -8px) rotate(-45deg);
    width: 25px;
  }
}

.greetingContainer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  color: $green;
  text-align: center;
  animation: fade-out 1s ease 4s forwards;
  @include flex(center, center, column);

  p {
    font-size: 30px;
    margin-top: 5px;

    .cursor {
      font-weight: bold;
      font-size: 35px;
    }
  }
}

nav {
  opacity: 0;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(9, 63, 9, 0.9);
  transition: all 0.25s ease;
  @include flex();

  .links {
    list-style: none;
    text-align: center;
    @include flex(center, center, column);

    a {
      width: 100%;
      text-decoration: none;
      color: #15e815;
      position: relative;
      width: 300px;
      font-size: 20px;
      letter-spacing: 3px;
      transition: all 0.1s ease;
      border-radius: 20px;
      padding: 14px 20px;
      border: 2px solid #097d09;
      margin-top: 10px;
      opacity: 0;

      &:hover {
        background-color: #15e815;
        color: #073c07;
        font-weight: 700;
      }
    }
  }

  .clickingArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

nav.active {
  opacity: 1;
  pointer-events: all;
}

header {
  position: relative;
  @include flex();

  .container {
    z-index: 1;
    width: 80%;
    margin-top: -50px;
    @include flex(space-between);

    .right.terminal {
      width: 100%;
      max-width: 650px;
      height: 400px;
      border: 1px solid black;
      background-color: rgba(19, 19, 19, 0.75);
      border-radius: 25px;
      overflow: hidden;

      .typing-area {
        font-weight: bolder;
        height: 100%;
        @include flex(space-evenly, start);

        .row {
          display: flex;
          flex-direction: column;

          span {
            opacity: 0;
          }
        }
      }

      .top {
        @include flex(space-between);
        background-color: rgb(15, 15, 15);
        padding: 10px 20px;

        .buttons {
          @include flex();
          div {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 8px;
          }
          .red {
            background-color: rgb(255, 48, 48);
          }
          .yellow {
            background-color: rgb(255, 226, 63);
          }
          .green {
            background-color: rgb(0, 183, 0);
          }
        }
      }
    }

    .left {
      h1 {
        margin-bottom: 6px;
        font-size: 45px;
      }

      p {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .typingArea {
          display: flex;
          margin-left: 6px;
        }

        .cursor {
          height: 20px;
          width: 2px;
          margin-left: 5px;
          background-color: $green;
          animation: fade-out 0.3s ease-in-out infinite alternate;
        }
      }
    }
  }
}

#work {
}

#contact {
}

footer {
}

// * Animation keyframes
@keyframes fade-out {
  to {
    opacity: 0;
    pointer-events: none;
  }
}

@keyframes fade-in-and-move {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes slide-in {
  from {
    transform: translateX(60vw);
    opacity: 0;
  }
  to {
    transform: translateX(0vw);
    opacity: 1;
  }
}
</style>
