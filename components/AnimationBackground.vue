<script setup>
import {
  randomFloatNumber,
  randomArrItem,
  randomIntNumber,
} from "../composables/utilities";

// * Website background circles
const circleContainer = ref(null);
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

onMounted(() => {
  const pageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const maxSpeed = 0.2,
    minSpeed = 0.1;

  circleContainer.value.style.height = pageHeight + "px";

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
          parseInt(circleContainer.value.style.height.split("px")[0]) - 10
        ) + "px";
      newEl.style.left = randomIntNumber(100, window.innerWidth - 100) + "px";
      circleContainer.value.appendChild(newEl);
    }
  };

  createCircles();

  circleContainer.value.childNodes.forEach((circle) => {
    let speedX = randomArrItem([
      randomFloatNumber(minSpeed, maxSpeed),
      randomFloatNumber(-maxSpeed, -minSpeed),
    ]);
    let speedY = randomArrItem([
      randomFloatNumber(minSpeed, maxSpeed),
      randomFloatNumber(-maxSpeed, -minSpeed),
    ]);

    let size = parseInt(circle.style.width.split("px")[0]);

    // setInterval(() => {
    //   // Speed X
    //   let circleLeft = parseFloat(circle.style.left.split("px")[0]);

    //   circle.style.left = circleLeft + speedX + "px";

    //   if (speedX > 0 && circleLeft > window.innerWidth - size - size / 2) {
    //     circle.style.left = "-10px";
    //   } else if (speedX < 0 && circleLeft < -size) {
    //     circle.style.left = window.innerWidth - size + "px";
    //   }

    //   // Speed X
    //   let circleTop = parseFloat(circle.style.top.split("px")[0]);

    //   circle.style.top = circleTop + speedY + "px";

    //   if (speedY > 0 && circleTop > pageHeight - size - 5) {
    //     circle.style.top = "-10px";
    //   } else if (speedY < 0 && circleTop < -size) {
    //     circle.style.top = pageHeight - size + "px";
    //   }
    // }, 5);
  });
});
</script>

<template>
  <div class="circle-container" ref="circleContainer"></div>
</template>

<style lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

.circle-container {
  opacity: 0.4;
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
</style>
