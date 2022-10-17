<script setup>
import {
  removeLastEl,
  randomIntNumber,
  randomArrItem,
  randomFloatNumber,
} from "../composables/utilities";
import { gsap } from "gsap";

const rowsAmount = ref(0);
const digitAmount = 30;

onMounted(() => {
  // * Header Terminal Hacking Animation
  const terminalTypingArea = document.querySelector(".terminal .typing-area");

  gsap.to(terminalTypingArea, {
    opacity: 1,
    delay: 1,
    duration: 1,
  });

  const changeTerminalRowsForWindowWidth = () => {
    if (window.innerWidth < 500) {
      rowsAmount.value = 10;
    } else {
      rowsAmount.value = 20;
    }
  };

  changeTerminalRowsForWindowWidth();

  // Generate ROWS and DIGITS inside of a temrinal
  const createTerminalContent = () => {
    terminalTypingArea.innerHTML = "";

    // Generate ROWS
    for (let i = 0; i < rowsAmount.value; i++) {
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
  };

  createTerminalContent();

  // * Terminal hacking animation
  const animateTerminal = () => {
    const terminalRows = document.querySelectorAll(".terminal .row");
    let counterArr = [];
    for (let i = 0; i < rowsAmount.value; i++) {
      counterArr.push(randomFloatNumber(0, 1));
    }
    terminalRows.forEach((row, rowIndex) => {
      row.childNodes.forEach((digit) => {
        counterArr[rowIndex] += 0.08;
        digit.style.animation = `fade-out 1s ease-in-out ${counterArr[rowIndex]}s infinite`;
      });
    });
  };

  animateTerminal();

  // // * Header typing animation
  const skillWords = [
    "creating websites",
    "making games",
    "solving hard algorithmic questions",
  ];
  const typingArea = document.querySelector(".typingContainer .second-text");
  const additionTime = 100;
  let typingTime = 800;
  const timesRepeated = 1000;

  for (let i = 0; i < timesRepeated; i++) {
    skillWords.forEach((word) => {
      for (let letter of word) {
        setTimeout(() => {
          typingArea.textContent += letter;
        }, typingTime);
        typingTime += additionTime;
      }

      typingTime += 500;

      for (let j = word.length; j > 0; j--) {
        setTimeout(() => {
          typingArea.textContent = removeLastEl(typingArea.textContent);
        }, typingTime);
        typingTime += additionTime;
      }
    });
  }

  // Check if resized
  window.addEventListener("resize", () => {
    changeTerminalRowsForWindowWidth();

    createTerminalContent();
    animateTerminal();
  });
});
</script>

<template>
  <header id="home">
    <div class="container">
      <div class="left">
        <h1>Ali Guliyev</h1>
        <div class="typingContainer">
          <span class="text first-text">I love</span>
          <span class="text second-text"></span>
          <span class="cursor">│</span>
        </div>
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
  @include flex();
  position: relative;
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
      height: 500px;
      border: 1px solid black;
      background-color: rgba(19, 19, 19, 0.75);
      border-radius: 25px;
      overflow: hidden;

      .typing-area {
        font-weight: bolder;
        height: 100%;
        opacity: 0;
        @include flex(space-evenly, start);
      }

      .top {
        @include flex(space-between);
        background-color: #0f0f0f;
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

      .typingContainer {
        .text {
          position: relative;
        }

        .first-text {
          margin-right: 6px;
        }

        .second-text {
          font-size: 17px;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  #home {
    padding: 0 18px !important;
  }
}

@media screen and (max-width: 900px) {
  #home {
    padding: 0 30px;
  }
}

@media screen and (max-width: 1920px) {
  #home {
    .left {
      h1 {
        font-size: 35px;
      }
    }

    .right.terminal {
      max-width: 750px;
      max-height: 450px;
    }
  }
}

@media screen and (max-width: 1200px) {
  #home {
    .container {
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
}

@keyframes type {
  40%,
  60% {
    left: 100%;
  }
  100% {
    left: 0%;
  }
}
</style>
