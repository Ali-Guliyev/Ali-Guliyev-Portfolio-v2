<script setup>
onMounted(() => {
  // // * Welcome typing animation
  // const greetingSentence = "Welcome to my portfolio website.";
  // const greetingTypingArea = document.querySelector(
  //   ".greetingContainer .typingArea"
  // );
  // let greetingTypingTime = 100;
  // for (let i = 0; i < greetingSentence.length; i++) {
  //   setTimeout(() => {
  //     greetingTypingArea.textContent += greetingSentence[i];
  //   }, greetingTypingTime);
  //   greetingTypingTime += 100;
  // }
});
</script>

<template>
  <div>
    <!-- <div class="greetingContainer">
      <p>
        <span class="typingArea"> </span>
        <span class="cursor">|</span>
      </p>
    </div> -->

    <AnimationBackground />
    <Burger />
    <Nav />
    <Header />
    <About />
    <Work />
    <Contact />
  </div>
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
</style>
