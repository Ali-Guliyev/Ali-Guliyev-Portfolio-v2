<script setup>
import {
  removeLastEl,
  randomIntNumber,
  randomArrItem,
  randomFloatNumber,
} from "../composables/utilities";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
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
      rowEl.style.display = "flex";
      rowEl.style.flexDirection = "column";
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

  // * GSAP Animations
  const contLeft = document.querySelector(".container .left");
  const contRightTerminal = document.querySelector(".container .right");

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(contLeft, {
    duration: 1,
    x: "-50px",
    opacity: 0,
    scrollTrigger: contLeft,
  });
});
</script>

<template>
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
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

header {
  position: relative;
  @include flex();
  padding: 0 120px;

  .container {
    z-index: 1;
    max-width: 1500px;
    width: 100%;
    margin-top: -50px;
    @include flex(space-between);

    .right.terminal {
      max-width: 900px;
      width: 100%;
      max-height: 500px;
      border: 1px solid black;
      background-color: rgba(19, 19, 19, 0.75);
      border-radius: 25px;
      overflow: hidden;

      .typing-area {
        font-weight: bolder;
        height: 100%;
        @include flex(space-evenly, start);

        .row {
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

@media screen and (max-width: 1200px) {
  header .container {
    flex-direction: column;
    text-align: center;

    .left {
      margin-bottom: 30px;
    }

    .right.terminal {
      min-width: 300px;
      height: 400px;
    }
  }
}
</style>
