<script setup>
onMounted(() => {
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
  links.forEach((link) => {
    link.addEventListener("click", toggleNav);
  });
});
</script>

<template>
  <nav>
    <div class="clickingArea"></div>

    <div class="links">
      <a class="btn" href="#home">Home</a>
      <a class="btn" href="#about">About me</a>
      <a class="btn" href="#work">Work</a>
      <a class="btn" href="#contact">Contact</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/variants";

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
      position: relative;
      width: 300px;
      font-size: 20px;
      margin-top: 15px;
      opacity: 0;
      padding: 14px 20px;
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
</style>
