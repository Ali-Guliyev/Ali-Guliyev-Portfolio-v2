<script setup>
onMounted(() => {
  document.body.style.overflowY = "hidden";

  setTimeout(() => {
    document.body.style.overflowY = "scroll";
    document.documentElement.scrollTop = 0;
  }, 4500);

  // * Welcome typing animation
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
});
</script>

<template>
  <div class="greetingContainer">
    <p>
      <span class="typingArea"> </span>
      <span class="cursor">|</span>
    </p>
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
  animation: fade-out 1s ease 4.5s forwards;
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
