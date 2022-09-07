<script setup>
onMounted(() => {
  // * Website background circles
  const circleContainer = document.querySelector(".circle-container");
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

  circleContainer.style.height = "50vh";

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

  setInterval(() => {
    const speed = 0.5;

    circleContainer.childNodes.forEach((circle) => {
      circle.style.left =
        parseInt(circle.style.left.split("px")[0]) + speed + "px";

      console.log(circle.style.left);
    });
  }, 5);
});
</script>

<template>
  <div class="circle-container"></div>
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
