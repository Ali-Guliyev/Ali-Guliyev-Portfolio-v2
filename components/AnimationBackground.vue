<script setup>
import {
  randomFloatNumber,
  randomArrItem,
  randomIntNumber,
} from "../composables/utilities";

// * Website background circles
const circleContainer = ref(null);
const circleAmount = 1;
const colorsArr = [
  "#5bd228",
  "#5db139",
  "#2b760a",
  "#63bc3d",
  "#3e642e",
  "#378914",
  "#31651b",
];

onMounted(() => {
  circleContainer.value.style.height = "50vh";

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
          parseInt(circleContainer.value.style.height.split("vh")[0]) - 10
        ) + "vh";
      newEl.style.left = randomIntNumber(100, window.innerWidth - 100) + "px";
      circleContainer.value.appendChild(newEl);
    }
  };

  createCircles();

  circleContainer.value.childNodes.forEach((circle) => {
    let speed = -4;
    let size = parseInt(circle.style.width.split("px")[0]);

    // circle.style.top = `${randomNum(0, 100)}%`;
    // circle.style.left = ;
    // circle.style.width = size + "px";
    // circle.style.height = size + "px";
    // circle.style.backgroundColor = "#" + randomArrItem(circleColors);

    setInterval(() => {
      let circleLeft = parseFloat(circle.style.left.split("px")[0]);

      circle.style.left = circleLeft + speed + "px";

      if (speed > 0 && circleLeft > window.innerWidth - size - 5) {
        circle.style.left = "-10px";
      } else if (speed < 0 && circleLeft < -5) {
        circle.style.left = window.innerWidth + "px";
      }
    }, 5);
  });
});
</script>

<template>
  <div class="circle-container" ref="circleContainer"></div>
</template>

<style lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

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
  animation: fade-out 1s ease 5.5s forwards;
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
</style>
